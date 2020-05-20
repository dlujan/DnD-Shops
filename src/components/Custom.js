import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createItem } from '../actions/item';
import SingleItem from './SingleItem';

import '../App.css';

class Custom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newItem: {
            name: '',
            cost: {
              quantity: '',
              unit: ''
            },
            desc: '',
            category: '',
            weight: '',
            DMnotes: ''
          }
        };
      }
     
      submitItem = (event) => {
        event.preventDefault();
        this.props.createItem(this.state.newItem);
        
        // reset state
        this.setState({
          newItem: {
            name: '',
            cost: {
              quantity: '',
              unit: ''
            },
            desc: '',
            category: '',
            weight: '',
            DMnotes: ''
          }
        })
      }

      handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === 'quantity' || name === 'unit') {
          this.setState(prevState => ({
            ...prevState,
            newItem: {
              ...prevState.newItem,
              cost: {
                ...prevState.newItem.cost,
                [name]: value
              }
            }
          }));
        } else {
          this.setState(prevState => ({
            newItem: {
              ...prevState.newItem,
              [name]: value
            }
          }));
        }
      }

    render() {
      const { isAuthenticated, loading, user } = this.props.auth;

      if (!isAuthenticated) {
        return <Redirect to="/login" />
      }
      if (loading) {
        return <div>Loading...</div>
      } else {
          return (
            <div>
              <form onSubmit={this.submitItem}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={this.state.newItem.name} 
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Category" 
                        name="category" 
                        value={this.state.newItem.category} 
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        placeholder="Cost Amount" 
                        name="quantity" 
                        value={this.state.newItem.cost.quantity} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Unit" 
                        name="unit" 
                        value={this.state.newItem.cost.unit}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Description (AC/Dmg)" 
                        name="desc" 
                        value={this.state.newItem.desc} 
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        placeholder="Weight" 
                        name="weight" 
                        value={this.state.newItem.weight} 
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="DM Notes" 
                        name="DMnotes" 
                        value={this.state.newItem.DMnotes} 
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" value="Submit" />
              </form>
              <div className="title-container">
                <h1>Custom Items</h1>
              </div>
                <div className="grid-container">
                    {user.customItems.map(item => {
                        return (
                            <SingleItem key={item.itemId} item={item} color="lightgreen" rpgIcon="ra ra-wrench ra-2x"/>
                        )
                    })}
                </div>
            </div>
          )
        }
    }
}

Custom.propTypes = {
  createItem: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { createItem })(Custom);