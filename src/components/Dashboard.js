import React from 'react';
import ProgressBar from './ProgressBar';
import TaskList from './TaskList';
import Issues from './Issues';
import ProgramStatus from './ProgramStatus';
import DepartmentStatus from './DepartmentStatus';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        mb={4} 
        p={2}
        style={{ backgroundColor: 'white', color: '#747879' }} // 배경색과 텍스트 색상 설정
      >
        <img 
          src={`${process.env.PUBLIC_URL}/blender_logo5.webp`} 
          alt="Combined Logo" 
          style={{ width: 50, height: 50, marginRight: 10, borderRadius: '12px' }} // 모서리를 둥글게 설정
        />
        <Typography variant="h4" gutterBottom pl={2} pt={2}>
          Blender Dashboard 
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <ProgressBar />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} style={{ height: '400px' }}> {/* 높이를 2배로 조정 */}
          <Paper style={{ height: '100%' }}>
            <ProgramStatus />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} style={{ height: '400px' }}> {/* 높이를 2배로 조정 */}
          <Paper style={{ height: '100%' }}>
            <DepartmentStatus />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <TaskList title="Tasks This Week" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <TaskList title="Tasks Next Week" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Issues />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
