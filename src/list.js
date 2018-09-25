import React from 'react';

const List = (props) => {
    const items = props.data.map((text, index) => {
        return <li>{index} : {text}</li>
    });

    return (
        <ul>
            {items}
        </ul>
    );
}

export default List;
