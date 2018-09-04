import React from "react";

import Header from './Header';

export default class Root extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header />
                </div>
                <hr/>    
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}