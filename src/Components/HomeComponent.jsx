import React from "react";
import ItemListComponent from "./ItemListComponent";
import ItemComponent from "./ItemComponent";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


function HomeComponent() {

    

    
    return (
        <div className="home">
            <h1>Hello, Welcome to Todo</h1>
            <ItemListComponent />
            
            
            
            

        </div>
    )
            

      
}

export default HomeComponent