import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid"
import Form from './addForm'

class App extends Component{
  state = {
    data:[
      {
          id:1,
      name:"katende"

      }

    ]  

  }
  addName = (name) => {
    const newObj = {
      id: uuidv4(),
      name,
    }
    this.setState({
      data:[...this.state.data , newObj]
    })
    
  }
  
  render() {  

    return (
      <div>
        <Form addName={this.addName}/>
        <h1>Names</h1>
        <ul>
        {
            this.state.data.map(obj => <li key={obj.id}>{obj.name}</li>)
          }
        </ul>
        
      </div>
      
  );
  }
}

export default App;
