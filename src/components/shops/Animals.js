import React, { Component } from 'react'

export default class Animals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[10]
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