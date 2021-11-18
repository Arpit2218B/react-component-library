import React from 'react';
import '../../style/color.css';
import './styles.css';

const AvatarGroup = ({ users, size }) => {

    let userArray = [...users].slice(0, 3);
    let leftOutUser = users.length - userArray.length;

    return(
        <div className="container">

            {
                leftOutUser > 0 ? (<div className="avatar">
                    <div className={`avatar__container ${size}`} >
                        <p className={`label__${size}`}>+{leftOutUser}</p>)
                    </div>
                </div>) : null
            }

            {
                userArray.map((user, index) => {
                    const sLabel = user.label ? user.label.toUpperCase().charAt(0) : 'U';
                    return(
                        <div className="avatar">
                            <div className={`avatar__container ${size}`} >
                                {user.src ? (<img src={user.src} />) : (<p className={`label__${size}`}>{sLabel}</p>)}
                            </div>
                        </div>
                    )
                })
            }
            {/* <div className="avatar">
                <div className={`avatar__container ${size}`} >
                    {src ? (<img src={src} />) : (<p className={`label__${size}`}>{sLabel}</p>)}
                </div>
            </div>
            <div className="avatar">
                <div className={`avatar__container ${size}`} >
                    {src ? (<img src={src} />) : (<p className={`label__${size}`}>{sLabel}</p>)}
                </div>
            </div>
            <div className="avatar">
                <div className={`avatar__container ${size}`} >
                    {src ? (<img src={src} />) : (<p className={`label__${size}`}>{sLabel}</p>)}
                </div>
            </div> */}
        </div>
    );
}

export default AvatarGroup;
