import React from 'react';

import NavBar from '../../components/navbar.component';
import Iconav from '../../components/iconav.component';
import BookingForm from '../../modules/booking/booking.connector';
import { PageWrapper as BookingWrapper } from '../../components/wrapper.components';

const Booking = () => (
  <BookingWrapper>
    <NavBar />
    <BookingForm />
    <Iconav />
  </BookingWrapper>
);

export default Booking;
