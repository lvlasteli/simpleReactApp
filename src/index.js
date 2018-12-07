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
            userName: "default User"
        }
    }
    changeUserName = (newname) => {
        this.setState({
            userName: newname
        });
    }
    render() {
        let homeCmp = (<Home setNewUsername={(newname) =>this.changeUserName(newname)}
        />)
        return(
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Root user={this.state.userName}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <Route exact path="/" render={(props) => homeCmp} />
                            <Route path="/home" render={(props) => homeCmp}/>
                            <Route path="/user" render={(props) => <User {...props} username={this.state.userName} />}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
