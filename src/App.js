import { useState } from 'react';
import * as C from './styles.js'
import {ListItem} from "./components/ListItem"
import {AddTask} from "./components/AddTask"

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Go to the bakery, and pick up some bread",
      done: false,
    },
    {
      id: 2,
      name: "Go to the bakery, and choose a cake",
      done: true,
    }
  ]);
  const handleAddTask = (taskName) => {
    let newList =[...list]
    newList.push({ 
      id: list.length+1,
      name: taskName,
      done: false,    
    });
    setList(newList);
  }

  const handleTaskChange = (id, done) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Task List</C.Header>
        <AddTask onEnter={handleAddTask}/>
        {list.map((item, index) =>
          <ListItem key={index} item={item} onChange={handleTaskChange}/>
        )}
      </C.Area>
    </C.Container>
  );
}

export default App;
