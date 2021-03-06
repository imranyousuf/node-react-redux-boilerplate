import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import '../static/main.css';
import Button from '@material-ui/core/Button';
import Person from './Person';

export default class LoginForm extends Component {

    state = {
        persons: [
            {name: "Imran", age: 26, occup: "engineer", id:123},
            {name: "Tahmina", age: 30, occup: "engineer", id:456},
            {name: "Yem", age: 41, occup: "engineer", id:965},
            {name: "Ray", age: 39, occup: "engineer", id:658}
        ],
        listPeople: true
    };




    _listPersonsHandler = () => {
        if (this.state.listPeople === false){
            this.setState(
                {
                    listPeople: true
                }
            )
        }else{
            this.setState(
                {
                    listPeople: false
                }
            )
        }

    };



    _deletePersonsHandler = (deleteId) => {
        const newPersonState = this.state.persons.filter(person => person.id !== deleteId);
        console.log("Deleted ID:"+ deleteId);

        this.setState({
            persons: newPersonState
        })

    };

    render () {

        let showPerson = null;

        let buttonStyle=null;

        if(this.state.listPeople){
            showPerson = (
                this.state.persons.map((person,key) => {
                    return (
                        <Person
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            clicked={() => this._deletePersonsHandler(person.id)}/>
                    )
                })
            );
            buttonStyle = 'buttonClicked';
        }else{
            showPerson = null;
            buttonStyle = 'buttonNotClicked'
        }



        return(
            <div>

                <button className={buttonStyle} onClick={this._listPersonsHandler}>Test</button>

                {showPerson}
            </div>
        )

    }




};
