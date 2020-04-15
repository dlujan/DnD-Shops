import React, { Component } from 'react'

export default class Jeweler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[5]
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
