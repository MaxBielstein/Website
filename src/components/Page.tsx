import React, { PropsWithChildren } from 'react';
import { Box, Container, ContainerProps, SxProps, Theme } from '@mui/material';

type PageProps = PropsWithChildren<{
  maxWidth?: ContainerProps['maxWidth'];
  center?: boolean;            // center content vertically & horizontally
  sx?: SxProps<Theme>;         // extra styles for the outer Box
  containerSx?: SxProps<Theme>; // extra styles for the inner Container
}>;

const Page: React.FC<PageProps> = ({
  children,
  maxWidth = 'md',
  center = true,
  sx,
  containerSx,
}) => (
  <Box
    component="section"
    sx={{
      minHeight: {
        xs: 'calc(100dvh - var(--header-total-xs, 56px))',
        sm: 'calc(100dvh - var(--header-total-sm, 64px))',
      },
      display: 'flex',
      alignItems: center ? 'center' : 'stretch',
      justifyContent: center ? 'center' : 'flex-start',
      p: 2,
      ...sx,
    }}
  >
    <Container
      maxWidth={maxWidth}
      sx={{ textAlign: center ? 'center' : 'initial', ...containerSx }}
    >
      {children}
    </Container>
  </Box>
);

export default Page;
