/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import Result from './../Result';
import Search from './Search';
import CoursesTable from '../coursesTable/coursesTable';

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
                <Search/>
                <div>
                    {
                        this.state.view === 'default' ?
                            <div>
                                <h3>Popular</h3>
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
                                <h3>Latest</h3>
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

                            :
                            'Search Results'
                    }
                    <CoursesTable data={this.state.defaultResults.latest}/>
                </div>
            </div>
        )
    }
}

export default SearchPage;