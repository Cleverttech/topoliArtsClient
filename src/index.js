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
      hover: "rgba(0,0,100,0.2)"
    }
  },
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
