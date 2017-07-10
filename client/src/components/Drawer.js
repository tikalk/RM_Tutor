/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default (props) => {
    return (
        <div>
            <Drawer open={props.open}>
                <MenuItem onClick={props.openView('search')}>Search Roadmaps</MenuItem>
                <MenuItem onClick={props.openView('roadmaps')}>My Roadmaps</MenuItem>
                <MenuItem onClick={props.openView('trainings')}>My Trainings</MenuItem>
            </Drawer>
        </div>
    )
}