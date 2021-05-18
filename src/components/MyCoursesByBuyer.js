import React, { Component } from "react";

class MyCoursesByBuyer extends Component {
  render() {
    const { courses, user } = this.props;
    if(!courses){
      return <p>Loading ...</p>
    }else{
      let filteredCoursesStudent = courses.filter((course)=>{
        if(course.buyers.userId !== user._id){
          return course
        }
        return (
          <div>
              {
                filteredCoursesStudent.map((course, i) => (
                  <div key={i}>
                    <div style={{backgroundColor:'#FFDADA', width:'300px'}}> 
                      <p>{course.name}</p>
                      <p>{course.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          ); 
      })
    }
  }
}

export default MyCoursesByBuyer;
