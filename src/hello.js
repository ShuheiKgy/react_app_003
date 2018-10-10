import React, {Component} from 'react';
import styles from './hello.css';

function Children1() {
    return <p className={styles.hello}>1: Hello, world!</p>
}

const Children2 = () => {
    return <p>2: Hello, world!</p>
}

const Children3 = () => <p>3: Hello, world!</p>

class Hello extends Component {
    
    render() {
        let name = this.props.name;
        return (
        <div>
            <p>Hello, my name is {name}.</p>
            <Children1 />
            <Children2 />
            <Children3 />
        </div>
        )
    }
}

export default Hello;