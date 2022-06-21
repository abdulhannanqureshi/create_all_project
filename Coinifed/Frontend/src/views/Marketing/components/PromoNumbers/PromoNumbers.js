import React from 'react';
import PropTypes from 'prop-types';
import { SectionHeader } from 'components/molecules';
import { CardPromo } from 'components/organisms';
import { useEffect } from 'react';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import ReactHtmlParser from "react-html-parser";
import AppConfig from "../../../../config/appConfig";

const useStyles = makeStyles(() => ({
  textBlue: {
    color: "#5120FF",
  },
}));

const PromoNumbers = (props) => {
  const classes = useStyles();
  const { data, className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  useEffect((props) => {

  }, [props])

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            {data ? data.blockTitle1 : ""}
          </span>
        }
        subtitle={data ? data.blockTitle2 : ""}
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data ?
          <>
            <Grid
              item
              container
              alignItems='center'
              direction='column'
              xs={12}
              sm={6}
              md={3}
              data-aos='fade-up'
            >
              <CardPromo
                variant='outlined'
                liftUp
                align={isMd ? "left" : "center"}
                title={data.blockTitle4 + `+`}
                subtitle={data.blockTitle3}
                description={ReactHtmlParser(data.block1)}
                fontIconClass={data.blockImage1}
                titleColor='primary'
                src={`${AppConfig.IMAGE_URL}/${data.blockImage1}`}
              />
            </Grid>
            <Grid
              item
              container
              alignItems='center'
              direction='column'
              xs={12}
              sm={6}
              md={3}
              data-aos='fade-up'
            >
              <CardPromo
                variant='outlined'
                liftUp
                align={isMd ? "left" : "center"}
                title={data.blockTitle6 + `+`}
                subtitle={data.blockTitle5}
                description={ReactHtmlParser(data.block2)}
                fontIconClass={data.blockImage2}
                src={`${AppConfig.IMAGE_URL}/${data.blockImage2}`}
                titleColor='primary'
              />
            </Grid>
            <Grid
              item
              container
              alignItems='center'
              direction='column'
              xs={12}
              sm={6}
              md={3}
              data-aos='fade-up'
            >
              <CardPromo
                variant='outlined'
                liftUp
                align={isMd ? "left" : "center"}
                title={data.blockTitle8 + `+`}
                subtitle={data.blockTitle7}
                description={ReactHtmlParser(data.block3)}
                fontIconClass={data.blockImage3}
                src={`${AppConfig.IMAGE_URL}/${data.blockImage3}`}
                titleColor='primary'
              />
            </Grid>
            <Grid
              item
              container
              alignItems='center'
              direction='column'
              xs={12}
              sm={6}
              md={3}
              data-aos='fade-up'
            >
              <CardPromo
                variant='outlined'
                liftUp
                align={isMd ? "left" : "center"}
                title={data.blockTitle10 + `+`}
                subtitle={data.blockTitle9}
                description={ReactHtmlParser(data.block4)}
                fontIconClass={data.blockImage4}
                src={`${AppConfig.IMAGE_URL}/${data.blockImage4}`}
                titleColor='primary'
              />
            </Grid>
        </>

          : null}
      </Grid>
    </div>
  );
};

PromoNumbers.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default PromoNumbers;
