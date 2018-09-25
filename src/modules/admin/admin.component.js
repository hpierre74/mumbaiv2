import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
`;
const pages = {
  gestion: {
    keDueDFesScy1: 'bookings',
    kDevFvDzDFbvy2: 'schedule',
    kqFEXeDFy3: 'settings',
    kDVvcVSSoky4: 'mail',
  },
  edition: {
    kPevGdRJy1: 'book',
    keSVV55S0y2: 'contact',
    kDVSeyDC3: 'home',
    kZCeyEVE4: 'events',
    kACeFVRy5: 'menu',
  },
};

class AdminRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landing: true,
    };
  }

  componentDidMount() {
    Object.keys(pages).map(listKey => Object.values(pages[listKey]).map(item => this.getComponent(item)));
  }

  getComponent(component) {
    return import(`./bookings/bookings.connector.js`).then(module => this.setState({ [component]: module.default }));
  }

  toggleAdminHome = () => this.setState({ landing: false });

  renderAdminRoutes = () =>
    Object.keys(pages).map(listKey =>
      Object.values(pages[listKey]).map(item => (
        <Route key={item} path={`/admin/${item}`} component={this.state[item]} />
      )),
    );

  render() {
    return (
      <Wrapper>
        {/* {this.state.landing && <h3>HELLO ADMIN</h3>} */}
        {this.renderAdminRoutes()}
      </Wrapper>
    );
  }
}

AdminRoutes.propTypes = {
  // pages: PropTypes.shape({}).isRequired,
};

export default AdminRoutes;
