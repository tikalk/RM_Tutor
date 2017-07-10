/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import Result from './../Result';
import Results from './../Results';
import ResultsContainer from './../ResultsContainer';
import Search from './Search';
import axios from 'axios';

import TutorsTable from '../tutorsTable/tutorsTable';

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
            defaultResults: mock.defaultResults,
            search: '',
            searchResults: [],
        };

        this.searchOnChange = this.searchOnChange.bind(this);
        this.fetchString = this.fetchString.bind(this);
    }

    searchOnChange(e) {
        const value = e.target.value;
        console.log('value', value);

        this.setState({
            search: value
        });

        this.fetchString(value);
    }

    fetchString() {

        const root = 'https://jsonplaceholder.typicode.com';
        const that = this;
        axios.get(`${root}/posts/1`)
            .then(function (response) {
                console.log(response);

                that.setState({
                    searchResults: [
                        {
                            title: "Result From Server 1",
                            author: "Avihay",
                            rating: 5,
                            desc: "Slim.js is the best!"
                        },
                        {
                            title: "Result from server 2",
                            author: "Oren",
                            rating: 5,
                            desc: "The best socialist in Tikal,"
                        },
                    ]
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log('this.state', this.state);

        return (
            <div>
                <Search value={this.state.search}
                        searchFunc={this.searchOnChange}

                />
                <div>
                    {
                        this.state.searchResults.length === 0 ?
                            <div>
                                <ResultsContainer title="Popular">
                                    <Results data={this.state.defaultResults.popular}/>
                                </ResultsContainer>
                                <ResultsContainer title="Latest">
                                    <Results data={this.state.defaultResults.latest}/>
                                </ResultsContainer>
                            </div>

                            :
                            <div>
                                <Results data={this.state.searchResults} />
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;