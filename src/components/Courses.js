import { Button, Grid } from "@material-ui/core";
import React, { Component } from "react";
import axios from "axios";
import config from "../config";
import { Link } from "react-router-dom";

export default class Courses extends Component {
  render() {
    const { courses, userList } = this.props;
    const buttonStyle = {
      color: "white",
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
          <h1>Courses</h1>
          {courses.map((e) => {
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

                    <Button variant="contained" color="primary">
                      <Link to={`/courses/${e._id}`} style={buttonStyle}>
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
