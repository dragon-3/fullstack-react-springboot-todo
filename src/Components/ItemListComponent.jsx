import React from "react";
import reactDom from "react-dom";
import TodoDataService from "../api/TodoDataService";

class ItemsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
        
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        
    }

    componentDidMount() {
        this.refreshTodos();
        console.log(this.state);
    }

    refreshTodos() {
        TodoDataService.retriveAllTodos()
        .then (
            response => {
                this.setState({
                    todos: response.data
                })
            }
        )
    }

    updateTodoClicked(id) {
        this.props.history.push(`/all-todos/${id}`)
    }

    render() {
        return (
            <div>
                <div >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr>
                                        <td>{todo.name}</td>
                                        <td>{todo.email}</td>
                                        <td><button onClick={() => this.updateTodoClicked(todo.id)} className="button">Update</button></td>
                                        

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        
        )
    }
}

export default ItemsComponent