/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import Result from './../Result';
import Results from './../Results';
import Search from './Search';

const mock = {
    defaultResults: {
        popular: [
            {
                title: "Title 3",
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
                                <Results data={this.state.defaultResults.popular}/>
                                <h3>Latest</h3>
                                <Results data={this.state.defaultResults.latest}/>
                            </div>

                            :
                            'Search Results'
                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;