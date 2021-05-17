import { React, Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import TestNavBar from "./components/TestNavBar";
import axios from "axios";
import config from "./config";
import ForChildren from "./components/ForChildren";
import LandingPage from "./components/LandingPage";
import TestLogin from "./components/TestLogin";
import TestResgister from "./components/TestResgister";
import Courses from "./components/Courses";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import CoursesCreateForm from "./components/CoursesCreateForm";
import ChatPage from "./components/ChatPage";
import Stripe from "./components/Stripe";
import Artists from "./components/Artists";
import PortfolioDetails from "./components/PortfolioDetails";
// import './stripe.css'

class App extends Component {
  state = {
    user: null,
    newUser: null,
    fetchingUser: true,
    error: null,
    courses: [],
    portfolio: [],
    filteredCourses: [],
    artists: [],
    userList: [],
    filteredUserList: [],
  };

  componentDidMount = () => {
    axios
      .get(`${config.API_URL}/api/user`, { withCredentials: true })
      .then((response) => {
        this.setState({
          user: response.data,
          fetchingUser: false,
        });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({
        //   error: error.response.data,
        //   fetchingUser: false,
        // });
      });

    axios
      .get(`${config.API_URL}/api/courses`, { withCredentials: true })
      .then((response) => {
        this.setState({
          courses: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.data,
        });
      });

    axios
      .get(`${config.API_URL}/api/users`, { withCredentials: true })
      .then((response) => {
        this.setState({
          userList: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.data,
        });
      });
  };

  handleRegister = (values) => {
    const { username, email, password } = values;

    let newUser = {
      username,
      email,
      password,
    };
    axios
      .post(`${config.API_URL}/api/register`, newUser, {
        withCredentials: true,
      })
      .then((result) => {
        this.setState(
          {
            user: result.data,
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch((error) => {
        console.log(error.data);
        this.setState({
          error: error.response.data,
        });
      });
  };

  handleLogin = (values) => {
    const { email, password } = values;
    let newUser = {
      email,
      password,
    };

    axios
      .post(`${config.API_URL}/api/login`, newUser, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        this.setState(
          {
            user: response.data,
            error: null,
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch((error) => {
        console.log(error);
        // this.setState({
        //   error: error.response.data.error,
        // });
      });
  };

  handleLogout = () => {
    axios
      .post(`${config.API_URL}/api/logout`, {}, { withCredentials: true })
      .then(() => {
        this.setState({
          user: null,
        });
      })
      .catch((error) => {
        // the real error json is always is the .response.data
        this.setState({
          error: error.response.data,
        });
      });
  };

  handleCreatePortfolio = async (e) => {
    e.preventDefault();

    let title = e.target.title.value;
    let description = e.target.description.value;
    let cover = e.target.cover.files[0];
    let images = e.target.images.files;

    let formDataCover = new FormData();
    let formDataImages = new FormData();
    for (var i = 0; i < images.length; i++) {
      formDataImages.append("imageUrl", images[i]);
    }
    formDataCover.append("imageUrl", cover);

    const [coverImage, allImages] = await Promise.all([
      axios.post(`${config.API_URL}/api/uploadmultiple`, formDataCover),
      axios.post(`${config.API_URL}/api/uploadmultiple`, formDataImages),
    ]);

    const createFormData = await axios.post(
      `${config.API_URL}/api/portfolio/create`,
      {
        title,
        description,
        cover: coverImage.data.images[0],
        images: allImages.data.images,
      },
      { withCredentials: true }
    );
    const patchPortfolio = await axios.patch(
      `${config.API_URL}/api/user/portfolio`,
      { portfolio: createFormData },
      { withCredentials: true }
    );

    this.setState(
      {
        user: patchPortfolio,
        portfolio: [createFormData.data, ...this.state.portfolio],
      },
      () => {
        this.props.history.push("/artists");
      }
    );
  };

  handleCreate = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let description = e.target.description.value;
    let price = e.target.price.value;
    let image = e.target.courseImage.files[0];
    let formData = new FormData();
    formData.append("imageUrl", image);

    axios.post(`${config.API_URL}/api/upload`, formData).then((result) => {
      axios
        .post(
          `${config.API_URL}/api/courses/create`,
          { name, description, price, image: result.data.image },
          { withCredentials: true }
        )
        .then((response) => {
          this.setState(
            {
              courses: [response.data, ...this.state.courses],
            },
            () => {
              console.log("hello");
              this.props.history.push("/courses");
            }
          );
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  handleDeleteCourse = (courseId) => {
    //1. Make an API call to the server side Route to delete that specific course
    let filteredCourseid = this.state.courses.filter((course) => {
      return course._id === courseId;
    });
    if (filteredCourseid) {
      axios
        .delete(`${config.API_URL}/api/courses/${courseId}`, {
          withCredentials: true,
        })
        .then(() => {
          let filteredCourses = this.state.courses.filter((course) => {
            return course._id !== courseId;
          });

          this.setState(
            {
              courses: filteredCourses,
            },
            () => {
              this.props.history.push("/");
            }
          );
        })
        .catch((err) => {
          console.log("Delete course failed", err);
        });
    } else {
      console.log("delete failed");
    }
  };

  handleSubmitPic = (e) => {
    e.preventDefault();
    let img = e.target.img.files[0];
    let formData = new FormData();
    formData.append("imageUrl", img);

    axios
      .post(`${config.API_URL}/api/upload`, formData, { withCredentials: true })
      .then((result) => {
        axios
          .patch(
            `${config.API_URL}/api/user`,
            { img: result.data },
            { withCredentials: true }
          )
          .then((result1) => {
            let newUser = result1.data;
            this.setState(
              {
                user: newUser,
              },
              () => {
                this.props.history.push("/profile");
              }
            );
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  render() {
    const { error, user, courses, userList } = this.state;

    return (
      <div className="App">
        <TestNavBar onLogout={this.handleLogout} user={user} />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/forchildren" component={ForChildren} />
          <Route
            exact
            path="/courses"
            render={(routeProps) => {
              return (
                <Courses error={error} courses={courses} {...routeProps} />
              );
            }}
          />

          <Route
            exact
            path="/artists"
            render={(routeProps) => {
              return (
                <Artists error={error} userList={userList} {...routeProps} />
              );
            }}
          />
          <Route
            exact
            path="/artists/:artistId"
            // component={PortfolioDetails}
            render={(routeProps) => {
              return (
                <PortfolioDetails
                  user={user}
                  courses={courses}
                  {...routeProps}
                />
              );
            }}
          />

          <Route
            path="/users"
            render={(routeProps) => {
              return (
                <Users error={error} userList={userList} {...routeProps} />
              );
            }}
          />
          <Route
            exact
            path="/profile"
            render={(routeProps) => {
              return (
                <Profile
                  user={user}
                  userList={userList}
                  onCreate={this.handleCreate}
                  onDeleteCourse={this.handleDeleteCourse}
                  onCreatePortfolio={this.handleCreatePortfolio}
                  courses={courses}
                  onSubmitPic={this.handleSubmitPic}
                  {...routeProps}
                />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={(routeProps) => {
              return (
                <TestLogin
                  error={error}
                  onLogin={this.handleLogin}
                  {...routeProps}
                />
              );
            }}
          />
          <Route
            exact
            path="/register"
            render={(routeProps) => {
              return (
                <TestResgister
                  error={error}
                  onSubmit={this.handleRegister}
                  {...routeProps}
                />
              );
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
