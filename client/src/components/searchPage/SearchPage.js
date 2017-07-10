/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'default' // can be search results as well
        }
    }

    render() {
        return (
            <div>
                <div>Search Component Goes Here</div>
                <div>
                    {
                        this.state.view === 'default' ? 'Default Screen' : 'Search Results'
                    }
                </div>
            </div>
        )
    }
}

export default SearchPage;