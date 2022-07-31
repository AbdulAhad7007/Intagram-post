
import React, {Component} from 'react';
import { Header } from "./components/header/header";


import { Post } from "./components/post/post";
import "./App.css";

class App extends Component{
    render(){
        return(
          <>
          <Header />
          <Post />
          
          </>  
        )
    }
}

export default App