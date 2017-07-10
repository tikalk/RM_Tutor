import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './components/Result';

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
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React!!!!</h2>
                    <Moshe name="hskjdfhkjsdhfsdkjhfkhjk hsjkh kskjhsfdjks fisfk "/>
                </div>
                {data.map((obj, k) => {
                    return (
                        <Result title={obj.title}
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


