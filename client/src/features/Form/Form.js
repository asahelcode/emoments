import { Paper, TextField, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

import useStyles from './styles';

const Form = () => {
  const [postData, setpostData] = useState({
    title: '',
    message: '',
    tags: [],
    creator: '',
    selectedFile: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(postData);
  };
  const clear = () => {};

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>Create a Memory</Typography>
        <TextField
          type='text'
          label='creator'
          variant='outlined'
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setpostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          type='text'
          label='title'
          variant='outlined'
          fullWidth
          value={postData.title}
          onChange={(e) => setpostData({ ...postData, title: e.target.value })}
        />
        <TextField
          type='text'
          label='message'
          variant='outlined'
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setpostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          type='text'
          label='tags, comma separated'
          variant='outlined'
          fullWidth
          value={postData.tags}
          onChange={(e) => setpostData({ ...postData, tags: e.target.value.split(',') })}
        />

        <div className={classes.fileInput}>
          <FileBase64
            multiple={false}
            onDone={({ base64 }) =>
              setpostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          variant='contained'
          color='primary'
          className={classes.buttonSubmit}
          fullWidth
          type='submit'
        >
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          className={classes.buttonSubmit}
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
