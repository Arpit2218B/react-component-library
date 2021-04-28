import React from 'react';
import '../../style/color.css';
import './styles.css';
import classNames from 'classnames';

const Button = ({ text, variant, type, loading }) => {
    let btnClasses = classNames('btn', 
                                {'btn-error': type=='error'},
                                {'btn-ghost': variant=='ghost'}, 
                                {'btn-link': variant=='link'},
                    );
    return(
        <button className={btnClasses}>
            {loading ? 'Loading...' : text}
        </button>
    );
}

export default Button;
