import React, { Component } from 'react'

export class Account extends Component {
    state = {
        name : 'Bob',
        money : '123',
    }
  render() {
    return (
      <div className = 'field black-text center '>
          <h5 className="center green-text"> PROFILE</h5>
         <div className="account card">
            <h4 className="name">Bob</h4>
            <h4  className="money">$2123</h4>
         </div>




         <div className="transactions card">
             <h6 className='green-text'>ACCOUNT OPR.</h6>
           <div>
           <button className = 'btn-flat'>PUT MONEY</button>
            </div>
         <div>
           <button className = 'btn-flat '>Withdraw</button>
         </div>
         <div>
           <button className = 'btn-flat grey darken-5 black-text'>Statistics</button>
         </div>
       
         </div>
         </div>
    )
  }
}

export default Account
