import React, { Component } from 'react';
import ReactDOM from "react-dom";

import './Content.css';

const iframeStyle = {
    width: '500px',
    height: '500px'
};


export class Content extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div className="main">
                <button title="bold"><i className="fa fa-bold"></i></button>
                <button title="italic"><i className="fa fa-italic"></i></button>
                <br />
                <iframe name="richtTextField" style={iframeStyle} />
                <div ref={this.myRef} />

            </div>
        );
    }
}