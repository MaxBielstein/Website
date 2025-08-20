import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export type ProjectDescriptionProps = {
  title?: React.ReactNode;
  defaultExpanded?: boolean;
  children: React.ReactNode;
};

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title = 'Description',
  defaultExpanded,
  children,
}) => {
  return (
    <Accordion
      disableGutters
      defaultExpanded={defaultExpanded}
      sx={{
        bgcolor: 'transparent',
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          '& .MuiAccordionSummary-content': {
            m: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        {typeof title === 'string' ? (
          <Typography sx={{ textAlign: 'center', width: '100%', fontWeight: 600 }}>
            {title}
          </Typography>
        ) : (
          title
        )}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default ProjectDescription;
