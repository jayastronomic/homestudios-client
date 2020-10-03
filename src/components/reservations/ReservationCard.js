import React from 'react';
import '../../ReservationCard.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core'


    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: '50%',
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
        button: {
          backgroundColor: 'rgba(238, 87, 87, 0.959)',
          color: 'white',
          borderRadius: '20px',
          textTransform: 'inherit',
        }
      }));
      
      export default function ReservationCard(props) {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };

            const handleDelete = (id) => {
        fetch(`http://localhost:3001/api/v1/reservations/${id}`, {method: 'DELETE', credentials: "include"})
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj)
            props.removeReservation(obj)
        })
        .catch(err => console.log(err))
        }

        return (
        <div className="flex-container">
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    •
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={props.studio.name}
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image={props.studio.img}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
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
                <Typography paragraph>Info:</Typography>
                <Typography paragraph>
                  {props.studio.description}
      
                  
                </Typography>
                  <Button className={classes.button} variant="outlined" onClick={() => handleDelete(props.id)}>Cancel Reservation</Button>
              </CardContent>
            </Collapse>
          </Card>
          </div>
        );
      }