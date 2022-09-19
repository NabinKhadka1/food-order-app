import React  from 'react';
import './Button.css';

const Button = props => {
    return <button type={props.type} {...props.input} >{props.input.label}</button>
};

export default Button;