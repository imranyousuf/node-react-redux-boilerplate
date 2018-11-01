import React, { Component } from 'react';
import '../static/main.css';
import Card from "@material-ui/core/Card/Card";

export default class Person extends Component{



    _deleteHandler = () => {
        console.log("This is just a test")
    };

    _changeNameHandler = (name) => {

    }

    render(){




        return(

            <div className="container">
                <Card>
                    <p>{this.props.name}</p>
                    <p>{this.props.age}</p>

                    <button
                    onClick={this.props.changed}
                    >
                    Delete
                    </button>
                </Card>
            </div>
        )
    }

}
