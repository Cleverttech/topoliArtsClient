import React from "react";
import ReactDOM from "react-dom";
// import Loader from "./components/Loader";
import "./index.css";
import App from './App'
import { BrowserRouter } from "react-router-dom";
// const App = lazy(()=> import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Suspense fallback = {<Loader />}/> */}
        <App />
      {/* </Suspense> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
