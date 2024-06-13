import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const TaskList = ({ title }) => {
  // Example tasks
  const tasks = [
    'Task 1',
    'Task 2',
    'Task 3',
    'Task 4',
  ];

  return (
    <Box p={2}>
      <Typography variant="h6">{title}</Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
