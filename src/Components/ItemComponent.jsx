import React from "react";
import reactDom from "react-dom";
import TodoDataService from "../api/TodoDataService";
import { Formik } from "formik";
import { withRouter } from "react-router";

class ItemComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
        }
    }

    render() {
        return (
            <div>
                Todo component for id - {this.props.match.params.id}
                
            </div>
        )
    }
}

export default ItemComponent