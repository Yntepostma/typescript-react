import { useRef} from "react"
import './NewTodo.css'

interface AddProps {
    add: (text:string) => void,
    
}



const NewtoDo:React.FC<AddProps> = (props) => {
 
    const textInputRef = useRef<HTMLInputElement>(null)


    const handleSubmit= (e:React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value
    props.add(enteredText)
    
   
    }

    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label htmlFor='todo-text'>Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit" >Add todo</button>
           

        </form>
    )
}

export default NewtoDo