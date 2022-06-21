import React,{useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import {ApiHelper} from 'helper'
import { ApiRoutes } from 'config';
import Toast from 'components/toaster';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import  useTheme  from '@material-ui/core/styles/useTheme';
import { Section} from 'components/organisms';
import  useMediaQuery  from '@material-ui/core/useMediaQuery';
import  Grid  from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    minHeight:"500px"
  },
  sidebarNewsletter: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
  text:{
    display:"inline-block",
    minWidth:"200px",
    fontWeight:"600",
    textTransform:"capitalize",
    paddingBottom:"5px",
    fontSize:"20px",
    color:"red"
  },
  box:{
    background:"#eee",
    marginBottom:"20px",
    border:"2px solid #ccc",
    padding:"10px",
    wordBreak: "break-all",
    '& p':{
      display:"flex",
      borderBottom:"1px solid #999",
      fontSize:"20px",
      paddingBottom:"10px"
    }
  }
}));

const TalentLms = () => {
  const classes = useStyles();
  const router = useRouter()
  const theme = useTheme();
  const [loader, setLoader] = useState(false);
  const [lmsCourseData, setLmsCourseData] = useState([]);
  const [lmsCategoryData, setCategoryData] = useState([]);
  const [filterListData, setFilterListData] = useState([]);
  const [category, setCategory] = useState([]);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  useEffect(()=>{
    // fetchBlogData(router.query)
    fetchLmsCourseData()
  },[])

  // useEffect(()=>{
  //   updateArray
  // },[category])

  const fetchLmsCourseData =async()=>{
    setLoader(true)
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.GET_LMSDATA_COURSE.service,
      ApiRoutes.GET_LMSDATA_COURSE.url,
      ApiRoutes.GET_LMSDATA_COURSE.method,
      ApiRoutes.GET_LMSDATA_COURSE.authenticate,
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      const data = response.data.data
      //const filteredList = data.filter((item) => item.category_id == 5)
      //setFilterListData(filteredList)
      setLmsCourseData(data)
      fetchLmsCategory()
      setLoader(false)
    }
    else{
      Toast.fire({
        icon: 'error',
        title: "Something went wrong"
      })
    }
  }

  const fetchLmsCategory =async()=>{
    setLoader(true)
    const response = await new ApiHelper().FetchFromServer(
      ApiRoutes.GET_LMSDATA_CATEGORY.service,
      ApiRoutes.GET_LMSDATA_CATEGORY.url,
      ApiRoutes.GET_LMSDATA_CATEGORY.method,
      ApiRoutes.GET_LMSDATA_CATEGORY.authenticate,
      undefined,
      undefined,
      undefined
    );
    if (response && !response.isError) {
      const data = response.data.data

      setCategoryData(data)
      setLoader(false)
    }
    else{
      Toast.fire({
        icon: 'error',
        title: "Something went wrong"
      })
    }
  }

  const handleChange =(event)=>{
    setCategory({
        [event.target.name]: event.target.value
      }
    )
  }

  return (
    <div className={classes.root}>
{/* && item.code == 'CSBA01A' */}
      <Section>
        <Grid container spacing={isMd ? 4 : 2}>
          {!loader ? <>
            <Grid item xs={12}>
            {/* <TextField
              id="outlined-select-currency-native"
              select
              name={"category"}
              fullWidth
              value={category}
              onChange={handleChange}
              variant="outlined"
              helpertext="Please select your Category"
              >
              <option value={""}>Please select Corporate</option>
              {lmsCategoryData.map((option,index) => (
                <MenuItem key={index} value={option.id}>
                  {option.id} - {option.name}
                </MenuItem>
              ))}
            </TextField> */}
            <Select
              native
              value={category.id}
              onChange={handleChange}
              inputProps={{
                name: 'category',
                id: 'filled-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              {lmsCategoryData.map((option,index) => (
                <option key={index} value={option}>
                  {option.id} - {option.name}
                </option>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={8}>
            {lmsCourseData.length}
            {lmsCourseData.map((data,index)=>{
              return(
                <Box key={index} className={classes.box}>
                <p>
                <span className={classes.text}>category_id</span>
                <span className={classes.description}></span>{data.category_id}
                </p>
                <p>
                <span className={classes.text}>avatar </span>
                <span className={classes.description}></span>{data.avatar}
                </p>
                <p>
                <span className={classes.text}>big_avatar</span>
                <span className={classes.description}>
                  <img src={data.big_avatar} />
                </span>
                </p>
                <p>
                <span className={classes.text}>certification</span>
                <span className={classes.description}></span>{data.certification}
                </p>
                <p>
                <span className={classes.text}>certification_duration</span>
                <span className={classes.description}></span>{data.certification_duration}
                </p>
                <p>
                <span className={classes.text}>code</span>
                <span className={classes.description}></span>{data.code}
                </p>
                <p>
                <span className={classes.text}>creation_date</span>
                <span className={classes.description}></span>{data.creation_date}
                </p>
                <p>
                <span className={classes.text}>creator_id</span>
                <span className={classes.description}></span>{data.creator_id}
                </p>
                <p>
                <span className={classes.text}>custom_field_1</span>
                <span className={classes.description}></span>{data.custom_field_1}
                </p>
                <p>
                <span className={classes.text}>custom_field_2</span>
                <span className={classes.description}></span>{data.custom_field_2}
                </p>
                <p>
                <span className={classes.text}>custom_field_3</span>
                <span className={classes.description}></span>{data.custom_field_3}
                </p>
                <p>
                <span className={classes.text}>description</span>
                <span className={classes.description}></span>{data.description}
                </p>
                <p>
                <span className={classes.text}>expiration_datetime</span>
                <span className={classes.description}></span>{data.expiration_datetime}
                </p>
                <p>
                <span className={classes.text}>hide_from_catalog</span>
                <span className={classes.description}></span>{data.hide_from_catalog}
                </p>
                <p>
                <span className={classes.text}>id</span>
                <span className={classes.description}></span>{data.id}
                </p>
                <p>
                <span className={classes.text}>last_update_on </span>
                <span className={classes.description}></span>{data.last_update_on}
                </p>
                <p>
                <span className={classes.text}>level</span>
                <span className={classes.description}></span>{data.level}
                </p>
                <p>
                <span className={classes.text}>name</span>
                <span className={classes.description}></span>{data.name}
                </p>
                <p>
                <span className={classes.text}>price</span>
                <span className={classes.description}></span>{data.price}
                </p>
                <p>
                <span className={classes.text}>shared</span>
                <span className={classes.description}></span>{data.shared}
                </p>
                <p>
                <span className={classes.text}>shared_url</span>
                <span className={classes.description}></span>{data.shared_url}
                </p>
                <p>
                <span className={classes.text}>start_datetime</span>
                <span className={classes.description}></span>{data.start_datetime}
                </p>
                <p>
                <span className={classes.text}>status</span>
                <span className={classes.description}></span>{data.status}
                </p>
                <p>
                <span className={classes.text}>time_limit</span>
                <span className={classes.description}></span>{data.time_limit}
                </p>
                </Box>
              )
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            {lmsCategoryData.map((data,index)=>{
              return(
                <Box key={index} className={classes.box}>
                <p>
                <span className={classes.text}>id</span>
                <span className={classes.description}></span>{data.id}
                </p>
                <p>
                <span className={classes.text}>name </span>
                <span className={classes.description}></span>{data.name}
                </p>
                <p>
                <span className={classes.text}>parent_category_id </span>
                <span className={classes.description}></span>{data.parent_category_id}
                </p>
                <p>
                <span className={classes.text}>price </span>
                <span className={classes.description}></span>{data.price}
                </p>

                </Box>
              )
            })}
          </Grid>
          </>
          :
          "Loading..."
          }

        </Grid>
      </Section>

    </div>
  );
};

export default TalentLms;
