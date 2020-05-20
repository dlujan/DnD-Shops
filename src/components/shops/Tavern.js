import React, { Component } from 'react';
import SingleItem from '../SingleItem';

import '../../App.css';

export default class Tavern extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[1]
        }
    }
    render() {
        const breakfast = this.state.shop.inventory[0].breakfast;
        const lunch = this.state.shop.inventory[1].lunch;
        const dinner = this.state.shop.inventory[2].dinner;
        const rooms = this.state.shop.inventory[3].rooms;
        return (
            <div>
                <div className="title-container">
                    <h1>{this.state.shop.name}</h1>
                </div>
                <div className="grid-container">
                    {breakfast.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-toast ra-2x"/>
                        )
                    })}
                    {lunch.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-cheese ra-2x"/>
                        )
                    })}
                    {dinner.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-roast-chicken ra-2x"/>
                        )
                    })}
                    {rooms.map((item, index) => {
                        return (
                            <SingleItem key={index} item={item} rpgIcon="ra ra-key ra-2x"/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
