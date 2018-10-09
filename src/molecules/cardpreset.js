import React from 'react';
import PrimaryButton from '../atoms/primarybutton';

const CardPreset = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <PrimaryButton label={props.linkLabel} handleClick={props.handleClick}></PrimaryButton>
        </div>
    )
}

export default CardPreset