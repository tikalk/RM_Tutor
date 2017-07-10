import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const columns = [{
    Header: 'Title',
    accessor: 'title'
}, {
    Header: 'Description',
    accessor: 'desc'
},{
    Header: 'Rating',
    accessor: 'rating'
},{
    Header: 'Author',
    accessor: 'author'
}];

class CoursesTable extends React.Component {

    props: any;
    constructor(props) {

        super();
        this.props = props
    }

    render(){
        console.log('courses table', this.props);
       return  <ReactTable
            data={this.props.data}
            columns={columns}
        />
    }
}

export default CoursesTable;