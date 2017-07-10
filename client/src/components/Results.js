/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import Result from './Result';

const Results = (props) => {
    const {data} = props;
    return (
        <div>
            {data.map((obj, k) => {
                    const {title, author, rating, desc} = obj;
                    return (
                        <Result title={title}
                                author={author}
                                rating={rating}
                                desc={desc}
                                key={k}
                        />
                    )
                }
            )}
        </div>
    )
};

export default Results;