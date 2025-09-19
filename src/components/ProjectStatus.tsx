import * as React from 'react';
import { Box, Typography, ButtonBase, Tooltip, Collapse } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ProjectStatusValue } from '../types/project'

export type ProjectStatusProps = {
  status: ProjectStatusValue;
  blockedInfo?: React.ReactNode;
};

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status, blockedInfo }) => {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();

  const text =
    status === 'in_progress'
      ? 'In Progress'
      : status === 'blocked'
      ? 'Blocked'
      : status === 'not_started'
      ? 'Not Started'
      : 'On Hold';

  return (
    <Box>
      {status === 'blocked' ? (
        <>
          <Tooltip title="Click for details" arrow>
            <ButtonBase
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={`${id}-blocked-details`}
              sx={{ p: 0, display: 'inline-flex', alignItems: 'center', gap: 0.75 }}
            >
              <Typography variant="subtitle2" sx={{ color: (t) => t.palette.error.main }}>
                {text}
              </Typography>
              <InfoOutlinedIcon fontSize="small" />
            </ButtonBase>
          </Tooltip>
          <Collapse in={open}>
            <Box id={`${id}-blocked-details`} sx={{ mt: 1 }}>
              {blockedInfo ?? <Typography variant="body2">No details provided.</Typography>}
            </Box>
          </Collapse>
        </>
      ) : (
        <Typography
          variant="subtitle2"
          sx={{
            color: status === 'in_progress' ? (t) => t.palette.warning.main : 'text.secondary',
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default ProjectStatus;
