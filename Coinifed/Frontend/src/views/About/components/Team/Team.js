import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from "@material-ui/core/Popover";
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from "clsx";
import { SectionHeader } from "components/molecules";
import { CardBase } from "components/organisms";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import AppConfig from "../../../../config/appConfig";

const useStyles = makeStyles((theme) => ({
  cardBase: {
    boxShadow: "none",
    background: theme.palette.alternate.main,
    borderRadius: theme.spacing(1),
    "& .card-base__content": {
      padding: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3),
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(1),
      },
    },
    "& a": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7rem",
      },
    },
  },
  avatar: {
    width: 110,
    objectFit:"cover",
    objectPosition:"center top",
    height: 110,
    border: `4px solid ${theme.palette.alternate.dark}`,
    borderRadius: "100%",
    boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("md")]: {
      width: 80,
      height: 80,
    },
  },
  listItem: {
    padding: 0,
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  listItemAvatar: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(1.5),
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
    },
  },
  listItemText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 0,
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  popover_div: {
    maxWidth: "400px",
    textAlign: "justify",
    padding: "10px",
  },
  customised_popover: {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  commonBtn: {
    display: "inline-block",
    padding: "7px 10px",
    backgroundColor: "#5120FF",
    fontSize: 16,
    minWidth: 200,
    border: "solid 1px #5120FF",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#5120FF",
      boxShadow: "none",
    },
  },
  smallCommonBtn: {
    minWidth: 132,
    padding: "8px 10px",
    fontSize: 15,
  },
}));

const Team = (props) => {
  const { className, cmsData, teamList, ...rest } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [authorDetail, setauthorDetails] = React.useState([]);

  const handleClick = (event, id) => {
    setAnchorEl(null);
    let required_id = event.currentTarget.id;
    let newData = teamList.filter((newArray, index) => index == required_id);
    setauthorDetails(newData);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? `simple-popover` : undefined;

  // For Get Template Data
  const [getTemplateData, setGetTemplateData] = useState(null);
  useEffect(() => {
    if (cmsData && cmsData.length) {
      let getData = cmsData.filter((e) => e.titleSlug === "aboutUs");
      setGetTemplateData(...getData);
    }
  }, [cmsData]);

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          getTemplateData && getTemplateData.blockTitle2.length
            ? getTemplateData.blockTitle2
            : "Meet our team"
        }
        subtitle={
          getTemplateData && getTemplateData.block2.length
            ? ReactHtmlParser(getTemplateData.block2)
            : null
        }
      />
      <Grid container spacing={isMd ? 2 : 1}>
        {teamList && teamList.length
          ? teamList.map((item, index) => (
            item.isActive ?
              <Grid item xs={6} sm={6} md={4} key={index} data-aos='fade-up'>
                <CardBase className={classes.cardBase} liftUp>
                  <ListItem disableGutters className={classes.listItem}>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <Avatar
                        src={`${AppConfig.IMAGE_URL}/${item.teamMemberImage}`}
                        srcSet={`${AppConfig.IMAGE_URL}/${item.teamMemberImage}`}
                        className={classes.avatar}
                      />
                    </ListItemAvatar>
                    <div>
                      <ListItemText
                        className={classes.listItemText}
                        primary={`${item.firstName} ${item.lastName}`}
                        secondary={item.designation}
                        primaryTypographyProps={{
                          className: classes.title,
                          variant: "h6",
                          align: isMd ? "left" : "center",
                        }}
                        secondaryTypographyProps={{
                          color: "textPrimary",
                          align: isMd ? "left" : "center",
                        }}
                      />
                    </div>
                  </ListItem>
                  <Button
                    id={index}
                    href='#outlined-buttons'
                    aria-describedby={id}
                    variant='contained'
                    color='primary'
                    onClick={handleClick}
                    className={clsx(classes.commonBtn, classes.smallCommonBtn)}
                  >
                    More Details
                  </Button>
                </CardBase>
                {authorDetail.map((data) => {
                  return (
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      elevation={2}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      className={classes.customised_popover}
                    >
                      <div className={classes.popover_div}>
                        {ReactHtmlParser(data.aboutUs)}
                      </div>
                    </Popover>
                  );
                })}
              </Grid>
              : null
            ))
          : null}
      </Grid>
    </div>
  );
};

Team.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Team;
