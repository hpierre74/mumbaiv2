import * as firebase from '../../firebase/firebase.class';
import { shallow } from 'enzyme/';
import * as Booking from '../booking.class';

const bookings = {
  a: {
    persons: 5,
    firstname: 'a',
    lastname: 'a',
    date: '2018-09-25',
    time: '12:00',
    dateObj: new Date('2018-09-25 12:00:00 GMT+0200'),
    id: 'a',
    tel: '0000000000',
    email: 'a@a.fr',
    comment: '',
  },
  b: {
    persons: 5,
    firstname: 'a',
    lastname: 'b',
    date: '2018-09-25',
    time: '12:00',
    dateObj: new Date('2018-09-25 12:00:00 GMT+0200'),
    id: 'b',
    tel: '0000000000',
    email: 'a@a.fr',
    comment: '',
  },
  c: {
    persons: 5,
    firstname: 'a',
    lastname: 'c',
    date: '2018-09-25',
    time: '12:00',
    dateObj: new Date('2018-09-25 12:00:00 GMT+0200'),
    id: 'c',
    tel: '0000000000',
    email: 'a@a.fr',
    comment: '',
  },
  d: {
    persons: 5,
    firstname: 'a',
    lastname: 'd',
    date: '2018-09-25',
    time: '12:00',
    dateObj: new Date('2018-09-25 12:00:00 GMT+0200'),
    id: 'd',
    tel: '0000000000',
    email: 'a@a.fr',
    comment: '',
  },
};

firebase.getData = jest.fn(() => new Promise(res => res({ val: () => bookings })));

describe('getData mock', () =>
  it('return bookings', () => firebase.getData().then(response => expect(response.val()).toBe(bookings))));

describe('Booking Functions', () => {
  it('getBookingsForDate returns bookings', () =>
    Booking.getBookingsForDate('2018-09-25').then(res => expect(res).toMatchSnapshot()));
  it('getBookingsForDate returns nothing', () =>
    Booking.getBookingsForDate('2018-09-22').then(res => expect(res).toMatchSnapshot()));

  it('getPersonsForDateService returns persons', () =>
    Booking.getPersonsForDateService(bookings.a).then(res => expect(res).toBe(20)));
  it('getPersonsForDateService returns same persons', () =>
    Booking.getPersonsForDateService(bookings.b).then(res => expect(res).toBe(20)));
  it('getPersonsForDateService returns nothing', () =>
    Booking.getPersonsForDateService({ date: '2018-09-22', persons: 3 }).then(res => expect(res).toBe(3)));
});
