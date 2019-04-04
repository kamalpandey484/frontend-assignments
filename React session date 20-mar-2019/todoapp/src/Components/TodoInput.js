import React, {Component} from 'react';
// import TodoItem from "./TodoItem";

class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props
        return(
                <div className={editItem?"my-4 card card-body bg-success":"my-4 card card-body bg-info"}>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Add a todo item"
                                value={item}
                                onChange={handleChange}
                                required
                            />
                                    <div className="input-group-append">
                                    <button className="btn btn-outline-dark text-white" type="submit">
                                        {editItem ? 'Edit Item' : 'Add Item'}
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
        );
    }
}

export default TodoInput;