import React, { Component } from 'react';
import SingleItem from '../SingleItem';

import '../../App.css';

export default class Blacksmith extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[8]
        }
    }
    render() {
        const armor = this.state.shop.inventory[0].armor;
        const weapons = this.state.shop.inventory[1].weapons;
        const adventuring_gear = this.state.shop.inventory[2].adventuring_gear;
        const tools = this.state.shop.inventory[3].tools;

        const lightArmor = armor[0].items;
        const mediumArmor = armor[1].items;
        const heavyArmor = armor[2].items;
        const shield = armor[3].items;

        const simpleMW = weapons[0].items;
        const martialMW = weapons[1].items;
        return (
            <div>
                <h2>{this.state.shop.name}</h2>
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
                    {heavyArmor.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-knight-helmet ra-2x"/>
                        )
                    })}
                    {shield.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-round-shield ra-2x"/>
                        )
                    })}
                    {simpleMW.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-sword ra-2x"/>
                        )
                    })}
                    {martialMW.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-crossed-swords ra-2x"/>
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