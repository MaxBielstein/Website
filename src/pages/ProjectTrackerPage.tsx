import React from 'react';
import { Typography, Stack } from '@mui/material';
import Page from '../components/Page';
import PendingProject from '../components/PendingProject';
import ProjectDescription from '../components/ProjectDescription';
import { ProjectStatusValue } from '../types/project';

const ProjectTrackerPage: React.FC = () => {
  return (
    <Page maxWidth="md" center>
      <Typography variant="h3" component="h1" gutterBottom>
        Project Tracker
      </Typography>

      <Stack spacing={3}>
        <PendingProject
          title="Project Tracker Website Page"
          progress={45}
          status={ProjectStatusValue.IN_PROGRESS}
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
          title="Next.js - AWS Website Template"
          progress={80}
          status={ProjectStatusValue.IN_PROGRESS}
          description={
            <ProjectDescription>
              <Stack spacing={2}>
                <Typography variant="body2" component="p">
                  This template will serve as my goto template when creating new web applications.
                </Typography>
                <Typography variant="body2" component="p">
                  I am setting it up with Next.js and AWS so that I can have a scalable solution that will work for pretty much any web application project
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
        <PendingProject
          title="AI Pizza Identifier"
          progress={15}
          status={ProjectStatusValue.ON_HOLD}
          description={
            <ProjectDescription>
              <Stack spacing={2}>
                <Typography variant="body2" component="p">
                  This project is an AI model project to create a model which can identify what toppings are on an uncooked pizza before putting it in the oven.
                </Typography>
                <Typography variant="body2" component="p">
                  The goal of this project is to be able to allow AI to recognize different uncooked pizzas as they go into a conveyer oven. This AI would be used for automatically categorizing 
                  different pizzas and coorelating them to "made" pizzas which have already been topped and placed onto the oven conveyer. This would be useful for keeping track of 
                  inventory as well as knowing which pizzas are in the oven at any given time without having to open the oven to look.
                </Typography>
                <Typography variant="body2" component="p">
                  I put this project on hold as I couldn't find a reasonable dataset to use. In the future, I may try to create my own small dataset and then augment the pictures to hopefully form a larger dataset to
                  in order to train the AI more accurately.
                </Typography>
                  <Typography variant="body2" component="p">
                  Current I have successfully trained a very low quality small LLM model to reasonably predict between cheese, pepperoni, and hamburger uncooked pizzas. It isn't very accurate as I only
                  had 10 images for training, but it does lay the groundwork for future implementations with more training data.
                </Typography>
              </Stack>
            </ProjectDescription>
          }
          sourceUrl="https://github.com/MaxBielstein/AI-pizza-identifier"
        />
      </Stack>
    </Page>
  );
};

export default ProjectTrackerPage;
