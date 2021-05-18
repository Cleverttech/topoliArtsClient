import React, { Component } from "react";

class MyCoursesByMentor extends Component {

  render() {


    const { courses, user, onDeleteCourse } = this.props;
    if(!courses || !user){
      return <p>Loading ...</p>
    }else{
      
        let filteredCoursesMentor = courses.filter((course) => {
          if (course.mentor._id === user._id) {
            return course;
          }
        });
        return (
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                {
                  filteredCoursesMentor.map((course, i) => (
                    <div key={i}>
                      <img src={course.image} alt="courseImage" width="200px" height="auto"/>
                      <p>{course.name}</p>
                      <p>{course.description}</p>
                      <button onClick={() => { onDeleteCourse(course._id)}}> Delete</button>
                    </div>
                  ))}
              </div>
            );
      }
  }
}


export default MyCoursesByMentor;
