import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class MenuList extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    const { items } = nextProps;

    return {
      menuItems: items,
    };
  }

  state = {
    anchorEl: null,
    menuItems: [],
  };

  componentDidMount = () => {
    this.setState({ menuItems: [] });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  actionAndClose = itemName => {
    this.props.action(itemName, 'fr');
    this.handleClose();
  };

  renderMenuItems = () =>
    Object.values(this.state.menuItems).map(menuItem => (
      <MenuItem
        name={menuItem.name}
        key={menuItem.name}
        onClick={() => this.actionAndClose(menuItem.name.toLowerCase())}
      >
        {menuItem.name}
      </MenuItem>
    ));

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick}>
          Open Menu
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          {this.renderMenuItems()}
        </Menu>
      </div>
    );
  }
}

MenuList.propTypes = {
  action: PropTypes.func.isRequired,
};

export default MenuList;
