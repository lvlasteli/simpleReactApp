import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import { User } from "./components/User";
import BrowserRouter from "react-router-dom/BrowserRouter";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Lucija"
        }
    }
    ChangeUserName(newname) {
        console.log(newname);
        this.setState({
            userName: newname
        });
    }
    render() {
        return(
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Root/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Route exact path="/" component={Home} />
                            <Route path="/home" component={() => <Home username={this.state.userName} setnewusername={(e)=>this.changeUsername(e)} />}/>
                            <Route path="/user" component={() => <User username={this.state.userName} />}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
