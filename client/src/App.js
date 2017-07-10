import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './components/Result';
import SearchPage from './components/searchPage/SearchPage';
import AppBar from 'material-ui/AppBar';
import Drawer from './components/Drawer';
import WelcomeScreen from './components/WelcomeScreen';

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
    constructor(props) {
        super();

        this.state = {
            drawerOpened: false,
            view: 'welcome'
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.openView = this.openView.bind(this);
    }

    toggleDrawer() {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        })
    }

    openView(type) {
        console.log('in App type', type);

        this.setState({
            view: type
        });
    }

    mainView(type) {
        switch (type) {
            case 'welcome':
                return <WelcomeScreen />
            case 'search':
                return <SearchPage />
            case 'roadmaps':
                return <WelcomeScreen />
            case 'trainings':
                return <WelcomeScreen />
            default:
                return <WelcomeScreen/>
        }
    }

    render() {
        const data = mock;

        return (
            <div className="App">
                <AppBar title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.toggleDrawer}
                />
                <Drawer open={this.state.drawerOpened}
                        openView={this.openView}
                        openFunc={this.toggleDrawer}
                />
                {this.mainView(this.state.view)}
            </div>
        );
    }
}

export default App;

const Moshe = (props) => (
    <div>{props.name}</div>
);


