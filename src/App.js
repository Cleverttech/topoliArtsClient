import { React, Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import TestNavBar from "./components/TestNavBar";
import axios from "axios";
import config from "./config";
import ForChildren from "./components/ForChildren";
import LandingPage from "./components/LandingPage";
import TestLogin from "./components/TestLogin";
import TestResgister from "./components/TestResgister";
// import BookReadingForm from "./components/BookReadingForm";
import Courses from "./components/Courses";
import CoursesCreateForm from "./components/CoursesCreateForm";

class App extends Component {
  state = {
    user: null,
    fetchingUser: true,
    error: null,
    courses: [],
    filteredCourses: [],
    artists: [],
    userList: [],
    filteredUserList: [],
  };

  componentDidMount() {
    axios
      .get(`${config.API_URL}/api/user`, { withCredentials: true })
      .then((response) => {
        this.setState({
          user: response.data,
          fetchingUser: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.response.data,
          fetchingUser: false,
        });
      });
      
      axios.get(`${config.API_URL}/api/courses`, {withCredentials: true})
      .then((response) => {
        this.setState({
          courses: response.data
        })
      }).catch((err) => {
        this.setState({
          error: err.data
        })
      });
    
  } 

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
        this.setState({
          error: error.response.data.error,
        });
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

  handleCreate(e){
    e.preventDefault()
    let name = e.target.name.value
    let description =e.target.description.value
    let price =e.target.description.value
    let image = e.target.courseImage.files[0]
    let formData = new FormData()
    formData.append('imageUrl', image)

    axios.post(`${config.API_URL}/api/upload`, formData)
    .then((result) => {
        return axios.post(`${config.API_URL}/api/courses/create`, {
                name,
                description,
                price,
                image: result.data.image,
        },{withCredentials:true}
        )
        .then((response) => {
                    // 2. Once the server has successfully created a new todo, update your state that is visible to the user
            this.setState({
                courses: [response.data, ...this.state.courses]
            }, () => {
                        //3. Once the state is update, redirect the user to the home page
            this.props.history.push('/')
            })
        }).catch((error) => {
            this.setState({
              error: error.response.data.error
            })
        });
  });
}

  render() {
    const { error, user, courses } = this.state;
    return (
      <div className="App">
        <TestNavBar onLogout={this.handleLogout} user={user} />
        <CoursesCreateForm onCreate ={this.handleCreate}/>
        <Route path='/courses' component={Courses}/>

        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/forchildren" component={ForChildren} />
          
          
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
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
