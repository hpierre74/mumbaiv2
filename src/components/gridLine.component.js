import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
    '&:hover': { cursor: 'grab' },
  },
  title: { color: theme.palette.primary.light },
  titleBar: { background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)' },
});

function GridLine(props) {
  const { classes, items } = props;

  const renderItemTiles = () =>
    Object.values(items).map(item => (
      <GridListTile rows={1.75} className={classes.list} key={item.url}>
        <img width="300px" height="100%" src={item.url} alt={item.url} />
      </GridListTile>
    ));

  return items ? (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={window.innerWidth > 600 ? 2.5 : 1.3}>
        {renderItemTiles()}
      </GridList>
    </div>
  ) : null;
}

GridLine.defaultProps = { items: null };

GridLine.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  items: PropTypes.shape({}),
};

export default withStyles(styles)(GridLine);
