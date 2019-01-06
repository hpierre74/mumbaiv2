import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from '../../components/svg.component';
import logo from '../../logo.svg';

const FullScreen = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100000;
  width: 100%;
  height: 100%;
  background: #0a0a0a;
  transition: all 0.5s;
  visibility: ${({ visible }) => (visible ? 'block' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;
class Splash extends Component {
  componentDidMount = () => {
    if (!this.props.splashed) {
      this.props.showSplash();
    }
  };

  render() {
    return (
      <FullScreen visible={this.props.splash}>
        <SVG src={logo} width="300px" alt="logo" />
      </FullScreen>
    );
  }
}

Splash.propTypes = {
  splash: PropTypes.bool.isRequired,
  splashed: PropTypes.bool.isRequired,
  showSplash: PropTypes.func.isRequired,
};

export default Splash;
