import * as C from "./styles.js"

export const ListItem = ({item, onChange}) => {
  return (
    <C.Container done={item.done}>
      <input 
        type="checkbox" 
        checked={item.done} 
        onChange={e => onChange(item.id, e.target.checked)}
      />
      <label > - {item.name }</label>
    </C.Container>
  )
}