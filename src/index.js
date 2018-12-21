import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";
import {Product} from "./components/Products";
import BrowserRouter from "react-router-dom/BrowserRouter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "Not Logged in"
        }
    }
    changeEmail = (value) => {
        this.setState({
            email: value.email
        });
    }
    render() {
        let homeCmp = (<Home setNewEmail={(values) =>this.changeEmail(values)} initialEmail={this.state.email}/>)
        return(
            <BrowserRouter>
                <div className="container">
                    <Root email={this.state.email}/>
                    <Route exact path="/" render={(props) => homeCmp} />
                    <Route path="/home" render={(props) => homeCmp}/>
                    <Route path="/user" render={(props) => 
                    <User {...props} email={this.state.email}/>}/>
                    <Route path="/products" render={(props) => <Product/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
