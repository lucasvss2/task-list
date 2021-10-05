import { useState } from "react"
import * as C from "./styles"

export const AddTask = ({onEnter}) => {
  const [inputText, setInputText] = useState("")

  const handleKeyUp = (e) =>{
    if(e.code==='Enter'&& inputText!==''){
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <C.Container>
      <div className="image">➕</div>
      <input 
        type="text" 
        placeholder="Add new task"
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  )
}