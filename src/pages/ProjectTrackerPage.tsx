import React from 'react';
import { Typography, Stack } from '@mui/material';
import Page from '../components/Page';
import PendingProject from '../components/PendingProject';
import ProjectDescription from '../components/ProjectDescription';

const ProjectTrackerPage: React.FC = () => {
  return (
    <Page maxWidth="md" center>
      <Typography variant="h3" component="h1" gutterBottom>
        Current Projects
      </Typography>

      <Stack spacing={3}>
        <PendingProject
          title="Project Tracker Website Page"
          progress={33}
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
        <PendingProject
          title="Repository to text compressor for AI"
          progress={15}
          status="in_progress"
          description={
            <ProjectDescription>
              <Stack spacing={2}>
                <Typography variant="body2" component="p">
                  The repository to text compressor for AI is an idea I came up with when playing around with open AI.
                  I needed a tool for taking an entire repository and compiling it into a single text document so that I could send the entire structure and code of a project to OpenAPIs AI model for review.
                  The aim of this tool is to do exactly that
                </Typography>
                <Typography variant="body2" component="p">
                 I currently have a first draft of it built out in python but I am yet to put it up on a public repository. So the below source code link will not work quite yet
                </Typography>
                <Typography variant="body2" component="p">
                  Eventually I want to optimize this app even more so that I can compress an entire repository into a very small amount text to be able to save money on tokens. However, the AI still has to be able to understand the complete code structure and code inside the files, which is the primary challenge.
                </Typography>
              </Stack>
            </ProjectDescription>
          }
        />
        <PendingProject
          title="NextJs - AWS Website Template"
          progress={2}
          status="in_progress"
          description={
            <ProjectDescription>
              <Stack spacing={2}>
                <Typography variant="body2" component="p">
                  This template will serve as my goto template when creating new web applications. 
                </Typography>
                <Typography variant="body2" component="p">
                 I am setting it up with nextjs and AWS so that I can have a scalable solution that will work for pretty much any web application project
                </Typography>
                <Typography variant="body2" component="p">
                  The goal of this project is to have a template setup so that I can quickly create and deploy web applications for my different projects.
                  I am going to keep developing this as I find useful reusable configurations.
                </Typography>
              </Stack>
            </ProjectDescription>
          }
          sourceUrl="https://github.com/MaxBielstein/AWS-Website-template"
        />
      </Stack>
    </Page>
  );
};

export default ProjectTrackerPage;
