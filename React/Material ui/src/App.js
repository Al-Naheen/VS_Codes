import React from 'react';
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    fontSize: '40px'
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Button className={classes.root} variant='contained' color='secondary' fullWidth>Click Me</Button>
    </div>
  );
}

export default App;
