import React, { useState } from 'react';
import './styles.css';
import search_logo from './search.svg';
import close_logo from './close.svg';
import classNames from 'classnames';

const Search = ({ iconRight }) => {

    const [text, setText] = useState('')

    const searchClasses = classNames("search-field",
                                    {"search-icon-right": iconRight}
                                    )
    
    const searchResultClasses = classNames("search-results",
                                    {"search-results-show": text.length > 0}
                                    )

    return (
        <div>
            <div className={searchClasses}>
                {text.length == 0 ? 
                    (<img src={search_logo} className="search-icon" />) : 
                    (<img src={close_logo} onClick={() => setText('')} className="search-icon search-close" />)
                }
                <input 
                value={text} 
                onChange={e => setText(e.target.value)} 
                className="search-text" 
                placeholder="Enter search text" 
                />
            </div>
            <div className={searchResultClasses}>
                <div className="search-results-item">result 1</div>
                <div className="search-results-item">result 2</div>
            </div>
        </div>
    );
}

export default Search;