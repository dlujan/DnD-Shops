import React, { useState } from 'react';

const Searchbar = (props) => {
    const [currentItems, updateItems] = useState([]);
    const [input, setInput] = useState('');

    const shops = props.shops;

    const onChange = event => {
        const searchText = event.target.value;
        setInput(searchText);
        
        const regex = new RegExp(`^${searchText}`, 'gi');
        let queried = shops.map(shop => {
            return shop.inventory.map(category => {
                return category.name;
            })
        })
        console.log(queried);
    }
    
    return (
        <div>
            Search
            <input type="text" value={input} onChange={event => onChange(event)}/>
        </div>
    )
}

export default Searchbar;