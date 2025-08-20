import React from 'react';
import { Typography, Stack } from '@mui/material';
import Page from '../components/Page';
import PendingProject from '../components/PendingProject';
import ProjectDescription from '../components/ProjectDescription';

const ProjectTrackerPage: React.FC = () => {
  return (
    <Page maxWidth="md" center>
      <Typography variant="h3" component="h1" gutterBottom>
        Project Tracker
      </Typography>

      <Stack spacing={3}>
        <PendingProject
          title="Project Tracker Website Page"
          progress={32}
          status="in_progress"
          description={
            <ProjectDescription>
              <Stack spacing={2}>
                <Typography variant="body2" component="p">
                  Project Tracker is a lightweight dashboard I'm building to showcase what I'm currently working on and what's coming next, all in one place.
                </Typography>
                <Typography variant="body2" component="p">
                  Each project shows a simple progress percentage, a rough, manual estimate, alongside quick notes on recent work, blockers, and next steps.
                </Typography>
                <Typography variant="body2" component="p">
                  The purpose is to make updates easy to skim and share so I can surface issues early, communicate progress clearly, and keep momentum visible without digging through docs or chats.
                </Typography>
                <Typography variant="body2" component="p">
                  I hope to eventually integrate the tracker with GitHub so that I can have an "Updates" area that brings in PR merge data.
                </Typography>
              </Stack>
            </ProjectDescription>
          }
          sourceUrl="https://github.com/MaxBielstein/Website"
        />
      </Stack>
    </Page>
  );
};

export default ProjectTrackerPage;
