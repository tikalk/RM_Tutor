/**
 * Created by alex on 10/07/2017.
 */
import React from 'react';

const Result = (props) => {
    const {title = "Untitled", author = "Moshe Ben Kipod", rating = 4, desc = "This is a basic shit"} = props;

    return (
        <div>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className="rating">{rating}</div>
            <div className="desc">{desc}</div>
        </div>
    )
};

export default Result;
