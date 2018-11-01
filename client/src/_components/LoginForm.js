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
        listPeople: false
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


    render () {

        let showPerson = null;

        if(this.state.listPeople){
            showPerson = (
                this.state.persons.map((person,key) => {
                    return (
                        <Person name={person.name} age={person.age} key={person.id}/>
                    )
                })
            );
        }else{
            showPerson = null;
        }



        return(
            <div>
                <Person name="Imran Yousuf" age="26" />

                <Person name="Ray Nui" age="35" changed={() => console.log("This is just a test")} />

                <button onClick={this._listPersonsHandler}>Test</button>

                {showPerson}
            </div>
        )

    }




};
