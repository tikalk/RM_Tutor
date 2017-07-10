/**
 * Created by alex on 10/07/2017.
 */
import React from 'react';

const Result = (props) => {
    const {title = "Untitled", author = "Moshe Ben Kipod", rating = 4, desc = "This is a basic shit"} = props;

    return (
        <div>
            <div className="title" style={styles.title}>{title}</div>
            <div className="author" style={styles.author}>{author}</div>
            <div className="rating" style={styles.rating}>{rating}</div>
            <div className="desc" style={styles.desc}>{desc}</div>
        </div>
    )
};

export default Result;

const styles = {
    container: {

    },
    title: {
        color: 'blue',
        fontSize: '20px'
    },
    author: {
        color: 'green',
        fontSize: '12px'
    },
    rating: {

    },
    desc: {

    }
}