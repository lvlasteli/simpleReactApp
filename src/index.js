import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import { User } from "./components/User";
import BrowserRouter from "react-router-dom/BrowserRouter";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    {/* this is not how you declare a parent <Route path="/" component={Root}/> */}
                    <Root>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/user" component={User}/>
                    </Root>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
