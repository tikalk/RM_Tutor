/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        console.log('Search props', this.props);

        return (
            <div class="SearchBox">
                <div class="SearchBox-header">
                    Search for Roadmaps
                </div>
                <input value={this.props.value}
                       onChange={this.props.searchFunc}
                       placeholder="Search" />
                <button type="button">Search</button>
            </div>
        )
    }
}

export default Search;
