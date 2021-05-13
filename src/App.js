import { React, Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import axios from "axios";
import config from "./config";

class App extends Component {
  state = {
    user: null,
    fetchingUser: true,
    error: null,
    courses: [],
    filteredCourses,
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
      .catch((errorObj) => {
        this.setState({
          error: errorObj.response.data,
          fetchingUser: false,
        });
      });
  }

  handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password } = e.target;
    let newUser = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    axios
      .post(`${config.API_URL}/api/register`, newUser, {
        withCredentials: true,
      })
      .then((response) => {
        //the real data is always in response.data
        this.setState(
          {
            user: response.data, //save the user info in the state
          },
          () => {
            //Redirect after the user info has been fetched
            this.props.history.push("/");
          }
        );
      })
      .catch(() => {
        console.log("SignUp failed");
      });
  };

  handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    let newUser = {
      email: email.value,
      password: password.value,
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
      .catch((errorObj) => {
        this.setState({
          error: errorObj.response.data,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/register"
            render={(routeProps) => {
              return (
                <SignUp onRegister={this.handleRegister} {...routeProps} />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={(routeProps) => {
              return (
                <SignIn
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

export default App;
