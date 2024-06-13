import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const DepartmentStatus = () => {
  const departments = [
    { name: 'Department X', progress: 70 },
    { name: 'Department Y', progress: 85 },
    { name: 'Department Z', progress: 50 },
  ];

  return (
    <Box p={2} style={{ height: '100%', overflowY: 'auto' }}>
      <Typography variant="h6">Department Status</Typography>
      {departments.map((dept) => (
        <Box key={dept.name} display="flex" alignItems="center" mt={2}>
          <Typography variant="body1" style={{ width: '30%' }}>
            {dept.name}
          </Typography>
          <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={dept.progress} />
          </Box>
          <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${dept.progress}%`}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DepartmentStatus;
