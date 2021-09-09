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
        <table>
            <thead>
                <tr>
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
                </tr>
            </thead>
        </table>
        )
    }
}

export default ItemsComponent