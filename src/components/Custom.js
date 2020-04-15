import React, { Component } from 'react'

export default class Custom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
          customItems: []
        };
      }

      async componentDidMount () {
        const url = 'https://us-central1-dnd-shops.cloudfunctions.net/api/customItems';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
          isLoaded: true,
          customItems: data
        });
      }

    render() {
      const {isLoaded} = this.state;

      if (!isLoaded) {
        return <div>Loading...</div>
      } else {
          return (
            <div>
                <h2>Custom Items</h2>
                {this.state.customItems.map(item => {
                  return (
                    <div key={item.itemId}>
                      <h3>{item.name}</h3>
                      <ul>
                        <li>{item.desc}</li>
                        <li>{item.cost.quantity} {item.cost.unit}</li>
                      </ul>
                    </div>
                  )
                })}
            </div>
          )
        }
    }
}
