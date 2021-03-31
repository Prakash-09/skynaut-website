import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Security from './Components/Security/Security'
import Contact from './Components/Contact/Contact'
import Privacy from './Components/Privacy/Privacy'
import Terms from './Components/Privacy/Terms';
import Header from './Components/header/header'
import Footer from './Components/Footer/Footer'
import MainContent from './Components/MainContent/MainContent'

function App(){
  return(
      <div className="app">
        <Router>
          <Header />
          <Route exact path="/">
          <MainContent />
          <Footer />
          </Route>
          <Route path="/About" component={ About } />
          <Route path="/Features" component={ Features } />
          <Route path="/Security" component={ Security } />
          <Route path="/Contact" component={ Contact } />
          <Route path="/Privacy" component={ Privacy } />
          <Route path="/Terms" component={ Terms } />
        </Router>
      </div>
  )
}

export default App;
