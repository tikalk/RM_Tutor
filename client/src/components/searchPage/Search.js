/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import TextField from 'material-ui/TextField';

class Search extends React.Component {
    constructor(props) {
        super();

        this.state = {

        }
    }

    render() {
        console.log('Search props', this.props);

        return (
             <div>
                 {/*<input value={this.props.value}*/}
                        {/*onChange={this.props.searchFunc}*/}
                        {/*placeholder="Search" />*/}
                 <TextField
                     hintText="Search Roadmaps"
                     fullWidth={true}
                     onChange={this.props.searchFunc}
                     value={this.props.value}
                 />
             </div>
        )
    }
}

export default Search;