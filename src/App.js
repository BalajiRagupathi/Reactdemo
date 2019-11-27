import React , { Component }from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Aboutc from './components/About.js';
import Login from './login.js';
import './App.css';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login/about" component={Aboutc} />
          <Route path="/login/contact" component={Contact} />
           <Route path="/login" component={Login} />
          </Switch>
    </div>
        </BrowserRouter>
    );
  }
}

export default App;

/* Function name dha variable mari keela use panni irukkanum adha vechu dha value matha page ku anuppuvom vanguvom*/
/* Conatiner Components contains state , life cycle hook , not concerned with UI , Use classes to create */
