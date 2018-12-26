import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: '100%',
    margin: '10px',
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;

  const deleteEvent = e => {
    e.preventDefault();
    props.deleteEvent(props.data);
  };

  const setEditEvent = e => {
    e.preventDefault();
    props.setEditEvent(props.data);
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={props.src} title="Click to see more" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" color="primary" onClick={setEditEvent}>
          Edit
        </Button>
        <Button variant="outlined" size="small" color="secondary" onClick={deleteEvent}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setEditEvent: PropTypes.func.isRequired,
};

export default withStyles(styles)(MediaCard);
