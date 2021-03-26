import React, { Component } from 'react';
import './App.css';
import Names from './Components/names'


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: 'katende',
        completed:true
      },
      {
        id: 2,
        name: 'nicholas',
        completed:false
      },
      {
        id: 3,
        name: 'edgar',
        completed:false
      },
      {
        id: 4,
        name: 'Ssemakula',
        completed:false
      }
      
    ],
    count: 0,
    firstName: '',
    lastName: '',
    isfriendly:true

  }
  handleClick = (id) => {
    this.setState(
      {
        todos: [...this.state.todos.filter(name => name.id !== id)]      
      } 
    )
  }
  mystyle = () => {
    let color = 'btn btn-'
    const { count } = this.state
    return count === 0 ? color += 'primary' : color += 'warning'
  }
  handleCounter = () => {
    this.setState(prevState => (
      {
        count:prevState.count+1
      }
      
    )

    )
    
  }
  

  amChanged = (e) => {
    this.setState(
      {
        names: this.state.todos.map(name => {
          if (name.id === e) {
            name.completed = !name.completed
            
          }
          return name
          
        }
        )
      }
    )
  }
  
  render() {
    //const names = this.state.todos.map(name => <p>{name.name}</p>)
    return (
      <div>
        {
          this.state.todos.map(
            name => <Names
              key={name.id}
              names={name}
              handleChanges={this.amChanged}
              handleClick = {this.handleClick}
            />
          )
        }
        {this.state.count}
        <button
          onClick ={this.handleCounter}
          className={this.mystyle()}>
          IncreaseCounter
          </button>
          <form>
          <input
            type='text'
            name='firstName'
            placeholder='Enter your fname'
            onChange={this.getName}
            value = {this.state.firstName}
          />
          <br/>
          <input
            className='mt-2'
            type='text'
            name='lastName'
            placeholder='Enter your lname'
            onChange={this.getName}
            value = {this.state.lastName}
          />
          <br></br>
          <label>
            <input
              type='checkbox'
              checked={this.state.isfriendly}
              onChange={this.getName}
              name='isfriendly'

            /> isfriendly
          </label>
            
          </form>
          
       <h1>{this.state.firstName}</h1> 
       <h1>{this.state.lastName}</h1>

        
      </div>
      

  );
  }
  getName = (event) => {
    const {name , value , type , checked} = event.target
   type ==='checkbox'? this.setState({[name]:checked}):this.setState({[name]:value})
  }
}

export default App;
