import React, {Component} from 'react';
import TodoItem from "./TodoItem";
// import TodoInput from "./TodoInput";

class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit}=this.props;
        return (
            <ul className="list-group my-3">
                <h3 className="text-capitalize text-center">Todo List</h3>
                {items.map(item=> {
                    return <TodoItem
                        key={item.id}
                        title={item.title}
                        handleDelete = {()=>handleDelete(item.id)}
                        handleEdit = {()=>handleEdit(item.id)}
                    />
                })}
                <button className="btn btn-danger btn-block" onClick={clearList}>Clear All</button>
            </ul>
        );
    }
}

export default TodoList;