import React from "react";


export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.username,
            age: null
        };
    }
    onChange() {
        if(this.state.username) {
            this.props.setNewUsername(this.state);
        }
        else {
            alert("Username can't be null");
        }
    }
    onUserNameChange(data, index) {
        if(index) {
            this.setState({
                username: data.target.value
            });
        }
        else {
            this.setState({
                age: data.target.value
            });
        }
        
    }
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <h3>Home</h3>
                    <label htmlFor="formUsernamet">Username</label>
                    <input type="text"
                     className="form-control"
                     onChange={(event) => this.onUserNameChange(event, 1)}
                     placeholder="Can't be empty">
                     </input>
                </div>
                <div className="form-group">
                    <label htmlFor="formAge">Age</label>
                    <input type="text"
                    className="form-control"
                    onChange={(event) => this.onUserNameChange(event, 0)}>
                    </input>
                </div>
                <button type="submit" className="btn btn-primary" onClick = {()=> this.onChange()}>Set Username</button>
            </div>
        );
    }
}