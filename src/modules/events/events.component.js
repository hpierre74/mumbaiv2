import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Typography } from '@material-ui/core';

const Arrows = styled.div`
  top: 200px;
  height: 0px;
  opacity: 0.5;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  position: relative;
`;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  icon: {
    height: '50px',
    width: '50px'
  },
  list: {
    height: '400px'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
});

function SingleLineGridList(props) {
  const { classes, events } = props;

  const renderEventTiles = () =>
    Object.values(events).map(event => (
      <GridListTile
        className={classes.list}
        // style={{ height: '4OOpx' }}
        key={event.title}
      >
        <img
          width="100%"
          height="200px"
          src={event.imageUrl}
          alt={event.title}
        />
        <GridListTileBar
          title={event.title}
          classes={{
            root: classes.titleBar,
            title: classes.title
          }}
        />
      </GridListTile>
    ));

  return events ? (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="h3">
        Nos Events
      </Typography>
      <Arrows>
        <ArrowBack className={classes.icon} />
        <ArrowForward className={classes.icon} />
      </Arrows>
      <GridList
        className={classes.gridList}
        cols={window.innerWidth > 600 ? 3 : 1.3}
      >
        {renderEventTiles()}
      </GridList>
    </div>
  ) : null;
}

SingleLineGridList.defaultProps = {
  events: null
};

SingleLineGridList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  events: PropTypes.shape({})
};

export default withStyles(styles)(SingleLineGridList);
