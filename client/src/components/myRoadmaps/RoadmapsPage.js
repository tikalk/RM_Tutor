/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RoadmapTable from './../roadmapTable/RoadmapTable';

const mock = [
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
]

class RoadmapsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: 10,
            courses: []
        };
    }

    render() {
        console.log('this.state', this.state);

        return (
            <Card>
                <CardHeader
                    title="My Roadmaps"
                    avatar="https://www.placecage.com/c/128/128"
                />
                <CardMedia>
                    <div>Filter Goes Here</div>
                    <div>Num Of entries goes here</div>
                </CardMedia>
                <CardMedia>
                    <div>
                        <RoadmapTable data={mock} />
                    </div>
                </CardMedia>
            </Card>

        )
    }
}

export default RoadmapsPage;

const styles = {
    defaultResults: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
};