import React, { Component } from "react";
import TabBar from './TabBar'
import TabBarStud from './TabBarStud'


class ProfileTest extends Component {
  
  state ={
    fileValue : false,
  }

  handleChange=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
    let fileVal = e.target.value
    if(fileVal){
      this.setState({
        fileValue: true
      })
    }
  }

  
  render() {

    const {onCreate, onCreatePortfolio, user, courses, userList, onSubmitPic, onDeleteCourse} = this.props;
    const { fileValue } = this.state
    
    if (!user) {
      return <p>Loading...</p>;
    } else {
      console.log(user.role)
      return (
        <div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <img style={{ width: "150px" }} src={user.image} alt="profpic" />
            <form onSubmit={onSubmitPic}>
              <label for='fileUpload'>
                <img cursor='pointer' width='50px' src="../assets/edit1.png"/>
              </label>              
              <input onChange={this.handleChange} id='fileUpload' name="img" type="file" placeholder="Select image"  hidden/>          
                
                {
                  fileValue ?
                  <button>Ok</button>
                  : false
                }
            </form>
          </div>
          {            
            user.role != 'student' 
            ? <TabBar user={user} courses={courses} userList={userList} onCreatePortfolio={onCreatePortfolio} onCreate={onCreate} onDeleteCourse={onDeleteCourse} />
            : <TabBarStud user={user} courses={courses} userList={userList}/>
          }
        </div>
      );
    }
  }
}
export default ProfileTest;
