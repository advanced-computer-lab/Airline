import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

 const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
     return (
      promiseInProgress && 
      <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#f0f6f7ff"
      }}
    >
      <Loader type="ThreeDots" color="#000000" height="100" width="100" />
    </div>
    );  
   }

ReactDOM.render(
  <BrowserRouter>
    <App />
    <LoadingIndicator/>
  </BrowserRouter>,
  document.getElementById('root')
);