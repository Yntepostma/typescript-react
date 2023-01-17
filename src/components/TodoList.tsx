import './TodoList.css'


interface TodoListProps {
   items: {id: string, text: string}[]
   delete: (id:string)=> void
}


const TodoList: React.FC<TodoListProps>= (props):JSX.Element => {

    
    return  (
     <ul>
        {props.items.map(tdi => {
            return <li key={tdi.id}>
                <span>{tdi.text}</span>
                <button onClick={props.delete.bind(null, tdi.id)}>delete item</button>
                
                </li>
        })}

    </ul>)
}

export default TodoList