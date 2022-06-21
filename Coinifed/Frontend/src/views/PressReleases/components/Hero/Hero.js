import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor:"#5120FF"
  },
  image: {
    minHeight: 400,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // paddingTop: 0,
    // paddingBottom: 0,
  },
  searchInputContainer: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <Image
        src="https://assets.maccarianagency.com/the-front/photos/about/hero-image.png"
        srcSet="https://assets.maccarianagency.com/the-front/photos/about/hero-image.png 2x"
        alt="About"
        className={classes.image}
        lazyProps={{
          width: '100%',
          height: '100%',
        }}
      /> */}
      <Section className={classes.section}>
        <>
        <SectionHeader
          title="Press Releases"
          subtitle="We are always top on the press releases. This is what we achieved!!"
          align="left"
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
        {/* <div className={classes.searchInputContainer} >
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <Icon
                    fontIconClass="fas fa-search"
                    fontIconColor={colors.blueGrey[900]}
                  />
                </InputAdornment>
              }
              name={"search"}
              onChange={props.handleChange}
              value={props.query}
              placeholder="Search for the blogs"
            />
          </FormControl>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.searchButton}
            onClick={props.handleSearch}
          >
            Search
          </Button>
        </div> */}
        </>
      </Section>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;