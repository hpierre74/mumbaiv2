import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  header: {
    background: theme.palette.primary[500],
  },
  cell: {
    color: '#FFFFFF',
  },
});

function BookingsTable(props) {
  const { classes, bookings } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell className={classes.cell}>Nom Prénom</TableCell>
            <TableCell className={classes.cell}>Date</TableCell>
            <TableCell className={classes.cell} numeric>
              Personnes
            </TableCell>
            <TableCell className={classes.cell}>Heure</TableCell>
            <TableCell className={classes.cell}>Téléphone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.length > 0 ? (
            Object.values(bookings).map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{moment(row.date).format('DD-MM-YYYY HH:mm')}</TableCell>
                <TableCell numeric>{row.persons}</TableCell>
                <TableCell>{row.hour}</TableCell>
                <TableCell>{row.tel}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow key="none">
              <TableCell component="th" scope="row">
                NO BOOKING AVAILABLE
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

BookingsTable.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  bookings: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default withStyles(styles)(BookingsTable);
