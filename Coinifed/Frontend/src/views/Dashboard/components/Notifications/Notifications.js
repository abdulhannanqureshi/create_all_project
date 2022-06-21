import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from "clsx";
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState,useEffect } from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Loader from 'components/common/Loader/loader';
import noDataImage from '../../../../assets/images/Dashboard/noDataImage.svg'
const useStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    minHeight: "500px",
    justifyContent: "center",
    alignItems: "center",
  },
  titleCta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tableWrapper: {
    [theme.breakpoints.down("sm")]: {
      minWidth: 670,
    },
  },
  emptyData: {
    fontWeight: "700",
  },
  toCapitalize: {
    textTransform: 'capitalize'
  },
  AttachMoneyIcon: {
    paddingRight: "12px",
  },
  displayFlex:
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  centeredText: {
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"10px"
  },
  themeText:
  {
    color:"#5120FF"
  },
  noDataImg:
  {
    maxWidth:'100%',
    height:"100px"
  },

}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Notifications = (props) => {
  const { className, paymentHistory, insideLoader,handleLoaderDeactive, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  useEffect(()=>
  {
    handleLoaderDeactive("transaction")
  },[])
  const discount = (discount) =>
  {
    const discountTempp = parseInt(discount)
    const discountAmount = discountTempp.toFixed(2);
    return discountAmount
  }

  return (
    <>
      {
        insideLoader ?
          <div>
            <Loader />
          </div> : null}
      <div className={className} {...rest}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12}>
            <div className={classes.titleCta}>
              <Typography variant='h6' color='textPrimary'>
                My Transactions
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12}>
            <TableContainer>
              <Table
                className={clsx(classes.table, classes.tableWrapper)}
                aria-label='simple table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell>S.No.</TableCell>
                    <TableCell align='left'>Name</TableCell>
                    <TableCell align='left'>Date</TableCell>
                    <TableCell align='center'>Discount</TableCell>
                    <TableCell align='center'>Coupan Discount</TableCell>
                    <TableCell align='center'>Total Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paymentHistory && paymentHistory.length ? (
                    <>
                      {paymentHistory.map((row, index) => (
                        <TableRow key={row.index}>
                          <TableCell component='th' scope='row'>
                            {index + 1}.
                          </TableCell>
                          <TableCell component='th' scope='row' className={classes.toCapitalize}>
                            {row.fullName}
                          </TableCell>
                          <TableCell align='left'>
                            {moment(row.createdAt).format("dddd, MMMM Do YYYY")}
                          </TableCell>
                          <TableCell align='center'>
                            ${discount(row.discount)}
                          </TableCell>
                          <TableCell align='center'>
                            ${row.discountedAmount}
                          </TableCell>
                          <TableCell align='center'>${row.grandTotal}</TableCell>
                        </TableRow>
                      ))}
                    </>
                  ) : (
                    <TableRow>
                      <TableCell
                        component='th'
                        scope='row'
                        colSpan='5'
                        align='center'
                        className={classes.emptyData}
                      >
                       
                          <Typography variant='h7' color='textPrimary' className={classes.centeredText}>
                            <div>
                              <img src={noDataImage} alt="no-data-img" className={classes.noDataImg} />
                            </div>
                          </Typography>
                          <Typography variant='h7' color='textPrimary' className={classes.centeredText}>
                            <div className={classes.themeText}>
                              No Transactions made yet.
                            </div>
                          </Typography>
                        
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

Notifications.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Notifications;
