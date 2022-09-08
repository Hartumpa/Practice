import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<News pageSize={6} country={"in"} category={"general"} key={"general"}/>}/>
            <Route path="/general" element={<News pageSize={6} country={"in"} category={"general"} key={"general"}/>}/>
            <Route path="/business" element={<News pageSize={6} country={"in"} category={"business"} key={"business"} />}/>
            <Route path="/entertainment" element={<News pageSize={6} country={"in"} category={"entertainment"} key={"entertainment"} />}/>
            <Route path="/health" element={<News pageSize={6} country={"in"} category={"health"} key={"health"} />}/>
            <Route path="/science" element={<News pageSize={6} country={"in"} category={"science"} key={"science"} />}/>
            <Route path="/sports" element={<News pageSize={6} country={"in"} category={"sports"} key={"sports"} />}/>
            <Route path="/technology" element={<News pageSize={6} country={"in"} category={"technology"} key={"technology"} />}/>
          </Routes>
        </BrowserRouter>
    )
  }
}

