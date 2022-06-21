import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import Toast from 'components/toaster';
import { ApiRoutes } from 'config';
import { ApiHelper } from 'helper';
import moment from 'moment';
import Link from 'next/link';
import router from "next/router";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppConfig from '../../../../config/appConfig';
import Loader from 'components/common/Loader/loader';
import noDataImage from '../../../../assets/images/Dashboard/noDataImage.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  disabledButton: {
    background: "#cccccc",
    borderColor: "#cccccc !important",
  },
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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
    "& h6": {
      [theme.breakpoints.down("md")]: {
        width: 130,
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
  accordianDetails: {
    flexFlow: "column",
    borderTop: "1px solid #ccc",
  },
  heading: {
    fontWeight: "600",
  },
  downloadButton: {
    display: "inline-block",
    padding: "10px",
    border: "1px solid #5120FF",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
  textDanger: {
    color: "red",
  },
  accordion: {
    marginBottom: "15px",
    border: "1px solid #ababab",
    minWidth: 600,
  },
  courseWrapper: {
    maxHeight: 500,
    overflowY: "auto",
  },
  commonBtnLink: {
    color: "#fff",
  },
  commonBtn: {
    display: "inline-block",
    padding: "10px 22px",
    backgroundColor: "#5120FF",
    color: "#fff",
    fontSize: 16,
    borderRadius: 5,
    minWidth: 200,
    border: "solid 1px #5120FF",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5120FF",
      boxShadow: "none",
      "& $commonBtnLink": {
        color: "#5120FF",
      },
    },
  },
  anotherCommonBtn: {
    backgroundColor: "#fff",
    color: "#5120FF",
    "&:hover": {
      backgroundColor: "#5120FF",
      color: "#fff",
    },
  },
  smallCommonBtn: {
    padding: "7px 22px",
  },
  centeredText: {
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  loaderDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "90px",
  },
  noDataImg: {
    maxWidth: "100%",
    height: "100px",
  },
  themeText: {
    color: "#5120FF",
  },
  expiryAlertText: {
    color: "red",
  },
  moduleListWrap: {
    flexWrap: "wrap"
  },
  moduleTitleWrap: {
    width: "calc(100% - 150px)"
  }
}));

