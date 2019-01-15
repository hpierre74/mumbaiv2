import React, { lazy, Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const BookingForm = lazy(() => import('../../modules/booking/booking.connector'));
const CancelBooking = lazy(() => import('../../modules/booking/cancelBooking.connector'));

const Booking = () => (
  <Suspense fallback={<CircularProgress />}>
    <BookingForm />
    <CancelBooking />
  </Suspense>
);

export default Booking;
