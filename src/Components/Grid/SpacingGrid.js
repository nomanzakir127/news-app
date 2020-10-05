import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../Media/MediaCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '25px',
    marginLeft: '3%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SpacingGrid(props) {
  const classes = useStyles();
  const {newsList} = props

  const items = []

  for (const i in newsList) {
     if(i>0)
     {
        items.push(<Grid item xs={12} sm={6} md={4} lg={4} key={i}><MediaCard  news={newsList[i]} index={i} key={i}></MediaCard></Grid>)
     }      
  }

  
  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            {items}
        </Grid>
    </div>
  );
}
