import React, { Component } from 'react'
import ResWin from  '../game/ResWin'
export class OptInfo extends Component {
  state={
    status: '',
    sign : ':',
    chronology:[
      {id:1,status: 'lose', money: 20, date: new Date()},
      {id:2,status: 'win', money: 20 ,date: new Date()},
      { id:3,status: 'lose', money: 10,date: new Date()}
    ]
    
  }

  componentDidMount = () =>{
    console.log('OPT',this.props.getRes());
    var res = document.getElementById('res');
    // console.log('res',this.props)
    setTimeout(()=>{
          res.className = 'result center'

    },8000) 
    setTimeout(()=>{
      this.showWindow()
    },10000)
  }


   showWindow =()=>{
   var res = document.getElementById('resWin')
   res.className = 'blurup'
        if( this.props.getRes().ress[0] == this.props.getRes().ress[1]){

          this.setState({
            ...this.state,
            status :'REPEAT'
          })
          alert('same shit')
          this.props.unmount()
          this.props.load()
         
        }
        else if (this.props.meid == this.props.getRes().winnerId){

          this.setState({
            ...this.state,
            status :'WIN'
           
          })
          console.log('+20')

        }else if (this.props.secid == this.props.getRes().winnerId){

          this.setState({
            ...this.state,
            status :'LOSE'
           
          })
          console.log('-20')
        }else {
          alert('wrong')
          

        }

      
   }
    repeatMatch = () =>{
      this.props.unmount();
      this.props.load()
    }


  render() {
    // var res = this.props.res()
    return (
       <div>
         <ResWin  status={this.state.status} repeatMatch={this.repeatMach}/>
       <div id='optinfo' className='card'>
        <div className="center" id = 'res' >{this.props.state.states[0]+this.props.state.states[1]} {': '}
           {this.props.state.states[2]+this.props.state.states[3]}</div>
        </div>
     <div className="status">   {
          this.state.chronology.map(el=>{
          return(  <div key={el.id} className="statusrow"><span>U {el.status} {el.money}! </span>
                <span className="date">{el.date.getHours()}:{el.date.getMinutes()}:{el.date.getSeconds()}</span>
                </div>)
          })
        }
</div>
       </div>
     
     
    )
  }

}
export default OptInfo
