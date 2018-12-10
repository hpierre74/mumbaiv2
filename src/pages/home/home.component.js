import React from 'react';

import { PageWrapper as HomeWrapper } from '../../components/wrapper.components';
import Presentation from '../../modules/presentation/presentation.connector';
import Events from '../../modules/events/events.connector';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AsyncPlayer: () => <p>loading...</p>
    };
  }

  componentDidMount = async () => {
    try {
      const module = await import('../../components/player.component');
      const AsyncPlayer = module.default;
      this.setState({ AsyncPlayer });
    } catch (e) {
      this.setState({ AsyncPlayer: () => <p>Houston, we got a problem</p> });
    }
  };

  render() {
    const { AsyncPlayer } = this.state;

    return (
      <HomeWrapper>
        <AsyncPlayer />
        <Presentation duration="1.5" animation="slideInUp" />
        <Events
          title="Exposition Hubert Henry"
          date="Le 4 janvier 2018"
          type="Exposition"
          src="https://firebasestorage.googleapis.com/v0/b/mumbai-redux.appspot.com/o/mcbg.jpg?alt=media&token=b96bf204-4bdd-4211-bdaa-bf0d10ab375e"
        />
        <Presentation duration="1.5" animation="slideInUp" />
      </HomeWrapper>
    );
  }
}

export default Home;

/* <CardList>
<EventCard
  title="Exposition Hubert Henry"
  date="Le 4 janvier 2018"
  type="Exposition"
  src="https://firebasestorage.googleapis.com/v0/b/mumbai-redux.appspot.com/o/mcbg.jpg?alt=media&token=b96bf204-4bdd-4211-bdaa-bf0d10ab375e"
/>
 <EventCard
  title="Dj Lorem"
  date="Le 18 janvier 2018"
  type="Soirée House"
  src="https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/hyungwondj.jpg?itok=VQ5_if3T&mtime=1528780088"
/>
<EventCard
  title="Exposition Crânes"
  date="Le 12 janvier 2018"
  type="Exposition"
  src="https://www.le-bal.fr/sites/default/files/styles/diaporama_full/public/thumbnails/image/c_martin_argyroglo-1.jpg?itok=0Lvca5Oe"
/>
</CardList> */
