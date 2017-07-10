import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './components/Result';
import SearchPage from './components/searchPage/SearchPage';

const mock = [
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
];

class App extends Component {

    render() {
        const data = mock;

        return (
            <div className="App">
                <SearchPage/>
            </div>
        );
    }
}

export default App;

const Moshe = (props) => (
    <div>{props.name}</div>
);


