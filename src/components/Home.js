import React from "react";
import { UserLogin } from "../api/user_api";

export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: this.props.email,
            password: null
        };
    }
    onChange() {
        if(this.state.email && this.state.password) {
            //check user
            const data = {
                "email": this.state.email,
                "password": this.state.password
            }
            const message = UserLogin(data);
            message.then((result) => {
                console.log(result);
                if(result.message==="Authorization successful") {
                    alert("Good Job!");
                    this.props.setNewEmail(this.state);
                }
                else {
                    alert("Authentiaction Failed!");
                }
            });
            
        }
        else {
            alert("Email or Password can't be null");
        }
    }
    onEmailChange(data, index) {
        if(index) {
            this.setState({
                email: data.target.value
            });
        }
        else {
            this.setState({
                password: data.target.value
            });
        }   
    }
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <h3>Login Page</h3>
                    <label htmlFor="formUsernamet">Email</label>
                    <input type="text"
                     className="form-control"
                     onChange={(event) => this.onEmailChange(event, 1)}
                     placeholder="Can't be empty">
                     </input>
                </div>
                <div className="form-group">
                    <label htmlFor="formAge">Password</label>
                    <input type="text"
                    className="form-control"
                    onChange={(event) => this.onEmailChange(event, 0)}
                    placeholder="Can't be empty">
                    </input>
                </div>
                <button type="submit" className="btn btn-primary" onClick = {()=> this.onChange()}>Log in</button>
            </div>
        );
    }
}