import React from 'react';
import  '../css/home.css';

var fondo1 = {
    backgroundImage:"url(" + process.env.PUBLIC_URL + "/img/home2.jpg)"
};


var fondo2 = {
    backgroundImage:"url(" + process.env.PUBLIC_URL + "/img/home3.jpg)"
};

export default class Home extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding">
                <div className="item-wrap" style={fondo1}></div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 no-padding">
                    <div className="item-wrap" style={fondo2}></div>
                </div>
            </div>
        );
    }
}