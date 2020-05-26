import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/item';

import Dialog from '@material-ui/core/Dialog';
import 'rpg-awesome/css/rpg-awesome.min.css';

import '../App.css';

const SingleItem = (props) => {
    const [open, showModal] = useState(false);

    const onSubmit = async event => {
        event.preventDefault();
        if (window.confirm(`Are you sure you want to delete ${name} forever!?`)) {
            props.deleteItem(itemId);
        } 
    };

    const {
        name,
        category,
        cost,
        weight,
        armor_class,
        damage,
        speed,
        capacity,
        desc,
        DMnotes,
        itemId} = props.item;

    return (
        <div>
            <Dialog fullWidth={true} open={open} onClose={() => showModal(false)}>
                <div style={{background: 'black'}}>
                    <div className="dialog-container">
                        <div className="item-name dialog-name">
                            <h3>{name}</h3>
                            <p>{category}</p>
                        </div>
                        <div className="dialog-costweight">
                            <div>
                                <h4>Cost</h4>
                                <p>{cost.quantity} {cost.unit}</p>
                            </div>
                            <div>
                                <h4>Weight</h4>
                                {weight ? <p>{weight} lb</p> : <p>--</p>}
                            </div>
                        </div>
                        <div className="dialog-specs">
                            {armor_class && (
                                <div>
                                    <p>This armor has an AC of {armor_class}.</p>
                                </div>  
                            )}
                            {damage && (
                                <div>
                                    <p>This weapon does {damage} damage.</p>
                                </div>
                            )}
                            {speed && (
                                <div>
                                    <p>Speed {speed}, Carrying Capacity {capacity} lbs</p>
                                    {/* If speed exists capacity exists */}
                                </div>
                            )}
                            {desc && (
                                <div>
                                    <p>{desc}</p>
                                </div>
                            )}
                        </div>
                        {DMnotes && (
                            <div className="dialog-DM">
                                <h4>DM Notes</h4>
                                <p>{DMnotes}</p>
                            </div>
                        )}
                        {itemId && (
                            <div className="dialog-delete">
                                <form onSubmit={event => onSubmit(event)}>
                                    <input className="delete-button" type="submit" value="Delete Item"></input>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </Dialog>
            <div className="item-container" onClick={() => showModal(true)}>
                <div className="item-icon">
                    <i className={props.rpgIcon}></i>
                </div>
                <div className="item-name">
                    <h2>{name}</h2>
                    <p>{category}</p>
                </div>
                <div className="item-cost">
                    <p>{cost.quantity} {cost.unit}</p>
                </div>
                <div className="item-weight">
                    {weight ? <p>{weight} lb</p> : <p>--</p>}
                </div>
                <div className="item-specs">
                    {armor_class && (
                        <div>
                            <p>Armor Class: {armor_class}</p>
                        </div>  
                    )}
                    {damage && (
                        <div>
                            <p>Damage: {damage}</p>
                        </div>
                    )}
                    {speed && (
                        <div>
                            <p>Speed {speed}, Carrying Capacity {capacity} lbs</p>
                            {/* If speed exists capacity exists */}
                        </div>
                    )}
                    {desc && (
                        <div>
                            <p>{desc}</p>
                        </div>
                    )}
                </div>
                {/* ADD A POPUP WITH MORE INFO AND COST ADJUST BUTTONS WHEN YOU CLICK ME */}
            </div>
        </div>
    )
}

SingleItem.propTypes = {
    deleteItem: PropTypes.func.isRequired,
};

export default connect(null, { deleteItem })(SingleItem);