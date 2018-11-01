import React, { Component } from 'react';
import '../static/main.css';
import Card from "@material-ui/core/Card/Card";

export default class Person extends Component{

    render(){

        return(

            <div className="container">
                <Card>
                    <p>{this.props.name}</p>
                    <p>{this.props.age}</p>

                    <button
                    onClick={this.props.clicked}
                    >
                    Delete
                    </button>
                </Card>
            </div>
        )
    }

}
