import React from 'react';
import {
  Container,
  AppBar,
  Grid,
  Grow,
  Typography,
  Box,
} from '@material-ui/core';

import Post from './features/Post/Post';
import Form from './features/Form/Form';

import useStyles from './styles';

import Logo from './assets/memories.png';

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' className={classes.appBar} color='inherit'>
        <Typography variant='h2' className={classes.heading}>
          Emoments
        </Typography>
        <img
          src={Logo}
          alt='Emoment Logo'
          height='60'
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch'>
            <Grid item xs={12} sm={7}>
              <Post />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
