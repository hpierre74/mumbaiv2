import React from 'react';

import Iconav from '../../components/iconav.component';
import BookingForm from '../../modules/booking/booking.connector';
import { PageWrapper as BookingWrapper } from '../../components/wrapper.components';

const Booking = () => (
  <BookingWrapper>
    <BookingForm />
    <Iconav />
  </BookingWrapper>
);

export default Booking;
