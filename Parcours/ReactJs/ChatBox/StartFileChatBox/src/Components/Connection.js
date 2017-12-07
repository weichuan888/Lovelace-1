import React from 'react';
import { render } from 'react-dom';

class Connection extends React.Component {
    render() { 
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input type="text" placeholder="Pseudo" required />
                    <button type="submit">{this.props.jesaispas}</button>
                </form> 
            </div>     
        );
    }
}

export default Connection;