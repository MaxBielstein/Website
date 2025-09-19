import * as React from 'react';
import { Card, CardHeader, CardContent, Box, Stack, Typography, Link, Divider } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import ProgressBar from './ProgressBar';
import ProjectDescription, { ProjectDescriptionProps } from './ProjectDescription';
import ProjectStatus from './ProjectStatus';
import { ProjectStatusValue } from '../types/project';

export type PendingProjectProps = {
  title: string;
  progress: number;
  status: ProjectStatusValue;
  blockedInfo?: React.ReactNode;
  description: React.ReactElement<ProjectDescriptionProps, typeof ProjectDescription>;
  sourceUrl?: string;
};

const PendingProject: React.FC<PendingProjectProps> = ({
  title,
  progress,
  status,
  blockedInfo,
  description,
  sourceUrl,
}) => {
  return (
    <Card variant="outlined" sx={{ bgcolor: 'background.default' }}>
      <CardHeader title={<Typography variant="h6" component="h2">{title}</Typography>} sx={{ pb: 0 }} />
      <CardContent>
        <Stack spacing={2.5}>
          <ProjectStatus status={status} blockedInfo={blockedInfo} />
          <ProgressBar value={progress} thickness={28} />
          {description}
          <Divider />
          <Box>
            {sourceUrl ? (
              <Link
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontWeight: 600 }}
              >
                Source code <LaunchIcon fontSize="small" />
              </Link>
            ) : (
              <Typography variant="body2" color="text.secondary" fontWeight={600}>
                Source code is private
              </Typography>
            )}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PendingProject;
