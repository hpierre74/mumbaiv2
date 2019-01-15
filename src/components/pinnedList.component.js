import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = {
  root: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
};

function PinnedList(props) {
  const { classes, commands } = props;
  let i = 0;
  return (
    <List className={classes.root} subheader={<li />}>
      {commands.map(command => (
        <li key={`section-${command.label}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{command.label}</ListSubheader>
            {command.actions.map(action => (
              <ListItem onClick={action.trigger} key={`item-${action.label}-${++i}`}>
                <ListItemText primary={`${action.label}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}

PinnedList.propTypes = {
  classes: PropTypes.object.isRequired,
  commands: PropTypes.array.isRequired,
};

export default withStyles(styles)(PinnedList);
