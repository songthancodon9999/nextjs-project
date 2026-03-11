
const TodoList = (props : {
    todoList: string [];
}) => {

    const {todoList} = props;

    return (
        <ul>
            {todoList.map((todo, index) => {
                return <li key={index}>{todo}</li>
            })}
        </ul>
    )
}

export default TodoList;