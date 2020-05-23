import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createItem } from '../actions/item';
import SingleItem from './SingleItem';

import Dialog from '@material-ui/core/Dialog';
import '../App.css';

class Custom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          newItem: {
            name: '',
            cost: {
              quantity: '',
              unit: 'gp'
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
        this.closeDialog();
        
        // reset state
        this.setState({
          newItem: {
            name: '',
            cost: {
              quantity: '',
              unit: 'gp'
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

      openDialog = () => {
        this.setState({ open: true })
      }

      closeDialog = () => {
        this.setState({ open: false })
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
              <Dialog fullWidth={true} open={this.state.open} onClose={this.closeDialog}>
              <div className="form-container" style={{margin: '15px'}}>
                <div className="form-header" style={{fontSize: '1rem'}}>
                  <h1>Create New Item</h1>
                </div>
                <form onSubmit={this.submitItem}>
                  <div>
                      <input
                          className="form-input"
                          type="text" 
                          placeholder="Name" 
                          name="name" 
                          value={this.state.newItem.name} 
                          onChange={this.handleChange}
                      />
                  </div>
                  <div>
                      <input 
                          className="form-input"
                          type="text" 
                          placeholder="Category" 
                          name="category" 
                          value={this.state.newItem.category} 
                          onChange={this.handleChange}
                      />
                  </div>
                  <div>
                      <input 
                          className="form-input"
                          type="number" 
                          placeholder="Cost Amount" 
                          name="quantity" 
                          value={this.state.newItem.cost.quantity} 
                          onChange={this.handleChange}
                      />
                      <select 
                          className="form-input"
                          type="text" 
                          placeholder="Unit" 
                          name="unit" 
                          value={this.state.newItem.cost.unit}
                          onChange={this.handleChange}
                          style={{borderRadius: '0', backgroundColor: '#ffffff'}}
                      >
                        <option value="gp">gp</option>
                        <option value="sp">sp</option>
                        <option value="cp">cp</option>
                        <option value="ep">ep</option>
                        <option value="pp">pp</option>
                      </select>
                  </div>
                  <div>
                      <input 
                          className="form-input"
                          type="text" 
                          placeholder="Description (AC/Dmg)" 
                          name="desc" 
                          value={this.state.newItem.desc} 
                          onChange={this.handleChange}
                      />
                  </div>
                  <div>
                      <input 
                          className="form-input"
                          type="number" 
                          placeholder="Weight" 
                          name="weight" 
                          value={this.state.newItem.weight} 
                          onChange={this.handleChange}
                      />
                  </div>
                  <div>
                      <input 
                          className="form-input"
                          type="text" 
                          placeholder="DM Notes" 
                          name="DMnotes" 
                          value={this.state.newItem.DMnotes} 
                          onChange={this.handleChange}
                      />
                  </div>
                  <input className="form-button" type="submit" value="Submit" />
                </form>
                </div>
              </Dialog>
              <div className="title-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Custom Items</h1>
                <span className="createitem-btn" onClick={this.openDialog}>Create Item</span>
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