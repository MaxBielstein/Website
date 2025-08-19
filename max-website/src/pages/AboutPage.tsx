import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Page from '../components/Page';
import profilePic from '../assets/images/Profile-pic.jpg';

const AboutPage: React.FC = () => {
    return (
        <Page maxWidth="md" center>
            <Box
                component="img"
                src={profilePic}
                alt="Max Bielstein"
                sx={{ width: { xs: '150px', md: '200px' }, borderRadius: '50%', mb: 2 }}
            />
            <Typography variant="h3" component="h1" gutterBottom>
                Max Bielstein
            </Typography>

            <Typography variant="body1" gutterBottom>
                I'm Max, a driven software engineer with extensive experience in cloud technologies. My journey began at 15
                when I started developing Minecraft plugins in Java—a spark that ignited my relentless pursuit of excellence
                and innovation.
            </Typography>


            <Typography variant="body1" gutterBottom>
                I earned my Bachelor of Science in Software Engineering from the University of Nebraska-Lincoln. Currently
                based in Houston, I serve as a Software Engineer II for Principal Financial Group, where I contribute to
                developing robust and scalable cloud solutions. I approach every project with a proactive mindset and a
                get-stuff-done and do it right attitude, always striving to be as efficient as possible.
            </Typography>


            <Typography variant="body1" gutterBottom>
                My commitment to continuous learning and innovation, especially in artificial intelligence, reflects my
                ambition and can-do spirit. Whether I'm creating new AI solutions or applying them to solve complex
                challenges, I thrive on turning ideas into reality. I take immense pride in my work and excel in
                collaborative, communicative environments that drive success. Outside of work, I channel my energy into
                exploring new destinations and hitting the slopes for a day of skiing.
            </Typography>


            <Button variant="contained" color="primary" href="/files/Resume2025Q1.pdf" download>
                Download Resume
            </Button>
        </Page>
    );
};

export default AboutPage;