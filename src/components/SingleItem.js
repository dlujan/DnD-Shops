import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/item';

import 'rpg-awesome/css/rpg-awesome.min.css';
import Texture from '../texture.jpg';

const SingleItem = (props) => {

    const itemStyle = () => {
        return {
            padding: '10px',
            margin: '10px',
            borderRadius: '3px',
            boxShadow: '2px 2px 3px #361f11',
            textAlign: 'center',
            backgroundImage: `url(${Texture})`
        }
    }
    const onSubmit = async event => {
        event.preventDefault();
        props.deleteItem(itemId);
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
        <div style={itemStyle()}>
            <div style={{textAlign: 'left'}}>
                <i className={props.rpgIcon}></i>
            </div>
            <div>
            <h4>{name}</h4>
            <p>Category: {category}</p>
            <p>Cost: {cost.quantity} {cost.unit}</p>
            {armor_class && (
                <p>AC: {armor_class}</p>
            )}
            {damage && (
                <p>Dmg: {damage}</p>
            )}
            {speed && (
                <div>
                    <p>Speed: {speed}</p>
                    <p>Cap: {capacity}</p>
                    {/* If speed exists capacity exists */}
                </div>
            )}
            {desc && (
                <p>{desc}</p>
            )}
            {weight && (
                <p>Weight: {weight} lbs</p>
            )}
            {DMnotes && (
                <p>DM Notes: {DMnotes}</p>
            )}
            {itemId && (
                <div>
                    <form onSubmit={event => onSubmit(event)}>
                        <input type="submit" value="Delete"></input>
                    </form>
                </div>
            )}
            {/* ADD A POPUP WITH MORE INFO AND COST ADJUST BUTTONS WHEN YOU CLICK ME */}
            </div>
        </div>
    )
}

SingleItem.propTypes = {
    deleteItem: PropTypes.func.isRequired,
};

export default connect(null, { deleteItem })(SingleItem);