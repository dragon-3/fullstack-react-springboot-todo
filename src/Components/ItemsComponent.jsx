import React from "react";
import reactDom from "react-dom";
import TodoDataService from "../api/TodoDataService";

class ItemsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            todos : []
        }
        
        this.refreshTodos = this.refreshTodos.bind(this);
        
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

    render() {
        return (
            <div>
                <div >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>email</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                    <tr>
                                        <td>{todo.name}</td>
                                        <td>{todo.email}</td>
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