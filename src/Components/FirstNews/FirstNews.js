import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CardActionArea from '@material-ui/core/CardActionArea';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import MyContext from '../MyContext/MyContext';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: '1%',
      paddingRight: '1%'
    },
    progress: {
      alignItems: 'center',
      justify: 'center'
   },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
}));

function FirstNews(props){

    const classes = useStyles();
    const context = useContext(MyContext)
    const [expanded, setExpanded] = React.useState(false);
    const {newsList} = props
    const firstNews = newsList[context.index]
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={firstNews === null  ? 'wait..' : firstNews.title}
                    image={firstNews === null  ? 'wait..' : firstNews.urlToImage}
                    title={firstNews === null  ? 'wait..' : firstNews.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {firstNews === null  ? 'wait..' : firstNews.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Author: {firstNews === null ? 'wait..' : firstNews.author}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Deatils:</Typography>
                    <Typography paragraph>
                        {firstNews === null  ? 'wait..' : firstNews.description}
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

export default FirstNews