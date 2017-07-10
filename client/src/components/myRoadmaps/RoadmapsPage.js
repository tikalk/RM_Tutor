/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import axios from 'axios';
// import {_Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/_Card';
import RoadmapTable from './../roadmapTable/RoadmapTable';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Card from './../Card';

const mock = [
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
]

class RoadmapsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: 10,
            courses: props.data || mock,
            filter: ''
        };

    }


    render() {
        console.log('this.state', this.state);
        const data = this.state.courses;

        return (
            <Card title="My Roadmaps"
                   avatar="https://www.placecage.com/c/128/128"
                   tableType="roadmaps"
                   data={data}
            />
        )
    }
}

export default RoadmapsPage;

const styles = {
    filterRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};