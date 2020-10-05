import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyContext from '../MyContext/MyContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 400,
    maxHeight: 400,
    marginTop: '10px'
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const context = useContext(MyContext)
  const {news, index} = props
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
              className={classes.media}
              image={news.urlToImage? news.urlToImage : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhelpx.adobe.com%2Fin%2Fstock%2Fhow-to%2Fvisual-reverse-image-search.html&psig=AOvVaw151jRrpVWBNmUe63LOXUNN&ust=1601225510640000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDtoIakh-wCFQAAAAAdAAAAABAD'}
              title={news.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {news.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {news.author}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick = {() => context.setNewsIndex(index)}>
            Leran More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
