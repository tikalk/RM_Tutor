
import injectTapEventPlugin from 'react-tap-event-plugin';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Result from './../src/components/Result';
import WelcomeScreen from './../src/components/WelcomeScreen';
import SearchPage from './../src/components/searchPage/SearchPage';
import App from './../src/App';
import CoursePage from './../src/components/myRoadmaps/CoursePage';
import RoadmapsPage from './../src/components/myRoadmaps/RoadmapsPage';

injectTapEventPlugin();


import 'slim-js'
require('webco/components/t-stars')

const wrapModule = (module) => (
    <MuiThemeProvider>
        React.cloneElement(module)
    </MuiThemeProvider>
);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Welcome Screen', module)
    .add('normal', () => <WelcomeScreen />);

storiesOf('Search Roadmaps', module)
    .add('normal', () =>  <MuiThemeProvider><SearchPage /></MuiThemeProvider>);

storiesOf('Result', module)
    .add('Wide', () => <MuiThemeProvider><Result title="Title" author="Author" rating="4" desc="Lorem Ipsum...." /></MuiThemeProvider>)
    .add('Narrow', () =>  <MuiThemeProvider><Result title="Title" author="Author" rating="4" desc="Lorem Ipsum...." /></MuiThemeProvider>)

storiesOf('App', module)
    .add('Normal', () =>  <MuiThemeProvider><App /></MuiThemeProvider>)

storiesOf('Course Page', module)
    .add('Normal', () =>  <MuiThemeProvider><CoursePage data={studentsMock}/></MuiThemeProvider>)

storiesOf('Roadmaps Page', module)
    .add('Normal', () =>  <MuiThemeProvider><RoadmapsPage data={roadmapsMock}/></MuiThemeProvider>)


const studentsMock = [
    {
        name: 'Moshe',
        progress: '3/5'
    },
    {
        name: 'Dany',
        progress: '8/9'
    }
];

const roadmapsMock = [
    {
        title: "Title 3",
        numberOfStudents: 5,
        rating: 5,
        graduates: 17
    },
    {
        title: "Work 1",
        numberOfStudents: 5,
        rating: 5,
        graduates: 17
    },
    {
        title: "Hell 1",
        numberOfStudents: 5,
        rating: 5,
        graduates: 17
    },
    {
        title: "Cookie 1",
        numberOfStudents: 5,
        rating: 5,
        graduates: 17
    }
];
