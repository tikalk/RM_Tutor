/**
 * Created by alex on 10/07/2017.
 */
import React from 'react';

const WelcomeScreen = (props) => {
    const {title = "Untitled", author = "Moshe Ben Kipud", rating = 4, desc = "This is a basic shit"} = props;

    return (
        <div>
            <h1>Welcome to your fancy Roadmap Dashboard</h1>
        </div>
    )
};

export default WelcomeScreen;

