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
    padding: '10% 0%',
  },
  gridTitle: { padding: '2.5% 0' },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  icon: {
    height: '50px',
    width: '50px',
  },
  list: { '&:hover': { cursor: 'grab' } },
  title: { color: theme.palette.primary.light },
  titleBar: { background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)' },
});

const widthPercent = window.innerWidth;

const colsWidth = width => {
  if (width > 1500) {
    return 3;
  }
  if (width > 1250) {
    return 2.5;
  }
  if (width > 1000) {
    return 1.75;
  }
  if (width > 700) {
    return 1.5;
  }
  if (width > 500) {
    return 1.25;
  }

  return 1;
};

function SingleLineGridList(props) {
  const { classes, events } = props;
  const renderEventTiles = () =>
    Object.values(events).map(event => (
      <GridListTile rows={2} className={classes.list} key={event.key}>
        <img width="400px" height="100%" src={event.imageUrl} alt={event.title} />
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
      <Typography color="primary" className={classes.gridTitle} align="left" gutterBottom variant="h5" component="h3">
        Nos Actus
      </Typography>

      <GridList cols={colsWidth(widthPercent)} className={classes.gridList}>
        {renderEventTiles()}
      </GridList>
    </div>
  ) : null;
}

SingleLineGridList.defaultProps = { events: null };

SingleLineGridList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  events: PropTypes.shape({}),
};

export default withStyles(styles)(SingleLineGridList);
