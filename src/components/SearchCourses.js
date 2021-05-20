import React from 'react'
import {InputBase ,IconButton, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search';
 

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      margin:"auto",
      width: 300,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },

  }));

 function SearchUser(props){
    const classes = useStyles();
   
        const {onSearchCourse} = props
        return (
            <div>
                <IconButton className={classes.iconButton} >
                    <SearchIcon style={{margin:"20px"}} />
                </IconButton>
                <InputBase
                 onChange={onSearchCourse}
                    className={classes.input}
                    placeholder="Search courses here"
                    inputProps={{ 'aria-label': 'search courses here' }}
                />
            </div>
        )
}

export default SearchUser