import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import AppConfig from "../../../../config/appConfig";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: 420,
  },
  spCenter: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
    },
    "& h4": {
      textAlign: "center",
      marginTop: 10,
    },
    "& p": {
      textAlign: "center",
      fontSize: 18,
    },
  },
}));

const Story = (props) => {
  const { className, cmsData, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
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
      <Grid
        container
        justifyContent='space-between'
        spacing={isMd ? 4 : 2}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid
          item
          container
          alignItems='center'
          justifyContent='flex-start'
          xs={12}
          md={7}
          data-aos={"fade-up"}
        >
          <div>
            <SectionHeader
              title={
                getTemplateData && getTemplateData.blockTitle1.length
                  ? getTemplateData.blockTitle1
                  : "Our story"
              }
              subtitle={
                getTemplateData && getTemplateData.block1.length
                  ? ReactHtmlParser(getTemplateData.block1)
                  : null
              }
              align='left'
              disableGutter
              subtitleProps={{
                color: "textPrimary",
                variant: "body1",
              }}
              className={classes.spCenter}
            />
          </div>
        </Grid>
        {getTemplateData && getTemplateData.blockImage1.length ? (
          <Grid
            item
            container
            justifyContent={isMd ? "flex-end" : "flex-start"}
            alignItems='center'
            xs={12}
            md={5}
            data-aos={"fade-up"}
            className={classes.spCenter}
          >
            <Image
              src={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage1}`}
              srcSet={`${AppConfig.IMAGE_URL}/${getTemplateData.blockImage1}`}
              alt='Our story'
              className={classes.image}
            />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
