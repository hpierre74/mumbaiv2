import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { PageWrapper as HomeWrapper } from '../../components/wrapper.components';
// import Presentation from '../../modules/presentation/presentation.connector';
// import Events from '../../modules/events/events.connector';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AsyncPlayer: () => <CircularProgress />,
      AsyncEvents: () => <CircularProgress />,
      AsyncPres: () => <CircularProgress />,
    };
  }

  componentDidMount = async () => {
    try {
      const modulePlayer = await import('../../components/player.component');
      const moduleEvents = await import('../../modules/events/events.connector');
      const modulePres = await import('../../modules/presentation/presentation.connector');
      const AsyncPlayer = modulePlayer.default;
      const AsyncPres = modulePres.default;
      const AsyncEvents = moduleEvents.default;
      this.setState({ AsyncPlayer, AsyncEvents, AsyncPres });
    } catch (e) {
      this.setState({
        AsyncPlayer: () => <p>Houston, we got a problem</p>,
        AsyncEvents: () => <p>Houston, we got a problem</p>,
        AsyncPres: () => <p>Houston, we got a problem</p>,
      });
    }
  };

  render() {
    const { AsyncPlayer, AsyncEvents, AsyncPres } = this.state;

    return (
      <HomeWrapper>
        <AsyncPlayer />
        <AsyncPres />
        <AsyncEvents />
        <AsyncPres />
      </HomeWrapper>
    );
  }
}

export default Home;
