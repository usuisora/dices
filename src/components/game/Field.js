import React, { Component } from 'react'
import Game from './Game';
import Pad from './Pad';
import {connect} from 'react-redux'
// import {GET_}

export class Field extends Component {



    state = {
      
    }
  //   makeRand=()=>{
  //     return Math.ceil( Math.random()*6);
  // }
  //   getRand=()=>{
  //       this.setState({
  //         u: {
  //           ...this.state.u,
  //           dice1: this.makeRand(),
  //           dice2: this.makeRand()
  //         },
  //         user:{
  //           ...this.state.user,
  //           dice1: this.makeRand(),
  //           dice2: this.makeRand()
  //         }
  //       })
  //   }
    componentDidMount =()=>{
  
            // console.log(this.getRand())
       
        
    }
  render() {
    return (

    
      <div id = 'field' className='card'>
       
        <Game/>
        {/* <Pad state = {this.state}/>     */}
        {/* <ResWin/> */}
      </div>


    )
  }
}

export default Field
