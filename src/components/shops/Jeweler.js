import React, { Component } from 'react';
import SingleItem from '../SingleItem';

import '../../App.css';

export default class Jeweler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[5]
        }
    }
    render() {
        const adventuring_gear = this.state.shop.inventory[0].adventuring_gear;
        const tools = this.state.shop.inventory[1].tools;
        const services = this.state.shop.inventory[2].services;
        const gemstones = this.state.shop.inventory[3].gemstones;

        const gp10 = gemstones[0].gp10;
        const gp50 = gemstones[1].gp50;
        const gp100 = gemstones[2].gp100;
        const gp500 = gemstones[3].gp500;
        const gp1000 = gemstones[4].gp1000;
        const gp5000 = gemstones[5].gp5000;
        return (
            <div>
                <h2>{this.state.shop.name}</h2>
                <div className="grid-container">
                    {adventuring_gear.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-gem-pendant ra-2x"/>
                        )
                    })}
                    {tools.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-mining-diamonds ra-2x"/>
                        )
                    })}
                    {services.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-hand ra-2x"/>
                        )
                    })}
                    {gp10.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-gem ra-2x"/>
                        )
                    })}
                    {gp50.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-gem ra-2x"/>
                        )
                    })}
                    {gp100.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-gem ra-2x"/>
                        )
                    })}
                    {gp500.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-gem ra-2x"/>
                        )
                    })}
                    {gp1000.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-gem ra-2x"/>
                        )
                    })}
                    {gp5000.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-gem ra-2x"/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
