import React, { Component } from 'react';
import SingleItem from '../SingleItem';

import '../../App.css';

export default class Fletcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[7]
        }
    }
    render() {
        const weapons = this.state.shop.inventory[0].weapons;
        const adventuring_gear = this.state.shop.inventory[1].adventuring_gear;

        const simpleRW = weapons[0].items;
        const martialRW = weapons[1].items;
        return (
            <div>
                <div className="title-container">
                    <h1>{this.state.shop.name}</h1>
                </div>
                <div className="grid-container">
                    {simpleRW.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-boomerang ra-2x"/>
                        )
                    })}
                    {martialRW.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-crossbow ra-2x"/>
                        )
                    })}
                    {adventuring_gear.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-arrow-cluster ra-2x"/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
