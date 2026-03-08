import React from 'react';

const SearchPopup = () => {
    return (
        <div className="search-popup">
            <button className="close-search style-two"><span className="flaticon-multiply"><i className="far fa-times-circle"></i></span></button>
            <button className="close-search"><i className="fa-light fa-arrow-up"></i></button>
            <form method="post" action="#">
                <div className="form-group">
                    <input type="search" name="search-field" defaultValue="" placeholder="Search Here" required="" />
                    <button type="submit"><i className="fal fa-search"></i></button>
                </div>
            </form>
        </div>
    );
};

export default SearchPopup;
