import React from 'react'

function Support() {
  return (
    <div className='field white-text'> 
        <h5 className="center ">SUPPORT</h5>
      <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit, sapiente optio consectetur, commodi dicta itaque nesciunt pariatur unde corrupti aliquam reiciendis odit quia hic magni mollitia impedit, voluptas dolorum?

      </div>
      <div className="card grey  lighten-3">

          <div className='card-title'>
          <h5 className="grey-text text-darken-2" >What the essue?</h5>
          </div>
        



          <div className="card-content">

              <label htmlFor="email" className = 'orange-text '>Leave your email</label>
              <input type="email"/>
              <label htmlFor="email" className = 'orange-text '>Your Name</label>
              <input type="text"/>
                <label htmlFor="" className = 'orange-text'>Tell us what problem is</label>
              <textarea className="materialize-textarea"  ></textarea>
              
              <div className="card-action">
              <button type="submit" className='right btn-flat orange '>SEND</button>

              </div>
              {/* <button type="submit" className='right btn-flat orange '>SEND</button> */}
          </div>
      </div>
    </div>
  )
}

export default Support
