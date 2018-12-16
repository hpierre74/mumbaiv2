import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  tabs: {
    flexFlow: 'column',
    [theme.breakpoints.up('sm')]: {
      flexFlow: 'row wrap',
    },
  },
});

class PageTabs extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    const { items } = nextProps;

    return {
      menuItems: items,
    };
  }

  state = {
    value: 0,
    menuItems: [],
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.menuItems !== this.state.menuItems) {
      const homePage = Object.values(this.state.menuItems).filter(menuItem => menuItem.path === '/')[0];

      this.getPageData(homePage.target);
    }
  };

  getPageData = itemName => {
    this.props.action(itemName, 'fr');
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  renderPageTabs = () =>
    Object.values(this.state.menuItems).map(menuItem => (
      <Tab
        name={menuItem.name}
        key={menuItem.name}
        onClick={() => this.getPageData(menuItem.target)}
        label={menuItem.name}
      />
    ));

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            classes={{ flexContainer: classes.tabs }}
            fullWidth
          >
            {this.renderPageTabs()}
          </Tabs>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

PageTabs.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  action: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({}), PropTypes.func]).isRequired,
};

export default withStyles(styles)(PageTabs);
