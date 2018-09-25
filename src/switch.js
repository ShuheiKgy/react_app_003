import React, {Component} from 'react';

class Switch extends Component {

    constructor() {
        super();
        this.state = {
            power: false
        };
    }

    render() {
        return (
            <p>
                {this.state.power ? 'ON' : 'OFF' }
            </p>
        );
    }
}

export default Switch;