import React, { Component } from "react";

class MyCoursesByMentor extends Component {
  render() {

    const { courses, user, onDeleteCourse } = this.props;
    let filteredCourses = courses.filter((course) => {
      if (course.mentor._id === user._id) {
        return course;
      } else {
        return console.log("Course not found");
      }
    });
    return (
      <div>
        <h2>My courses-Mentor</h2>

        {filteredCourses.map((course, i) => (
          <div key={i}>
            <img
              src={course.image}
              alt="courseImage"
              width="200px"
              height="auto"
            />
            <p>{course.name}</p>
            <p>{course.description}</p>
            <button
              onClick={() => {
                onDeleteCourse(course._id);
              }}
              type="submit"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default MyCoursesByMentor;
