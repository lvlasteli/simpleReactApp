import React from "react";

export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.username 
        }
    }
    onChange() {
        this.props.setnewusername(this.state.username);
    }
    onUserNameChange(newUserName) {
        this.setState({
            username: newUserName.target.value
        });
    }
    render() {
        return (
            <div>
                <h3>Home</h3>
                <p>Insert username:</p>
                <input type="text" onChange={(event) => this.onUserNameChange(event)}/>
                <button className="btn btn-primary" onClick= {()=> this.onChange()}>Change username</button>
            </div>
        );
    }
}