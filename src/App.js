import { React, Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import axios from "axios";
import config from "./config";
import ForChildren from "./components/ForChildren";
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPage";
import TestLogin from "./components/TestLogin";
import TestResgister from "./components/TestResgister";

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
          error: error.data,
          fetchingUser: false,
        });
      });
  }

  handleRegister = (values) => {
    // e.preventDefault();
    console.log("Checking", values);

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
        console.log(error);
      });
  };

  handleLogin = (e) => {
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
      .catch((error) => {
        this.setState({
          error: error.data,
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
      .catch((errorObj) => {
        // the real error json is always is the .response.data
        this.setState({
          error: errorObj.response.data,
        });
      });
  };

  render() {
    const { error, user } = this.state;
    return (
      <div className="App">
        <NavBar onLogout={this.handleLogout} user={user} />

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
                <LoginForm
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
