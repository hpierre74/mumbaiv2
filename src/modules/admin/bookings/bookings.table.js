import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

const styles = theme => ({
  root: {
    maxWidth: '95%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: { minWidth: 700 },
  header: { background: theme.palette.primary[500] },
  cell: { color: '#FFFFFF' },
  rootCell: {
    padding: 0,
    textAlign: 'center',
  },
});

function BookingsTable(props) {
  const { classes, bookings } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell classes={{ root: classes.rootCell }} className={classes.cell}>
              Nom
            </TableCell>
            <TableCell classes={{ root: classes.rootCell }} className={classes.cell}>
              Date
            </TableCell>
            <TableCell classes={{ root: classes.rootCell }} className={classes.cell}>
              Personnes
            </TableCell>
            <TableCell classes={{ root: classes.rootCell }} className={classes.cell}>
              Heure
            </TableCell>
            <TableCell classes={{ root: classes.rootCell }} className={classes.cell}>
              Téléphone
            </TableCell>
            <TableCell classes={{ root: classes.rootCell }} className={classes.cell} />
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings ? (
            Object.values(bookings).map(row => {
              return (
                <TableRow key={row.lastname}>
                  <TableCell classes={{ root: classes.rootCell }} component="th" scope="row">
                    {row.lastname}
                  </TableCell>
                  <TableCell classes={{ root: classes.rootCell }}>{row.datetime}</TableCell>
                  <TableCell classes={{ root: classes.rootCell }}>{row.persons}</TableCell>
                  <TableCell classes={{ root: classes.rootCell }}>{row.hours}</TableCell>
                  <TableCell classes={{ root: classes.rootCell }}>{row.phone}</TableCell>
                  <TableCell classes={{ root: classes.rootCell }}>
                    <IconButton>
                      <Edit />
                    </IconButton>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow key="none">
              <TableCell classes={{ root: classes.rootCell }} component="th" scope="row">
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
  bookings: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]).isRequired,
};

export default withStyles(styles)(BookingsTable);
