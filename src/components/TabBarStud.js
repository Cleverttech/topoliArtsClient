import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MyCoursesByBuyer from './MyCoursesByBuyer'



function TabPanel(props) {
  const {children, value, index, ...other } = props;
  
  // const {courses, user, userList} =props
  return (
    <div
    role="tabpanel"
    hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
   },
}));

export default function FullWidthTabs (props) {  
  const { courses, userList, user  , onCreatePortfolio, onCreate, onDeleteCourse, error} = props
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  return (
    
    <div className={classes.root}>
      <AppBar position='static' color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="default"
          variant="fullWidth"
          aria-label="full width tabs example"
          >
          <Tab label="My Courses" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MyCoursesByBuyer error={error} courses={courses} user={user} userList={userList}/>  
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}