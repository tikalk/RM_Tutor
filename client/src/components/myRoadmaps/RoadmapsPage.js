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
            courses: mock,
            filter: ''
        };

        this.filterChange = this.filterChange.bind(this);
    }

    filterChange(e) {
        const val = e.target.value;

        this.setState({
            filter: val
        });
    }

    render() {
        console.log('this.state', this.state);
        const data = this.state.courses;
        const filteredData = data.filter(o => o.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1);
        // console.log('filteredData', filteredData);

        return (
            <Card>
                <CardHeader
                    title="My Roadmaps"
                    avatar="https://www.placecage.com/c/128/128"
                />
                <CardMedia>
                    <div>
                        <input placeholder="Mighty Filter"
                               onChange={this.filterChange}
                        />
                    </div>
                    <div>Num Of entries goes here</div>
                </CardMedia>
                <CardMedia>
                    <div>
                        <RoadmapTable data={filteredData}/>
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