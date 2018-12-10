import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";
import BrowserRouter from "react-router-dom/BrowserRouter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "default User",
            age: null
        }
    }
    changeUserName = (value) => {
        this.setState({
            userName: value.username,
            age: value.age

        });
    }
    render() {
        let homeCmp = (<Home setNewUsername={(values) =>this.changeUserName(values)} initialUserName={this.state.userName}/>)
        return(
            <BrowserRouter>
                <div className="container">
                    <Root user={this.state.userName}/>
                    <Route exact path="/" render={(props) => homeCmp} />
                    <Route path="/home" render={(props) => homeCmp}/>
                    <Route path="/user" render={(props) => 
                    <User {...props} username={this.state.userName} age={this.state.age} />}/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
