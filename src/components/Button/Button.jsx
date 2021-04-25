import React from 'react';
import '../../style/color.css';
import './styles.css';
var classNames = require('classnames');

const Button = ({ text, ghost, link }) => {
    let btnClasses = classNames('btn', {'btn-ghost': ghost}, {'btn-link': link});
    return(
        <button className={btnClasses}>{text}</button>
    );
}

export default Button;
