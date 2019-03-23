import React, { Component } from 'react'
import OptInfo from '../opt/OptInfo';
import {connect} from 'react-redux'
import { getSecPlayer, postClosedBattle} from '../../actions/battleAction'
import {getMe} from '../../actions/playerAction' 
import PropTypes from 'prop-types'

export class Game extends Component {


  state =  {
    //  res :  this.props.res()
  }
 
  start = () =>{
    console.log('start');
    // this.props.getRand()
  }

  showUpDices = () =>{
    console.log('fdsfsdf')
    var game  = document.getElementById('game');
    var dices = game.getElementsByClassName('dice');
    dices[0].className = 'dice updice'
    dices[2].className = 'dice updice'
  }

  showDownDices = ()=>{
    console.log('adsdasd')
    var game  = document.getElementById('game');
    var dices = game.getElementsByClassName('dice');
    dices[1].className = 'dice updice'
    dices[3].className = 'dice updice'
    // this.formRes()
  }

  unmount =()=>{
    var resWin = document.getElementById('resWin');
    resWin.className = 'opacity0'
    var game  = document.getElementById('game');
    var dices = game.getElementsByClassName('dice');
    for(var i = 0 ; i< dices.length ; i++){
      dices[i].className = 'dice'
    }
  }

   load = () =>{
    this.unmount()
    setTimeout(this.start, 1000);
      setTimeout(this.showUpDices,2000);
      setTimeout(this.showDownDices, 5000);
      setTimeout(this.showResult, 5500);
  }

   componentDidMount = () =>
  {
   
      
    // console.log(this.props)
    this.props.getSecPlayer();
    this.props.getMe()
    this.unmount()
    this.load()
 
  }
  getRand=()=>{
    return Math.ceil( Math.random()*6);
}

  formRes = () =>{

     var users = document.getElementsByClassName('userdata');
    var res1 = parseInt(users[0].getElementsByTagName('button')[0].innerHTML) + parseInt(users[0].getElementsByTagName('button')[1].innerHTML )
    var res2 = parseInt(users[1].getElementsByTagName('button')[0].innerHTML) + parseInt(users[1].getElementsByTagName('button')[1].innerHTML )
     var winner = parseInt(res1)>parseInt(res2) ? users[0].id : users[1].id
     var res = {
      playerIds : [users[0].id ,users[1].id],
      ress: [res1,res2],
      winnerId: winner,
      date : new Date()
    }
   
    return res
    //  console.log('user1 :',users.id, users.getElementsByTagName('button')[0].innerHTML);

  }
  render() {
    var secPlayer = this.props.battle.secPlayer;
    var me        = this.props.player.mydata;
    console.log('game:',secPlayer)
   

    return (
      <div id='game' className='card'>

             

                <div id = 'user1' className='card user' >
                 <div className="card-content userdata" id = {me.id}>
                 <p className='username' >{me.name}</p>
                 <div><button className='dice' id ='dice1'>{this.getRand()}</button></div>
                    <div><button className='dice'>{this.getRand()}</button></div>
                 </div>
                </div>

                <div id = 'user2' className=' card user'  >
                    <div className="card-content userdata" id = {secPlayer.id}>
                    <p className=' username red-text' >{secPlayer.name}</p>
                      <div><button className='dice' >{this.getRand()}</button></div>
                      <div><button className='dice'>{this.getRand()}</button></div>
                  </div>
                </div>
                
                <div className="opt">
                    <OptInfo  getRes = {this.formRes}  meid = {me.id}  secid = {secPlayer.id}
                    load = {this.load}    unmount = {this.unmount}/>
                </div>

                <div id = 'cash'>
                    <div className="cmoney">20</div>
               </div>
      </div>
    )
  }
}
Game.propTypes = {
  getMe : PropTypes.func.isRequired,
  getSecPlayer: PropTypes.func.isRequired,
  battle: PropTypes.object.isRequired

}

var mapStateToProps = (state) =>{
return {
  battle : state.battle,
  player : state.player,
}
}
export default connect(mapStateToProps, {getMe,getSecPlayer, postClosedBattle})(Game)
