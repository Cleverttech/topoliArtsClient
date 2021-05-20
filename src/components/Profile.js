
import React, { Component } from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import TabBar from './TabBar'
import TabBarStud from './TabBarStud'
import MessageIcon from '@material-ui/icons/Message';
import {Link} from 'react-router-dom';
import { Avatar, Button } from "@material-ui/core";



class Profile extends Component {
  
  state ={
    fileValue : false,
  }

  handleChange=(e)=>{
    e.preventDefault()
    let fileVal = e.target.value
    if(fileVal){
      this.setState({
        fileValue: true
      })
    }
  }
  handleClick=()=>{
    
    console.log('settings click')
  }

  e
  render() {

    const {onCreate, onCreatePortfolio, user, courses, userList, onSubmitPic, onDeleteCourse, disableSubmit} = this.props;
    const { fileValue } = this.state
    
    if (!user) {
      return <p>Loading...</p>;
    } else {
      return (
          <div>
            <div style={{display: 'flex' , flexDirection: 'column', alignItems:'center', justifyContent:'flex-end'}}>
            <div></div>
            <Avatar style={{width:'200px', height:'200px'}} aria-label="recipe">
              <img src={user.image} width='200px' alt="profpic" />
            </Avatar>
            
              <form onSubmit={onSubmitPic} style={{display: "flex", flexDirection: 'row', justifyContent:'center', alignItems: 'center'}} >
                

                <label for='fileUpload'>
                  <img style={{cursor: 'pointer'}} width='35px' src="../assets/edit1.png"/>
                </label>
                
                <input onChange={this.handleChange} id='fileUpload' name="img" type="file" placeholder="Select image"  hidden/>                
                  {
                    fileValue ?
                    
                    <Button disable={disableSubmit} type='submit' variant='contained' color='secondary'>Ok</Button>
                    
                    : false
                  }
                
               
              </form>
                <div style={{display: 'flex' , justifyContent:'flex-end', alignContent: 'space-around'}}>
                  <Link style={{textDecoration:'none', color:'inherit'}} to="/users"><MessageIcon style={{width:'150px', height: '50px' ,cursor:'pointer'}}/></Link>
                  <Link style={{textDecoration:'none', color:'inherit'}} to="/settings"><SettingsIcon style={{width:'150px' , height: '50px', cursor:'pointer'}}/></Link>
                </div>
               
            
            
          </div>
         
          {            
            user.role != 'student' 
            ? <TabBar disableSubmit={disableSubmit} user={user} courses={courses} userList={userList} onCreatePortfolio={onCreatePortfolio} onCreate={onCreate} onDeleteCourse={onDeleteCourse} />
            : <TabBarStud user={user} courses={courses} userList={userList} />
          }
        </div>
      );
    }
  }
}
export default Profile;
