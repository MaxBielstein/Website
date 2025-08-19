import * as React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';


export default function Layout() {
    return (
        <>
            <Header />
            {/* This single Toolbar provides the offset for the fixed AppBar.
You will NOT add spacers in individual pages. */}
            <Toolbar />


            <Box component="main">
                <Outlet />
            </Box>
        </>
    );
}