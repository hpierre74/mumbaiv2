import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';

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
  const { classes, src, title } = props;
  const eventDatas = {
    a: {
      src,
      title,
      key: 'a'
    },
    b: {
      src,
      title,
      key: 'b'
    },
    c: {
      src,
      title,
      key: 'c'
    }
  };
  const renderEventTiles = events =>
    Object.values(events).map(event => (
      <GridListTile
        className={classes.list}
        style={{ height: '4OOpx' }}
        key={event.key}
      >
        <img width="100%" src={event.src} alt={event.title} />
        <GridListTileBar
          title={event.title}
          classes={{
            root: classes.titleBar,
            title: classes.title
          }}
          // actionIcon={
          //   <IconButton>
          //     <StarBorderIcon className={classes.title} />
          //   </IconButton>
          // }
        />
      </GridListTile>
    ));

  return (
    <div className={classes.root}>
      <Arrows>
        <ArrowBack className={classes.icon} />
        <ArrowForward className={classes.icon} />
      </Arrows>
      <GridList className={classes.gridList} cols={1}>
        {renderEventTiles(eventDatas)}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(SingleLineGridList);
