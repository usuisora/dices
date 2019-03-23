import React, { Component } from 'react'
import  {connect} from 'react-redux'
import {postOpenBattle,getBattles} from '../../actions/battleAction'
import PropTypes from 'prop-types'

export class Create extends Component {
    state = {
        money : 0
    }

    handlePari = (e) =>{     
            this.setState({
                ...this.state,
                money: e.target.value
            })
        console.log(this.state.money)
    }

    handleAdd = (e) =>{   
        if(this.state.money){
            console.log('added pari in ', this.state.money , 'dollars');

            var createModule = document.getElementById('createModule');
            createModule.className = ' module opacity0 '
            this.props.postOpenBattle({id: 12, name :'usui' , bill: 32})
            this.props.getBattles()
        }else{
            alert('its string')
            var crI = document.getElementById('createInput');
            crI.value = ''
        }    
        
    }

    handleCancel = (e) =>{
        // alert('dsfsdsdsfsd')
        var createModule = document.getElementById('createModule');
        createModule.className = ' module opacity0 '
    }
  render() {
    return (
        
          <div className= 'opacity0 module' id ='createModule'>
              <div className="card-content">
                  <h3>CREATE PARI</h3>
                  <div className="col s12">
                      <input type="number" placeholder='PARI'  onChange={this.handlePari} id = 'createInput' /></div>
                 
                  <button className='btn-flat right white-text ' onClick = {this.handleCancel}>CANCEL</button>
                  <button className='btn-flat  white black-text   ' onClick = {this.handleAdd}>ADD</button>
              </div>
          </div>
        
      )
  }
}


Create.propTypes = {
    postOpenBattle : PropTypes.func.isRequired
  }

export default connect(null,{postOpenBattle,getBattles})(Create)
