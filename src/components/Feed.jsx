import React from 'react';
import {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { SideBar, Videos } from './'

const Feed = () => {
  return (

    // flexDirection is column for small devices, row for medium or larger devices.
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "black" }}>
      {/* height is auto for small devices, 92vh for medium or larger devices */}
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}}>
        <SideBar></SideBar>
        <Typography className='Copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 YouTube Clone
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: "auto", height: "95vh", flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:"white"}}>
          New <span style={{color:"#FC1503"}}> Videos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box>
      

    </Stack>
  )
}



export default Feed