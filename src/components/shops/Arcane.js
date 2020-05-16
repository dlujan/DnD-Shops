import React, { Component } from 'react';
import SingleItem from '../SingleItem';

import '../../App.css';

export default class Arcane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[9]
        }
    }
    render() {
        const weapons = this.state.shop.inventory[0].weapons;
        const adventuring_gear = this.state.shop.inventory[1].adventuring_gear;
        const tools = this.state.shop.inventory[2].tools;
        const magic_items = this.state.shop.inventory[3].magic_items;
        const services = this.state.shop.inventory[4].services;

        const simpleMW = weapons[0].items;
        return (
            <div>
                <h2>{this.state.shop.name}</h2>
                <div className="grid-container">
                    {simpleMW.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-sword ra-2x"/>
                        )
                    })}
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
                    {magic_items.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-scroll-unfurled ra-2x"/>
                        )
                    })}
                    {services.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-hand ra-2x"/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
