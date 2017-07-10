/**
 * Created by alex on 10/07/2017.
 */

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default (props) => {
    const itemClick = (type) => () => {
        props.openView(type);
        console.log('type', type);

        props.openFunc(true)
    }

    return (
        <div>
            <Drawer open={props.open}
                    onRequestChange={props.openFunc}
                    docked={false}>
                <MenuItem  onClick={itemClick('search')}>Search Roadmaps</MenuItem>
                <MenuItem  onClick={itemClick('roadmaps')}>My Roadmaps</MenuItem>
                <MenuItem  onClick={itemClick('trainings')}>My Trainings</MenuItem>
            </Drawer>
        </div>
    )
}