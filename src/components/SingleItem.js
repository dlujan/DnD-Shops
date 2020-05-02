import React from 'react';
import 'rpg-awesome/css/rpg-awesome.min.css';
import Texture from '../texture.jpg';
export default function SingleItem(props) {

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
    const {
        name,
        category,
        cost,
        weight,
        armor_class,
        damage,
        speed,
        capacity,
        desc} = props.item;

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
            {/* ADD A POPUP WITH MORE INFO AND COST ADJUST BUTTONS WHEN YOU CLICK ME */}
            </div>
        </div>
    )
}