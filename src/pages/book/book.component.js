import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AsyncBooking: () => <CircularProgress /> };
  }

  componentDidMount = async () => {
    try {
      const module = await import('../../modules/booking/booking.connector');
      const AsyncBooking = module.default;
      this.setState({ AsyncBooking });
    } catch (e) {
      this.setState({ AsyncBooking: () => <p>Houston, we got a problem</p> });
    }
  };

  render() {
    const { AsyncBooking } = this.state;

    return <AsyncBooking />;
  }
}

export default Booking;
