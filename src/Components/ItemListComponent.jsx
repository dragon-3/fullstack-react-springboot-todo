import React from "react";
import reactDom from "react-dom";
import TodoDataService from "../api/TodoDataService";
import ItemComponent from "./ItemComponent";
import { withRouter } from "react-router";

class ItemListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : []
        }
        
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        
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

    deleteTodoClicked(id) {
        
        TodoDataService.deleteTodo(id)
        .then(
            response => {
                
                this.refreshTodos();
            }
        )
        
    }

    updateTodoClicked(id) {
        console.log("update" + id)
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
                                    <tr key={todo.id}>
                                        <td>{todo.name}</td>
                                        <td>{todo.email}</td>
                                        <td><button onClick={() => this.updateTodoClicked(todo.id)} className="button">Update</button></td>
                                        <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="button">Delete</button></td>
                                        

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

export default withRouter(ItemListComponent)