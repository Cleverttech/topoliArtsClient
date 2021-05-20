import { React, Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import TestNavBar from "./components/TestNavBar";
import axios from "axios";
import config from "./config";
import ForChildren from "./components/ForChildren";
import LandingPage from "./components/LandingPage";
import TestLogin from "./components/TestLogin";
import TestRegister from "./components/TestRegister";
import Courses from "./components/Courses";
import Users from "./components/Users";
import NotFound from "./components/NotFound";

import ChatPage from "./components/ChatPage";
import Stripe from "./components/Stripe";
import Artists from "./components/Artists";
import PortfolioDetails from "./components/PortfolioDetails";
import CoursePaymentForm from "./components/CoursePaymentForm";
import Loader from './components/Loader'
import './App.css'

import ProfileTest from "./components/ProfileTest";
import Settings from "./components/Settings";


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
    loading: true,
    disableSubmit: false,
  };

  fetchFromDB=()=>{
    axios.get(`${config.API_URL}/api/user`, { withCredentials: true })
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

  axios.get(`${config.API_URL}/api/courses`, { withCredentials: true })
  .then((response) => {
    this.setState({
      courses: response.data,
      filteredCourses: response.data,
    });
      return axios.get(`${config.API_URL}/api/users`, { withCredentials: true })
    })
    .then((response) => {
      this.setState({
          userList: response.data,
          filteredUserList: response.data,
          loading: false,
        });
    })
    .catch((error) => {
      this.setState({
        loading:false,
        error: error.data,
      });
    });
  }


  componentDidMount = () => {
    this.fetchFromDB()
  };

  handleSearchUser =(e) => {
    let input = e.target.value
    const {userList} = this.state
    let filteredUserList = userList.filter((e)=>{

      return e.username.toLowerCase().includes(input.toLowerCase())
    })

    this.setState({
      filteredUserList: filteredUserList
    })
  };

  handleSearchCourse =(e) => {
  let input = e.target.value

  const {courses} = this.state
  let filteredCourses = courses.filter((e)=>{
    return e.name.toLowerCase().includes(input.toLowerCase())
  })

  this.setState({
    filteredCourses: filteredCourses
  })
  };

  handleRegister = (values) => {
    const { username, email, password } = values;

    let newUser = {
      username,
      email,
      password,
    };
    axios.post(`${config.API_URL}/api/register`, newUser, {
        withCredentials: true,
      })
      .then((result) => {
        this.fetchFromDB()
        this.setState({
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
          error: error.data,
        });
      });
  };

  handleLogin = (values) => {
    const { email, password } = values;
    let newUser = {
      email,
      password,
    };

    axios.post(`${config.API_URL}/api/login`, newUser, { withCredentials: true })
    .then((response) => {
      this.fetchFromDB()
        this.setState({
            user: response.data,
            error: null,
        },() => {
            this.props.history.push("/");
        });
      })
      .catch((error) => {
         this.setState({
          error: error.data,
        });
      });
  };

  handleSubmitSettings = (values) => {
    console.log('hello submit settings')
    const { username, email, password } = values;

    let newUser = {
      username,
      email,
      password,
    };
    axios.patch(`${config.API_URL}/api/settings`, newUser, {withCredentials: true})
    .then((result) => {
      this.setState({
          user: result.data,
      },() => {
      this.props.history.push("/profile");
        });
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
      .catch((error) => {
        // the real error json is always is the .response.data
        this.setState({
          error: error.data,
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
    
    this.setState({
      disableSubmit : true,
    })
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
              disableSubmit: false,
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
      axios.delete(`${config.API_URL}/api/courses/${courseId}`, {withCredentials: true})
      .then(() => {
        let filteredCourses = this.state.courses.filter((course) => {
          return course._id !== courseId;
          });
          this.setState({
            courses: filteredCourses,
            },() => {
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
  
  handleSubmitAdmin = (id, e) => {
    e.preventDefault();
    let role = e.target.student.checked;
    let newRole = {};
    if (role) {
      newRole.role = "mentor";
      axios
        .patch(`${config.API_URL}/api/users/${id}`, newRole, {withCredentials: true})
        .then((result) => {
          let updatedUserList = this.state.userList.map((e) => {
            if (e._id == result.data._id) {
              return result.data;
            } else {
              return e;
            }
          });
          this.setState({
            userList: updatedUserList,
            filteredUserList: updatedUserList,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleSubmitPic = (e) => {
    e.preventDefault();
    let img = e.target.img.files[0];
    let formData = new FormData();
    formData.append("imageUrl", img);

    axios.post(`${config.API_URL}/api/upload`, formData, { withCredentials: true })
    .then((result) => {
        axios.patch(
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
  
  handleSubmitPayment=(e)=>{

		e.preventDefault()
    const fullname = e.target.fullname.value
		const { courseId } = this.props.match.params
    console.log(courseId)
		const { user } = this.state
		let msgForm = `Hello man, ${fullname} just bought your course. His E-mail is ${user.email}.`
    return <Redirect to={`/courses/${courseId}/payment`} msgForm={msgForm}/>
	}

  render() {
    const {disableSubmit, loading, error, user, courses, userList, filteredCourses, filteredUserList } = this.state;
    if(loading){
      return (<Loader/>)
    }else{

    
    return (
      <div className="App">
        <TestNavBar onLogout={this.handleLogout} user={user} />
        {/* <Stripe/> */}

        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route path="/forchildren" component={ForChildren} />
    
          <Route path="/users" render={(routeProps) => {
            return (<Users onSearchUser={this.handleSearchUser} onPatchRole={this.handleSubmitAdmin} error={error} user={user} userList={filteredUserList} {...routeProps}/>);}}/>
          
          <Route exact path="/courses" render={(routeProps) => {
            return (<Courses error={error} courses={filteredCourses} {...routeProps} onSearchCourse={this.handleSearchCourse} userList={userList}/>);}}/>
          
          <Route exact path="/courses/:courseId" render={(routeProps) => {
            return (<CoursePaymentForm onSubmitPayment={this.handleSubmitPayment} disableSubmit={disableSubmit} error={error} courses={courses} userList={userList} {...routeProps}/>);}}/>
            
          <Route exact path="/courses/:courseId/payment" render={(routeProps) => {
            return (<Stripe error={error} user={user} userList={filteredUserList} courses={courses} {...routeProps}/>);}}/>
          
          <Route exact path='/artists' render={(routeProps)=>{
            return (<Artists error={error} user={user} courses={courses} userList={userList} {...routeProps}/>)}}/>
          
          <Route exact path='/artists/:artistId' render={(routeProps)=>{
            return (<PortfolioDetails user={user} courses={courses} userList={userList} {...routeProps}/>)}}/>
          
          <Route exact path="/profile" render={(routeProps) => {
            return (<ProfileTest disableSubmit={disableSubmit} user={user} userList={filteredUserList} onSubmitSettings={this.handleSubmitSettings} onCreate={this.handleCreate} onDeleteCourse={this.handleDeleteCourse} onCreatePortfolio={this.handleCreatePortfolio} courses={filteredCourses} onSubmitPic={this.handleSubmitPic} onDeleteCourse={this.handleDeleteCourse} {...routeProps}/>);}}/>
            
          <Route path='/chat/:conversationId' render={(routeProps)=>{
            return (<ChatPage user={user} {...routeProps}/>)
          }}/>
          
          <Route exact path="/login" render={(routeProps) => {
            return (<TestLogin error={error} onLogin={this.handleLogin} {...routeProps} />);}}/>
          
          <Route exact path="/register" render={(routeProps) => {
            return (<TestRegister error={error} onSubmit={this.handleRegister} {...routeProps}/>);}}/>

          <Route path='/settings' render={(routeProps)=>{
            return (<Settings error={error} user={user} onSubmitSettings={this.handleSubmitSettings} {...routeProps}/>);}}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
}

export default withRouter(App);
