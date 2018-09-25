import React, { Component } from 'react';

const withComponent = pathToComponent => {
  class withComponentHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        AsyncComponent: () => <p>loading...</p>,
      };
    }

    async componentDidMount() {
      const module = await import(pathToComponent);
      const AsyncComponent = module.default;

      this.setAsyncComponent(AsyncComponent);
    }

    setAsyncComponent(AsyncComponent) {
      this.setState({ AsyncComponent });
    }

    render() {
      const { AsyncComponent } = this.state;

      return <AsyncComponent {...this.props} />;
    }
  }

  withComponentHOC.propTypes = {};

  return withComponentHOC;
};

export default withComponent;
