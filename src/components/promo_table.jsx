import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import logo from '../paydro_logo.jpeg';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  image: {
    width: 60,
    height: 60,
  },
});


let id = 0;
function createData(promocode, date, notes) {
  id += 1;
  return { id, promocode, date, notes};
}

const rows = [
  createData('smarterwithsmart', 'Sept 1, 2018', 'for Smart subscribers only'),
  createData('SmarterWithSmart','Sept 1, 2018','for Smart subscribers only'),
  createData('rebiscovery','August 1, 2018',),
  createData('smarterwithsmart', 'Sept 1, 2018', 'for Smart subscribers only'),
  createData('SmarterWithSmart','Sept 1, 2018','for Smart subscribers only'),
  createData('rebiscovery','August 1, 2018',),
  createData('smarterwithsmart', 'Sept 1, 2018', 'for Smart subscribers only'),
  createData('SmarterWithSmart','Sept 1, 2018','for Smart subscribers only'),
  createData('rebiscovery','August 1, 2018',),
  createData('smarterwithsmart', 'Sept 1, 2018', 'for Smart subscribers only'),
  createData('SmarterWithSmart','Sept 1, 2018','for Smart subscribers only'),
  createData('rebiscovery','August 1, 2018',),
  createData('smarterwithsmart', 'Sept 1, 2018', 'for Smart subscribers only'),
  createData('SmarterWithSmart','Sept 1, 2018','for Smart subscribers only'),
  createData('rebiscovery','August 1, 2018',),
  createData('smarterwithsmart', 'Sept 1, 2018', 'for Smart subscribers only'),
  createData('SmarterWithSmart','Sept 1, 2018','for Smart subscribers only'),
  createData('rebiscovery','August 1, 2018',),

];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell><img className={classes.image} src={logo} /></CustomTableCell>
            <CustomTableCell>Promo Code</CustomTableCell>
            <CustomTableCell numeric>Date announced</CustomTableCell>
            <CustomTableCell numeric>Notes</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.id}
                </CustomTableCell>
                <CustomTableCell>{row.promocode}{row.id}</CustomTableCell>
                <CustomTableCell numeric>{row.date}</CustomTableCell>
                <CustomTableCell numeric>{row.notes}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
