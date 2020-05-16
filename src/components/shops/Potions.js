import React, { Component } from 'react';
import SingleItem from '../SingleItem';

import '../../App.css';

export default class Potions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[3]
        }
    }
    render() {
        const adventuring_gear = this.state.shop.inventory[0].adventuring_gear;
        const alchemy_ingredients = this.state.shop.inventory[1].alchemy_ingredients;
        const tools = this.state.shop.inventory[2].tools;
        const magic_items = this.state.shop.inventory[3].magic_items;
        return (
            <div>
                <h2>{this.state.shop.name}</h2>
                <div className="grid-container">
                    {adventuring_gear.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-lantern-flame ra-2x"/>
                        )
                    })}
                    {alchemy_ingredients.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-super-mushroom ra-2x"/>
                        )
                    })}
                    {tools.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-mining-diamonds ra-2x"/>
                        )
                    })}
                    {magic_items.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-round-bottom-flask ra-2x"/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
