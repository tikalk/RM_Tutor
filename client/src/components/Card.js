/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RoadmapTable from "./roadmapTable/RoadmapTable";

class _Card extends React.Component {
    constructor(props) {
        super();

        this.state = {
            entries: 10,
            data: props.data,
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

    renderTable(data) {
        switch (this.props.tableType) {
            case 'roadmaps': return <RoadmapTable data={data}/>
            case 'students': return <RoadmapTable data={data}/>
        }
    }

    render() {
        const data = this.state.data;
        const filteredData = data.filter(o => o.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1).slice(0, this.state.entries);

        return (
            <Card>
                <CardHeader
                    title={this.props.title}
                    avatar={this.props.avatar}
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
                        {/*<RoadmapTable data={filteredData}/>*/}
                        {this.renderTable(filteredData)}
                    </div>
                </CardMedia>
            </Card>

        )
    }
}
export default _Card;

const styles = {
    filterRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};