import { IconButton } from "@material-ui/core";
import React, { Component } from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import TabBar from './TabBar'
import TabBarStud from './TabBarStud'
import MessageIcon from '@material-ui/icons/Message';


class ProfileTest extends Component {
  
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

    const {onCreate, onCreatePortfolio, user, courses, userList, onSubmitPic, onDeleteCourse} = this.props;
    const { fileValue } = this.state
    
    if (!user) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <img style={{ width: "150px" }} src={user.image} alt="profpic" />
            <form onSubmit={onSubmitPic}>
              <label for='fileUpload'>
                <img style={{cursor: 'pointer'}} width='50px' src="../assets/edit1.png"/>
              </label>              
              <input onChange={this.handleChange} id='fileUpload' name="img" type="file" placeholder="Select image"  hidden/>          
                
                {
                  fileValue ?
                  <button>Ok</button>
                  : false
                }
            </form>

            <a style={{textDecoration:'none', color:'inherit'}} href="/users"><MessageIcon style={{cursor:'pointer'}}/></a>
            <a style={{textDecoration:'none', color:'inherit'}} href="/settings"><SettingsIcon style={{cursor:'pointer'}}/></a>
          </div>
          {            
            user.role != 'student' 
            ? <TabBar  user={user} courses={courses} userList={userList} onCreatePortfolio={onCreatePortfolio} onCreate={onCreate} onDeleteCourse={onDeleteCourse} />
            : <TabBarStud user={user} courses={courses} userList={userList}/>
          }
        </div>
      );
    }
  }
}
export default ProfileTest;
