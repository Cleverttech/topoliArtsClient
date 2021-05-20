import React from "react";
import ReactDOM from "react-dom";
// import Loader from "./components/Loader";
import "./index.css";
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
// const App = lazy(()=> import('./App'));


const theme = createMuiTheme({
  //secondary is accent color for buttons
  //primary is dark
  palette: {
    primary: {
      main: "#282624",
    },
    secondary: {
      main: '#ff524e',
    },
    action:{
     hover: "rgba(255,82,78,0.2)"
   }
   
  },
  typography:{
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),

    h1: {
      fontSize: "3em",
      color: "#282624"
    },
    h2: {
      fontSize: "2em",
      color: "#282624"
    },
    h3: {
      fontSize: "1.8em",
    },
    h4: {
      color: "#282624"
    },
    subtitle1:{
      color: "#282624"
    },
    subtitle2:{
      color: "#282624"
    },
    caption:{
      color: "#282624"
    }

  }
  
});


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Suspense fallback = {<Loader />}/> */}
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>  
      {/* </Suspense> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
