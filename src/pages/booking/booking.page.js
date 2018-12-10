import React from 'react';

import BookingForm from '../../modules/booking/booking.connector';
import { PageWrapper as BookingWrapper } from '../../components/wrapper.components';

const Booking = () => (
  <BookingWrapper>
    <BookingForm />
  </BookingWrapper>
);

export default Booking;
