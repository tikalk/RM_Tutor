/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Card from './../Card';

const mock = [
    {
        name: 'Moshe',
        progress: '3/5'
    },
    {
        name: 'Dany',
        progress: '8/9'
    }
];

class CoursePage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            entries: 10,
            students: props.data || mock,
            filter: ''
        };

    }

    render() {
        const data = this.state.students;
        return (
            <Card title="My Students"
                  avatar="https://www.placecage.com/c/128/128"
                  tableType="students"
                  data={data}
            />
        )
    }
}
export default CoursePage;

const styles = {
    filterRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};