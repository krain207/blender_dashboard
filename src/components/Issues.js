import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const Issues = () => {
  // Example issues
  const issues = [
    'Issue 1: Description of the issue',
    'Issue 2: Description of the issue',
    'Issue 3: Description of the issue',
  ];

  return (
    <Box p={2}>
      <Typography variant="h6">Issues</Typography>
      <List>
        {issues.map((issue, index) => (
          <ListItem key={index}>
            <ListItemText primary={issue} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Issues;
