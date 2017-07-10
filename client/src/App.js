import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


const mock = [
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
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React!!!!</h2>
                    <Moshe name="Oren"/>
                </div>
                {data.map((obj, k) => {
                    return (
                        <SearchResults title={obj.title}
                                       author={obj.author}
                                       rating={obj.rating}
                                       desc={obj.desc}
                                       key={k}
                        />
                    )
                })
                }

            </div>
        );
    }
}

export default App;

const Moshe = (props) => (
    <div>{props.name}</div>
);

const SearchResults = (props) => {
    const {title = "Untitled", author = "Moshe Ben Kipud", rating = 4, desc = "This is a basic shit"} = props;

    return (
        <div>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className="rating">{rating}</div>
            <div className="desc">{desc}</div>
        </div>
    )
}

