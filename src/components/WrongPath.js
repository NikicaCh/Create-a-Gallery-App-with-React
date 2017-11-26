import React, { Component } from 'react';
import Spinner from 'react-spinkit';

class WrongPath extends Component {

    componentDidMount() {
        setTimeout( function()  {this.redirect()}.bind(this) , 5000);
    }
    redirect = () => {
        let path="/";
        this.props.history.push(path); 
    }
    render() {
        return (
            <div>
                <h1>This path does not exist.</h1>
                <h3>Redirecting you home (in 5 sec.)</h3>
                <Spinner fadeIn='none' name="ball-beat" />
            </div>
        );
    };
    
}

export default WrongPath;