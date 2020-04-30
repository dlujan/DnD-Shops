import React from 'react'

export default function SingleItem(props) {
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
        <div style={itemStyle}>
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
    )
}

const itemStyle = {
    padding: '10px',
    margin: '10px',
    borderRadius: '15px',
    textAlign: 'center',
    backgroundColor: 'lightgrey'
}