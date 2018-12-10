import React from "react";

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.username,
            age: props.age,
            userTasks: []
        }
    }
  
    render() {
        let Age;
        console.log(this.props.username);
        if(this.props.username!=="default User") {
            //insert option for user to add user stories
            if(this.state.age) {
                Age = <p>Age: {this.props.age}</p>
            }
        }
        
            
        return (
            <div className="form-group">
                <h3>The User Page</h3>
                <p>Username: {this.props.username}</p>
                {Age}
            </div>
        );
    }
}