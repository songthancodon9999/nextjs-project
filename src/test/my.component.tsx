import { useState } from "react";

interface IProps {
    name: string;
    age: number;
}

const InputToDo = (props: IProps) => {
 
    const [todoList, setTodoList] = useState<string[]>(["Learn React", "Learn TypeScript", "Build a project"]);


    const [fullName, setFullName] = useState("Hien");
    const handleSave = () => {
        setTodoList([...todoList, fullName]);
        setFullName("");
    }
    
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"}}>
            <div>Input here</div>
            <div>Name = {props.name}</div>
            <div>Age = {props.age}</div>
            <div>
                <input value={fullName} style={{padding: "8px",
                    borderRadius: "8px"
                }} type="text" placeholder='Enter your todo here' 
                onChange={(event) => {
                    setFullName(event.target.value)
                }}/>
                <button onClick={() => handleSave()}>Save</button>
            </div>
            <ul>
                {todoList.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </div>
    )
  }

  export default InputToDo;