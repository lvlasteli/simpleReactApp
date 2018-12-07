import React from "react";

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            user: props.username
        }
    }
    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>Username: </p>
                {console.log(this.props.children)}
            </div>
        );
    }
}