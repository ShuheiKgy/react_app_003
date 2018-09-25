import React, {Component} from 'react';

class Button extends Component {

    constructor() {
        super();
    }

    handleClick() {
        alert('button click!!');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>BUTTON</button>
            </div>
        );
    }
}

export default Button;