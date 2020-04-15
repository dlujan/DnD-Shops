import React, { Component } from 'react'

export default class Potions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[3]
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.shop.name}</h2>
            </div>
        )
    }
}
