import React, {useState , useEffect} from 'react'
import data from './api'
import Counter from './Component/Counter';
import Nav from './Nav'
import { v4 as uuidv4 }from "uuid"
import MyForm from './form'
const App = () => {
  const [mydata, setMydata] = useState([])
  const getData = () => {
    setTimeout(() => {
      setMydata(data)
      
    },2000 )
  }
  useEffect(() => {
    getData()
    
  }, [])
  const addTodo = (todo) => {
    const newObj = {
      id: uuidv4(),
      value: 0,
      todo,
      completed:false
    }
    setMydata(prevState=>([...prevState , newObj]))

  }
  const onDelete = (id) => {
    // const newArray = mydata
    // newArray.filter(obj => obj.id !== id)
    // setMydata(newArray)
    setMydata(prevState => {
      return (
        [...prevState.filter(obj=>obj.id !== id)]
      )
    })

    
  }
  const onIncrement = (id) => {
    const newArray = [...mydata]
    newArray.map(obj => {
      if (obj.id === id) {
        obj.value++
      }
      return obj
    })
    setMydata(newArray)

  }
  const markCompleted = (id) => {
    const newArray = [...mydata]
    newArray.map(obj => {
      if (obj.id === id) {
        obj.completed = !obj.completed
      }
      return obj
    })
    setMydata(newArray)
    
    
  }
  const onDecrement = (id) => {
    const newArray = [...mydata]
    newArray.map(obj => {
      if (obj.id === id) {
        obj.value--
      }
      return obj
    })
    setMydata(newArray)
  }
  const onReset = (num) => {
    const newArray = [...mydata]
    newArray.map(obj => obj.value = 0)
    setMydata(newArray)  
  }
    
  return(
    <div>
      <MyForm addTodo={addTodo}/>
      {
        mydata.length ?
          <Nav navData={mydata}
            handleReset = {onReset}
          />         :
          <h1>Loading...</h1>
      }
      {
        mydata.length ?
          <Counter
            counterData={mydata}
            handleDelete={onDelete}
            handleIncrement={onIncrement}
            handleDecrement={onDecrement}
            markCompleted = {markCompleted}
          /> :
          <h1>Loading...</h1>
      }

    </div>
  )
}
export default App;
