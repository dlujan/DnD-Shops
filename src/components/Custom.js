import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Custom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
          customItems: []
        };
      }

      componentDidMount() {
        this.setState({ 
          customItems: this.props.customItems,
          isLoaded: true
        })
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

Custom.propTypes = {
  customItems: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  customItems: state.auth.user.customItems
});

export default connect(mapStateToProps)(Custom);