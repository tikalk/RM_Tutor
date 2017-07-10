import React, { Component } from 'react';

class SearchBox extends Component {

    render() {
        return (
            <div class="SearchBox">
                <div class="SearchBox-header">
                    Search for Roadmaps
                </div>
                <input type="text" name="searchbox" />
                <button type="button"></button>
            </div>
        )
    }
}

export default SearchBox;
