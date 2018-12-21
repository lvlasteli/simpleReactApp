import React from "react";

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.email
        }
    }
  
    render() {
        if(this.props.email!=="Not Logged in") {
            
        }  
        return (
            <div className="form-group">
                <h3>The User Page</h3>
                
            </div>
        );
    }
}