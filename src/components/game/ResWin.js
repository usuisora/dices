import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export class ResWin extends Component {


  gotoLobby = () =>{
    this.props.history.push('/lobby')
  }
 

  render() {
    return (
     <div id="resWin" className = 'opacity0'>
     <div className = 'card black  white black-text' >
          <p className="card-title center">
              {this.props.status}
          </p>

          <div className="card-content center">
          <div >
               <NavLink to = '/lobby'><button className='  btn-floating btn-large waves-effect waves-light '><i className="material-icons">cancel
            </i></button></NavLink>
               <button  onClick ={this.props.repeatMatch} className=' btn-floating btn-large waves-effect waves-light '><i className="material-icons">refresh</i></button>
         
            </div> 
          </div>
        
      </div>
     </div>
    )
  }
}

export default ResWin
