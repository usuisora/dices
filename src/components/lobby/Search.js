import React from 'react'

function Search(props) {


    

  return (
    <div>
    <input  id = 'nameSearch' placeholder = 'Find your friend' type="text" className="white" onChange = {props.handleSearch}/>
       <div className="row">
         <div className="col s12">
           <div className="row">

             <div className=" mSearch input-field col s2">
               <input type="text" id = 'fromSearch'  onChange = {props.handleSearch}/>
               <label htmlFor="To">From</label>
               </div>

               <div className=" mSearch input-field col s2">            
               <input type="text" id = 'toSearch' onChange = {props.handleSearch}/>
               <label htmlFor="To" >To</label>
               </div>

               <div className='col s6'></div>

               <div className="input-field col s2 create">
               <button className='btn-flat small red' id='createButton'  onClick={props.handleCreate} >Create</button>
               </div>

             </div>
            </div>
         </div>

         <div>
     </div>
    </div>
  )
}

export default Search
