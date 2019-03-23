import React, { Component } from 'react';
import './styles/Output.css';
import NavLinks from './components/nav/NavLinks';
import Field from './components/game/Field';
// import OptInfo from './components/opt/OptInfo';
import Lobby from './components/lobby/Lobby'
import Support from './components/nav/Opts/Support'
import { BrowserRouter , Route} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './store'


import logo from './images/logo5.png' 
// import backlogo from './images/logo6.png' 
import FAQ from './components/nav/Opts/FAQ';
import Account from './components/account/Account';
class App extends Component {
  render() {
    return (
    <Provider store = {store}>
    <div className="App">
      <div className="logo"><img src={logo} alt="logo"/></div>
      {/* <div className="logo2"><img src={backlogo} alt="logo"/></div> */}
            <BrowserRouter>
            {/* */}
            {/* <div id='navSection'><NavLinks/></div>s */}
                <div>
                <Route  path = '/' component={NavLinks}></Route> 
                <Route exact path = '/game' component={Field}></Route>
                <Route exact path ='/lobby' component ={Lobby}></Route>
                
                <Route exact path ='/faq' component ={FAQ}></Route>
                <Route exact path ='/profile' component ={Account}></Route>
                <Route exact path ='/support' component ={Support}></Route>
                
                </div>
            </BrowserRouter>
           
        
      </div>
    </Provider>
      
    );
  }
}

export default App;
