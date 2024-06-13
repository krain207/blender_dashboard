import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const ProgramStatus = () => {
  const programs = [
    { name: 'Program A', progress: 80 },
    { name: 'Program B', progress: 60 },
    { name: 'Program C', progress: 90 },
  ];

  return (
    <Box p={2} style={{ height: '100%', overflowY: 'auto' }}>
      <Typography variant="h6">Program Status</Typography>
      {programs.map((program) => (
        <Box key={program.name} display="flex" alignItems="center" mt={2}>
          <Typography variant="body1" style={{ width: '30%' }}>
            {program.name}
          </Typography>
          <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={program.progress} />
          </Box>
          <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${program.progress}%`}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProgramStatus;
