

import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const columns = [{
    Header: 'Title',
    accessor: 'title'
}, {
    Header: '# of students',
    accessor: 'numberOfStudents'
},{
    Header: 'Graduated',
    accessor: 'graduates'
},
    {
    Header: 'Rating',
    accessor: 'rating',
    Cell: props =>  {
        console.log('star props', props)
        return <span><t-stars value={props.value} ></t-stars></span>;
    }
},];

class RoadmapTable extends React.Component {


    constructor(props) {

        super();
        this.props = props
    }

    render(){
        if (!this.props.data) {
            return '';
        }
        console.log('courses table', this.props);
        return  <ReactTable
            data={this.props.data}
            columns={columns}
        />
    }
}

export default RoadmapTable;