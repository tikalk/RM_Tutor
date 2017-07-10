/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import Result from './../Result';

const mock = {
    defaultResults: {
        popular: [
            {
                title: "Title 2",
                author: "Oren",
                rating: 5,
                desc: "Description"
            },
            {
                title: "Title 1",
                author: "Oren",
                rating: 5,
                desc: "Description"
            },
            {
                title: "Title 1",
                author: "Oren",
                rating: 5,
                desc: "Description"
            },
            {
                title: "Title 1",
                author: "Oren",
                rating: 5,
                desc: "Description"
            }
        ],
        latest: [
            {
                title: "Title 2",
                author: "Oren",
                rating: 5,
                desc: "Description"
            },
            {
                title: "Title 1",
                author: "Oren",
                rating: 5,
                desc: "Description"
            },
            {
                title: "Title 1",
                author: "Oren",
                rating: 5,
                desc: "Description"
            },
            {
                title: "Title 1",
                author: "Oren",
                rating: 5,
                desc: "Description"
            }
        ]
    }
};

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'default', // can be search results as well
            defaultResults: mock.defaultResults
        }
    }

    render() {
        console.log('this.state', this.state);

        return (
            <div>
                <div>Search Component Goes Here</div>
                <div>
                    {
                        this.state.view === 'default' ?
                            <div>
                                {
                                    this.state.defaultResults.popular.map((obj, k) => {
                                        const {title, author, rating, desc} = obj;
                                        return (
                                            <Result title={title}
                                                    author={author}
                                                    rating={rating}
                                                    desc={desc}
                                                    key={k}
                                            />
                                        )
                                    })
                                }
                            </div>
                            :
                            <div>
                                {
                                    this.state.defaultResults.latest.map((obj, k) => {
                                        const {title, author, rating, desc} = obj;
                                        return (
                                            <Result title={title}
                                                    author={author}
                                                    rating={rating}
                                                    desc={desc}
                                                    key={k}
                                            />
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;