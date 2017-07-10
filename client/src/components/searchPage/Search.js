/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';

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
                 <input value={this.props.value}
                        onChange={this.props.searchFunc}
                        placeholder="Search" />
             </div>
        )
    }
}

export default Search;