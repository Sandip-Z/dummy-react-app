import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Page from './Components/Page'
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} />
    <Route path="/post/:post_id" component={Page} />
    </div>
    </BrowserRouter>
  );
}

export default App;
