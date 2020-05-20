import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import SingleItem from '../SingleItem';

import '../../App.css';

export default class General extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[6]
        }
    }
    render() {
        const adventuring_gear = this.state.shop.inventory[0].adventuring_gear;
        const tools = this.state.shop.inventory[1].tools;
        return (
            <div>
                <div className="title-container">
                    <h1>{this.state.shop.name}</h1>
                </div>
                <div className="grid-container">
                    {adventuring_gear.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-lantern-flame ra-2x"/>
                        )
                    })}
                    {tools.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-mining-diamonds ra-2x"/>
                        )
                    })}
                </div>
            </div>
        )
    }
}