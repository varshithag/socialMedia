import React from 'react';
import Register from './component/user/register'
import logo from './logo.svg';
import './App.css';


class Form extends React.Component{  

      componentDidMount(){
         
      }
      render(){
        return(
          <div className="app">
           <Register/>
          </div>
        );
      }
}

export default Form;
