import React, { Component } from 'react'

export default class Fletcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: this.props.shops[7]
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
