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

        const lightArmor = armor[0];
        const mediumArmor = armor[1];
        const shield = armor[2];

        const simpleRW = weapons[0];
        return (
            <div>
                <h2>{this.state.shop.name}</h2>
                <div className="grid-container">
                    {lightArmor.items.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item}/>
                        )
                    })}
                    {mediumArmor.items.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item}/>
                        )
                    })}
                    {shield.items.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item}/>
                        )
                    })}
                    {simpleRW.items.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item}/>
                        )
                    })}
                    {adventuring_gear.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item}/>
                        )
                    })}
                    {tools.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
