import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=6;
  apiKey="18fd15ceea464a41b3a6e184e838e65c";

  state={
    progress:0
    //p
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={"in"} category={"general"} key={"general"}/>}/>
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={"in"} category={"general"} key={"general"}/>}/>
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={"in"} category={"business"} key={"business"} />}/>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={"in"} category={"entertainment"} key={"entertainment"} />}/>
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={"in"} category={"health"} key={"health"} />}/>
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={"in"} category={"science"} key={"science"} />}/>
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={"in"} category={"sports"} key={"sports"} />}/>
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country={"in"} category={"technology"} key={"technology"} />}/>
          </Routes>
        </BrowserRouter>
    )
  }
}

