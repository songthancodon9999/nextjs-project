import { useState } from "react";

interface IProps {
    name: string;
    age: number;
    info?: {},
    todoList: string[]
    setTodoList: (value : string[]) => void
}

const InputToDo = (props: IProps) => {
 
    const {todoList, setTodoList} = props;
    const [fullName, setFullName] = useState("");
    
    const handleSave = () => {
        setTodoList([...todoList, fullName]);
        setFullName("");
    }
    
    return (
        <div>
            <input value={fullName} style={{padding: "8px",
                    borderRadius: "8px"
                }} 
                type="text" 
                placeholder='Enter your todo here' 
                onChange={(event) => {
                    setFullName(event.target.value)
                }}
            />

            <button style={{padding: "8px", marginLeft: "8px", 
                    borderRadius: "8px", background: "purple"}}
                onClick={() => handleSave()}>
                    Save
            </button>
        </div>
    )
  }

  export default InputToDo;