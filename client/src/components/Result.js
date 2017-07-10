/**
 * Created by alex on 10/07/2017.
 */
import React from 'react';

class Result extends React.Component {

    componentDidMount() {
        this.stars.addEventListener("valueChanged", this.handleStarChange);
    }

    handleStarChange = (event) => {
        console.log("Star changed:", event.detail);
    }

    render() {
        const {title = "Untitled", author = "N/A", rating = 4, desc = "N/A"} = this.props;

        return (
            <div>
                <div className="title" style={styles.title}>{title}</div>
                <div className="author" style={styles.author}>{author}</div>
                <t-stars ref={el => this.stars = el} value={rating} style={styles.rating}></t-stars>
                <div className="desc" style={styles.desc}>{desc}</div>
            </div>
        )
    }
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
