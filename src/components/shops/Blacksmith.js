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

        const lightArmor = armor[0];
        const mediumArmor = armor[1];
        const heavyArmor = armor[2];
        const shield = armor[3];

        const simpleMW = weapons[0];
        const martialMW = weapons[1];
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
                    {heavyArmor.items.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item}/>
                        )
                    })}
                    {shield.items.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item}/>
                        )
                    })}
                    {simpleMW.items.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item}/>
                        )
                    })}
                    {martialMW.items.map((item, index) => {
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