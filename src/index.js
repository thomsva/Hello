import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Fab, Paper, Stack, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const App = () => {
  const [name, setName] = useState('');

  return (
    <Paper sx={{ m: 5, p: 5 }} elevation={3}>
      <Typography>Version 1.1</Typography>
      <Typography mb={10} variant='h2'>Hello {name!==''?name:'unknown'}!</Typography>
      <Stack spacing={2}>
        <TextField
          label="Enter name"
          name="nameInput"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Fab
          variant="extended"
          color="primary"
          onClick={() => setName('')}
        >
          <DeleteIcon sx={{ mr: 1 }} />
          Reset
        </Fab>
      </Stack>
    </Paper>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

