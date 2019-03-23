import React, { Component } from 'react'
import Search from './Search';
import Create from '../game/Create';
import  {connect} from 'react-redux'
import {getBattles,postSecPlayer} from '../../actions/battleAction'
import PropTypes from 'prop-types'



export class lobby extends Component {

    state = {
        battles: [], 
        // sortBattles : null
    }

    // componentWillMount = () =>{
    //       this.setState({...this.state,
    //         sortBattles : this.state.battles
    //       })
    // }
    componentDidMount = () =>{
      this.props.getBattles()
      //  console.log(this.props)
      //  this.setState({
      //    ...this.state,
      //    battles : openBattles
      //  })
    }

    connectToBattle = (e)=>{
      console.log( 'id:',  e.target.id );
      this.props.postSecPlayer(e.target.id);

      this.props.history.push('/game')
    }
    
    handleCreate =()=>{
    
        var createModule = document.getElementById('createModule');
        createModule.className = 'popup module'
        createModule.style.opacity = ( createModule.style.opacity == 0) ? 1 : 0
    
    }
    handleSearch = (e) =>{

      
    }

  render() {
    var {openBattles}= this.props.battle
    var battles =  openBattles.map(el=>{
      return(
         <div className = 'pari' key = {el.id}>
                <div>{el.name}</div>
                <div>${el.bill}</div>
                <button id = {el.id} onClick={this.connectToBattle}>connect</button>
        </div>)
    })
 
    return (

      
     <div className="main-color">
       
       <h3>FIND THE FRIEND</h3>
        <div  className = 'card' id='lobby'>
         
          <Search handleSearch =  {this.handleSearch}   handleCreate = {this.handleCreate}/>
         <p> <button className='btn-small btn-flat yellow'>AUTO</button></p>
           {battles}
          <div className= 'lobbyStop'></div>
          <Create/>
        </div>
      </div>
    )
  }
}

lobby.propTypes = {
  getBattles : PropTypes.func.isRequired
}

const mapStateToProps = (state)=> {
   return{
    battle : state.battle
   } 
}

export default connect(mapStateToProps,{getBattles, postSecPlayer})(lobby)
