import React from "react";

import {Header} from "./Header";

export class Root extends React.Component {

    render() {
        return (
            <Header user={this.props.user}/>
        );
    }
}