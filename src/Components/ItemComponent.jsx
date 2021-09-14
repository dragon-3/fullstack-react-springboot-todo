import React from "react";
import reactDom from "react-dom";
import TodoDataService from "../api/TodoDataService";
import { Form, Formik, Field, ErrorMessage } from 'formik'

class ItemComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            name: '',
            email: ''
        }
    }

    componentDidMount() {

        if(this.state.id === -1) {
            return
        }

        TodoDataService.retriveTodo(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                email: response.data.email
            }))
    }

    render() {

        let {name, email} = this.state

        return (
            <div>
                
                    <h1>Todos</h1>
                {/* Todo component for id - {this.props.match.params.id} */}

                <div className="container">
                    <Formik
                        initialValues = {{name, email}}
                        /* { onSubmit = {this.onSubmit}
                        validate = {this.validate}
                        validateOnBlur = {false}
                        validateOnChange = {false} } */
                        enableReinitialize = {true}
                    >
                        
                    
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" name="name"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Email</label>
                                        <Field className="form-control" name="email"/>
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
                            )
                            
                        }
                    </Formik>
                </div>

                
            </div>
        )
    }
}

export default ItemComponent