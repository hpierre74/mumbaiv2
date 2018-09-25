import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getData } from '../../../utils/firebase.utils';
import allbookings from './bookings-fixture.json';
import { Table, THead, TBody, Tr, Td, Th } from '../../../components/table.components';
import { Title3 } from '../../../components/title.components';
import { getOrderedData } from '../../firebase/firebase.class';
import { getBookingsForDate } from '../../booking/booking.class';

const PageWrapper = styled.div``;
const Header = styled.div`
  background: #25272b;
`;
const SectionsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  margin: 2.5%;
`;

const Title = styled(Title3)`
  margin: 0;
  padding: 1%;

  color: white;
`;
const TableWrapper = styled.div`
  width: 80%;
`;
const ActionsWrapper = styled.div`
  width: 20%;

  text-align: center;
`;

const Action = styled.div`
  border: 1px solid #25272b;
`;
const ActionTitle = styled(Title3)`
  background: #25272b;
  margin: 0;
  color: white;
  text-transform: lowercase;
  line-height: 40px;
`;

class BookingManager extends Component {
  constructor(props) {
    super(props);
    this.today = new Date('2018-03-20T13:00:27+01:00');
    this.state = {
      services: [],
      today: this.today,
      year: this.today.getFullYear(),
      bookings: [],
    };
  }

  componentDidMount = () => {
    getBookingsForDate(this.today).then(bookings => this.setState({ bookings }));
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.state.bookings);
  };

  renderBookingsTable = bookings =>
    Object.values(bookings).map(booking => (
      <Tr key={booking.name}>
        <Td>{booking.lastname}</Td>
        <Td>{booking.tel}</Td>
        <Td>{booking.date}</Td>
        <Td>{booking.time}</Td>
      </Tr>
    ));

  render() {
    return (
      <PageWrapper>
        <Header>
          <Title>Bookings Manager</Title>
        </Header>
        <SectionsWrapper>
          <TableWrapper>
            <Table>
              <THead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Tel</Th>
                  <Th>Date</Th>
                  <Th>Heure</Th>
                </Tr>
              </THead>
              {/* <TBody>{this.renderBookingsTable(this.state.bookings)}</TBody> */}
            </Table>
          </TableWrapper>
          <ActionsWrapper>
            <Action>
              <ActionTitle>Select Date</ActionTitle>
              <input type="date" />
            </Action>
            <Action>
              <ActionTitle>Forbid Date</ActionTitle>
              <p>one</p>
            </Action>
          </ActionsWrapper>
        </SectionsWrapper>
      </PageWrapper>
    );
  }
}
BookingManager.defaultProps = {
  config: null,
};
BookingManager.propTypes = {
  config: PropTypes.shape({}),
};

export default BookingManager;
