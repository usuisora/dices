import React, { Component } from 'react'
import NavAcc from './NavAcc'


import {Link} from 'react-router-dom'
export class NavLinks extends Component {

  goToLobby =()=>{
      console.log(this.props)
      this.props.history.push('/lobby')
  }
  render() {
    return (
      <div id='navSection'>
      <div id = 'navlinks' className='card center'>
        <div className="card-content">
        <button className="btn green center " onClick = {()=>{this.props.history.push('/profile')}}>My Profile</button>
         <ul className='center mycont'>
           <li><NavAcc/></li>
         </ul>
         
        <div className='buttons center'>
          <ul>
            <li>    <button className='btn-flat  white playbutt' onClick={this.goToLobby}>PLAY NOW</button></li>
            <li className='playslash'></li>
            
           
            <li>    <button className='btn-flat grey-text text-lighten-3 ' onClick = {()=>{this.props.history.push('/faq')}}>FAQ</button></li>
            <li>    <button className='btn-flat grey-text text-lighten-3 ' onClick = {()=>{this.props.history.push('/support')}}>SUPPORT</button></li>
          </ul>
      
        </div>
        </div>
      </div>


      </div>
     
    )
  }
}

export default NavLinks