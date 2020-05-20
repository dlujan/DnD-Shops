import React, { Component } from 'react';
import SingleItem from '../SingleItem';

import '../../App.css';

export default class Leatherworker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[4]
        }
    }
    render() {
        const armor = this.state.shop.inventory[0].armor;
        const weapons = this.state.shop.inventory[1].weapons;
        const adventuring_gear = this.state.shop.inventory[2].adventuring_gear;
        const tools = this.state.shop.inventory[3].tools;

        const lightArmor = armor[0].items;
        const mediumArmor = armor[1].items;
        const shield = armor[2].items;

        const simpleRW = weapons[0].items;
        return (
            <div>
                <div className="title-container">
                    <h1>{this.state.shop.name}</h1>
                </div>
                <div className="grid-container">
                    {lightArmor.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-cracked-helm ra-2x"/>
                        )
                    })}
                    {mediumArmor.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-helmet ra-2x"/>
                        )
                    })}
                    {shield.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-round-shield ra-2x"/>
                        )
                    })}
                    {simpleRW.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-boomerang ra-2x"/>
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
                </div>
            </div>
        )
    }
}
