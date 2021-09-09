import React from "react";
import reactDom from "react-dom";

class ItemsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            family : [
               
                {
                   name: 'Sean',
                   email: 'sean@gmail.com'
                },
                {
                    name: 'Bruna',
                    email: 'Bruna@gmail.com'
                }

            ]
        }
            
        
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
                                this.state.family.map(
                                    people =>
                                    <tr>
                                        <td>{people.name}</td>
                                        <td>{people.email}</td>
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