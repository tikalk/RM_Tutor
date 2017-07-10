/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';

const ResultContainer = (props) => {
    return (
        <div style={styles.container}>
            <h3 style={styles.h3}>{props.title}</h3>
            <div>
                {props.children}
            </div>
        </div>
    )
};

export default ResultContainer;

const styles = {
    container: {
        minWidth: '400px'
    },
    h3: {
        color: 'red',
        backgroundColor: 'gray'
    }
}