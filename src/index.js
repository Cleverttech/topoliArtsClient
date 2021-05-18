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
    allVariants: {
      // color: "#282624"
    },
    h1: {
      fontWeight: 150,
      fontSize: "3em"
    },
    h2: {
      fontWeight: 150,
      fontSize: "2em",
    },
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontWeight: 150
    },
    subtitle1:{
      fontWeight: 150
    },
    subtitle2:{
      fontWeight: 150
    },
    caption:{
      fontWeight: 150
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
