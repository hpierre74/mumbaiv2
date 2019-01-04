import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridTitle: {
    position: 'relative',
    top: '50px',
    left: '0px',
    paddingLeft: '4%',
    zIndex: '2',
    width: '100%',
    background: 'linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1), rgba(0,0,0,0))',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  icon: {
    height: '50px',
    width: '50px',
  },
  list: {
    height: '300px',
    '&:hover': {
      cursor: 'grab',
    },
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

function SingleLineGridList(props) {
  const { classes, events } = props;

  const renderEventTiles = () =>
    Object.values(events).map(event => (
      <GridListTile rows={1.75} className={classes.list} key={event.key}>
        <img width="300px" height="100%" src={event.imageUrl} alt={event.title} />
        <GridListTileBar
          title={event.title}
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
        />
      </GridListTile>
    ));

  return events ? (
    <div className={classes.root}>
      <Typography className={classes.gridTitle} align="left" gutterBottom variant="h4" component="h3">
        Nos Events
      </Typography>

      <GridList className={classes.gridList} cols={window.innerWidth % 2}>
        {renderEventTiles()}
      </GridList>
    </div>
  ) : null;
}

SingleLineGridList.defaultProps = {
  events: null,
};

SingleLineGridList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  events: PropTypes.shape({}),
};

export default withStyles(styles)(SingleLineGridList);
