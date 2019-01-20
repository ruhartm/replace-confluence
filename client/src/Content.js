import React, { Component } from 'react';
// imports CSS 
import './Content.css';

const iframeStyle = {
    width: '500px',
    height: '500px'
};

const buttonStyle = {
    /* Edit savebutton right */
  };

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {isDesignModeOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        console.log("iife");
    }

    handleClick() {
        const frame = document.getElementsByName ("richtTextField")[0];
        if(this.state.isDesignModeOn) {
            frame.contentWindow.document.designMode = 'On';
        } else {
            frame.contentWindow.document.designMode = 'Off';
        }
        this.setState(prevState => ({
            isDesignModeOn: !prevState.isDesignModeOn
        }));
    }

    render() {
        return (
            <div className="main">
                <button title="bold"><i className="fa fa-bold"></i></button>
                <button title="italic"><i className="fa fa-italic"></i></button>
                <button onClick={this.handleClick} styple={buttonStyle}>
                    {this.state.isDesignModeOn ? 'Edit' : 'Save'}
                </button>
                <br />
                <iframe name="richtTextField"  style={iframeStyle}/>
            </div>
        );
    }
}