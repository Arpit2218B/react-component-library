import React from 'react';
import '../../style/color.css';
import './styles.css';
import classNames from 'classnames';

const Avatar = ({ src, label, size, withBadge }) => {
    const sLabel = label ? label.toUpperCase().charAt(0) : 'U';

    return(
        <div className="avatar">
            <div className={`avatar__container ${size}`} >
                {src ? (<img src={src} />) : (<p className={`label__${size}`}>{sLabel}</p>)}
            </div>
            {withBadge ? (<div className={`badge badge__${size}`}></div>) : null}
        </div>
    );
}

export default Avatar;
