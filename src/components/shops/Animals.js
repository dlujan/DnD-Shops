import React, { Component } from 'react';
import SingleItem from '../SingleItem';

import '../../App.css';

export default class Animals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[10]
        }
    }
    render() {
        const mounts = this.state.shop.inventory[0].mounts;
        const tackanddrawnvehicles = this.state.shop.inventory[1].tackanddrawnvehicles;
        return (
            <div>
                <div className="title-container">
                    <h1>{this.state.shop.name}</h1>
                </div>
                <div className="grid-container">
                    {mounts.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-horseshoe ra-2x"/>
                        )
                    })}
                    {tackanddrawnvehicles.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-mine-wagon ra-2x"/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
