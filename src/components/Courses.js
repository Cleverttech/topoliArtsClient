import { Button, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import SearchCourses from './SearchCourses'

export default class Courses extends Component {
  render() {
    const { courses, userList, onSearchCourse  } = this.props;
    
    const linkStyle = {
      color: "white",
      textDecoration:"none"
    };
    
    if (!userList) {
      return <p>Loading...</p>;
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SearchCourses  onSearchCourse={onSearchCourse} />
          {
            !courses.length ?
            <h3 style={{color: 'red'}}>No courses found?...Did you paste Manish's code?</h3>
            : true
          }
          <Typography variant="h2">Courses Available</Typography>
          {
          courses.map((e) => {
            return (
              <div key={e._id}>
                <div>
                  <br></br>
                  <img
                    style={{ width: "40ch" }}
                    src={e.image}
                    alt="CourseImage"
                  />
                  <div>
                    <h3>{e.name}</h3>

                    <Button variant="contained" color="secondary">
                      <Link to={`/courses/${e._id}`} style={linkStyle}>
                        Enroll
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
