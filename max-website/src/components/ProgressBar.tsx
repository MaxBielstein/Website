import * as React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

export type ProgressBarProps = {
  value: number;
  thickness?: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ value, thickness = 24 }) => {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));

  return (
    <Box>
      <Box sx={{ position: 'relative' }}>
        <LinearProgress
          variant="determinate"
          value={clamped}
          aria-label="progress"
          sx={{
            height: thickness,
            borderRadius: 999,
            bgcolor: 'rgba(255,255,255,0.12)',
            '& .MuiLinearProgress-bar': (theme) => ({
              backgroundColor: theme.palette.success.dark,
              borderRadius: 999,
            }),
          }}
        />
        <Typography
          component="span"
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: (t) => t.palette.common.white,
          }}
        >
          {clamped}%
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
