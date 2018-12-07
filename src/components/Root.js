import React from "react";

import {Header} from "./Header";

export class Root extends React.Component {
    constructor(props) {
        super();
        this.state = {
            userName: "Lucija"
        }
    }
    render() {
        const children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                userName: this.state.userName});
          });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <Header />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10">
                        {children}
                        {
                            //console.log(this.props.children)
                        }
                    </div>
                </div>
            </div>
        );
    }
}