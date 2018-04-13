import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class AccountsUIWrapper extends Component {
    
    componentDidMount(){
        // Use meteor blaze to render login button
        this.view = Blaze.render(Template.loginButtons, 
            ReactDom.findDOMNode(this.refs.container
        ));
    }

    componentWillUnmount(){
        // clean up Blaze view
        Blaze.remove(this.view);
    }
    
    render() { 
        return ( 
            <span ref="container" />
         )
    }
}
 
export default AccountsUIWrapper;