import React, { Component } from 'react';

// imports CSS 
import './Content.css';

const iframeStyle = {
    width: '500px',
    height: '500px'
};

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesignModeOn: true,
            richTextContent: "Hallo hier ist ganz viel Text"
        };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.ifr.contentWindow.document.body.innerHTML = this.state.richTextContent;
    }

    updateRichTextContent() {
        let updateText = this.ifr.contentWindow.document.body.innerHTML;
        this.setState((state) => {
          return {richTextContent: updateText}
        });
        console.log("In updateRichTextContent", this.state.richTextContent);
      }
      
    handleClick() {
        
        
        const frame = document.getElementsByName ("richTextField")[0];
        if(this.state.isDesignModeOn) {
            frame.contentWindow.document.designMode = 'On';
        } else {
            frame.contentWindow.document.designMode = 'Off';
            this.updateRichTextContent();
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
                <button onClick={this.handleClick}>
                    {this.state.isDesignModeOn ? 'Edit' : 'Save'}
                </button>
                <br />
                <iframe name="richTextField"  style={iframeStyle} ref={(r) => this.ifr = r} />
            </div>
        );
    }
}