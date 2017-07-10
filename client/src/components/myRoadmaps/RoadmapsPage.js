/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RoadmapTable from './../roadmapTable/RoadmapTable';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

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

    handleChange = (event, index, value) => this.setState({entries: value});


    render() {
        console.log('this.state', this.state);
        const data = this.state.courses;
        const filteredData = data.filter(o => o.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1).slice(0, this.state.entries);
        // console.log('filteredData', filteredData);

        return (
            <Card>
                <CardHeader
                    title="My Roadmaps"
                    avatar="https://www.placecage.com/c/128/128"
                />
                <CardMedia>
                    <div className="filterRow" style={styles.filterRow}>
                        <TextField hintText="Mighty Filter"
                               onChange={this.filterChange}
                        />
                        <SelectField floatingLabelText="Number of Entries"
                                     value={this.state.entries}
                                     onChange={this.handleChange}
                        >
                            {[5, 10, 20, 100].map((v, k) => {
                                return (
                                    <MenuItem key={k} value={v} primaryText={v} />
                                )
                            })}
                        </SelectField>
                    </div>
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
    filterRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};