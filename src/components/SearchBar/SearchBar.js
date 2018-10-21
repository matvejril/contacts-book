import React from 'react';

import "./searchBar.css";

const SearchBar = ({searchContact=f=>f}) => {
    const handlerSearch = e => {
        const value = e.target.value.toLowerCase();
        searchContact(value)
    };
    return (
        <div className="search-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <label>Поиск:
                            <input type="text"
                                   onChange={handlerSearch}
                                   placeholder="По имени..."
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SearchBar;