const Billing = (props) => {
  const {
    className,
    purchaseCourseData,
    insideLoader,
    authToken,
    handleLoaderDeactive,
    ...rest
  } = props;
  const { purchaseCourse, courseDuration } = purchaseCourseData;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [responseLoader, setResponseLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showExpire, setShowExpire] = useState(false);
  const [countDownday, setCountDownDay] = useState("");
  useEffect(() => {
    if (purchaseCourse && purchaseCourse.length > 0) {
      const certificateApproved = purchaseCourse.map(
        (data) => data.courses.isGenerated
      );
      const certificateExpiredateTemp = purchaseCourse.map(
        (data) => data.courses.certificateValidTo
      );
      if (certificateApproved) {
        const certificateExpiredate = new Date(certificateExpiredateTemp);
        const testing = new Date(certificateExpiredateTemp);
        console.log(testing, "testing");
        ///For 14 days before expiry
        const expiryDateBefore = new Date(+testing - 12096e5);
        const presentDate = new Date();
        if (presentDate > expiryDateBefore && presentDate < testing) {
          let remainingDays = testing.getDate() - presentDate.getDate();
          setCountDownDay(remainingDays);
          setShowAlert(true);
          setShowExpire(false);
        }
        if (presentDate > testing) {
          setShowExpire(true);
          setShowAlert(false);
        }
        console.log("expiryDateBefore", expiryDateBefore);
        // let initialTime = certificateExpiredate.setDate(certificateExpiredate.getDate() - 14);
        // let differenceTime = Math.abs(testing.getTime() - initialTime)
        // const differenceDay = DayConverter(differenceTime);
        // const presentDate = new Date();
        // const presenTimeStamp = presentDate.getTime();
        // if(presenTimeStamp >= initialTime)
        // {
        //   let differenceTime1 = Math.abs(testing.getTime() - presenTimeStamp )
        //   let remainingDays = DayConverter(differenceTime1);
        //   setCountDownDay(remainingDays);
        //   setShowAlert(true)
        // }
      }
    }
  }, [purchaseCourse]);
  const DayConverter = (t) => {
    var cd = 24 * 60 * 60 * 1000,
      ch = 60 * 60 * 1000,
      d = Math.floor(t / cd),
      h = Math.floor((t - d * cd) / ch),
      m = Math.round((t - d * cd - h * ch) / 60000),
      pad = function (n) {
        return n < 10 ? "0" + n : n;
      };
    if (m === 60) {
      h++;
      m = 0;
    }
    if (h === 24) {
      d++;
      h = 0;
    }
    return [d];
  };
  const handleCertificate = async (id) => {
    setResponseLoader(true);
    const data = {
      courseId: id,
    };
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.CERTIFICATEREQUEST.service,
      ApiRoutes.CERTIFICATEREQUEST.url,
      ApiRoutes.CERTIFICATEREQUEST.method,
      ApiRoutes.CERTIFICATEREQUEST.authenticate,
      authToken,
      undefined,
      data
    );
    if (response && !response.isError) {
      const data = response.data.data;
      setResponseLoader(false);
      Toast.fire({
        icon: "success",
        title: response.messages,
      });
    } else {
      Toast.fire({
        icon: response.code === 500 ? "warning" : "error",
        title: response.messages,
      });
    }
  };
  useEffect(() => {
    handleLoaderDeactive("billing");
  }, []);
  return (
    <>
      {insideLoader ? (
        <div className={classes.loaderDiv}>
          <Loader />
        </div>
      ) : null}
      <div className={className} {...rest} className={classes.root}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12}>
            <div className={classes.titleCta}>
              <Typography variant='h6' color='textPrimary'>
                My Courses
              </Typography>
              <Typography
                variant='p'
                color='textWarning'
                className={classes.textDanger}
              >
                You will able to request for a Certificate, only if you have
                purchased a full course.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' color='textWarning'>
              To access your purchased courses, please login to link below with
              the same account credentials as you entered here{" "}
              <a
                href={"https://coinifideacademy.talentlms.com/"}
                target='_blank'
              >
                https://coinifideacademy.talentlms.com/
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box className={classes.courseWrapper}>
              {purchaseCourse && purchaseCourse.length > 0 ? (
                purchaseCourse.map((data, index) => {
                  return (
                    <Accordion key={index} className={classes.accordion}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <Typography className={classes.heading}>
                          {data.courses.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className={classes.accordianDetails}>
                        <Box display={"flex"} justifyContent={"space-between"}>
                          <Typography className={classes.heading}>
                            Module List Of Course
                          </Typography>
                          <Typography className={classes.heading}>
                            Valid Up to
                          </Typography>
                        </Box>
                        {data.modules.map((modualData, index) => {
                          return (
                            <Box
                              pt={2}
                              display={"flex"}
                              justifyContent={"space-between"}
                              className={classes.moduleListWrap}
                            >
                              <Typography className={classes.moduleTitleWrap}>{modualData.moduleName}</Typography>
                              <Typography>
                                {/* {modualData.purchasedDate} */}
                                {moment(modualData.expireDate).format(
                                  "MMM Do, YYYY"
                                )}
                              </Typography>
                            </Box>
                          );
                        })}
                        {data.labId ? (
                          <Box
                            pt={2}
                            display={"flex"}
                            justifyContent={"space-between"}
                            className={classes.moduleListWrap}
                          >
                            <Typography className={classes.moduleTitleWrap}>{data.lab.title}</Typography>
                            <Typography>
                              {/* {modualData.purchasedDate} */}
                              {moment(data.lab.expireDate).format( "MMM Do, YYYY")}
                            </Typography>
                          </Box>
                        ) : null}
                        {data.courses.isAllCoursePurchased &&
                        data.courses.certificate !== "" &&
                        data.courses.isGenerated ? (
                          <>
                            {showAlert ? (
                              <Box pt={2}>
                                <Typography className={classes.expiryAlertText}>
                                  Your certificate will expire in {countDownday}{" "}
                                  days
                                </Typography>
                              </Box>
                            ) : null}
                          </>
                        ) : null}
                        {showExpire ? (
                          <Box pt={2}>
                            <Typography className={classes.expiryAlertText}>
                              Your certificate has been expired.
                            </Typography>
                          </Box>
                        ) : null}
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          pt={2}
                        >
                          {data.modules && data.modules.length ? (
                            <>
                              <Box pt={2}>
                                <Link
                                  href={
                                    "https://coinifideacademy.talentlms.com/"
                                  }
                                  download
                                >
                                  <a
                                    target='_blank'
                                    className={clsx(
                                      classes.commonBtn,
                                      classes.anotherCommonBtn
                                    )}
                                  >
                                    Access Course
                                  </a>
                                </Link>
                              </Box>
                            </>
                          ) : null}
                          {data.lab && data.lab.link ? (
                            <Box pt={2}>
                              <a
                                target='_blank'
                                href={data.lab.link ? `${data.lab.link}` : ""}
                                className={clsx(
                                  classes.commonBtn,
                                  classes.anotherCommonBtn
                                )}
                              >
                                Access Lab
                              </a>
                            </Box>
                          ) : null}
                          {data.courses.isAllCoursePurchased &&
                          !data.courses.isMinorCourse ? (
                            <Box pt={2}>
                              {data.courses.certificate !== "" &&
                              data.courses.isGenerated ? (
                                <Button
                                  variant='contained'
                                  disabled={showExpire}
                                  className={
                                    showExpire
                                      ? clsx(
                                          classes.commonBtn,
                                          // classes.smallCommonBtn,
                                          classes.disabledButton
                                        )
                                      : clsx(
                                          classes.commonBtn,
                                          classes.smallCommonBtn
                                        )
                                  }
                                  color='secondary'
                                >
                                  <a
                                    href={`${AppConfig.IMAGE_URL}/${data.courses.certificate}`}
                                    target='_blank'
                                    className={clsx(
                                      classes.commonBtnLink,
                                      classes.smallCommonBtnLink
                                    )}
                                  >
                                    Download Certificate
                                  </a>
                                </Button>
                              ) : (
                                <Button
                                  variant='contained'
                                  color='secondary'
                                  onClick={() =>
                                    handleCertificate(data.courses._id)
                                  }
                                  className={clsx(
                                    classes.commonBtn,
                                    classes.smallCommonBtn
                                  )}
                                >
                                  Request Certificate
                                </Button>
                              )}
                            </Box>
                          ) : null}
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  );
                })
              ) : (
                <>
                  <Typography
                    variant='h7'
                    color='textPrimary'
                    className={classes.centeredText}
                  >
                    <div>
                      <img
                        src={noDataImage}
                        alt='no-data-img'
                        className={classes.noDataImg}
                      />
                    </div>
                  </Typography>
                  <Typography
                    variant='h7'
                    color='textPrimary'
                    className={classes.centeredText}
                  >
                    <div className={classes.themeText}>
                      No Course purchased yet.
                    </div>
                  </Typography>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

Billing.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Billing;
