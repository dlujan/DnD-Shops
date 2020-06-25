import React, { useState } from 'react';

const Searchbar = (props) => {
    const [currentItems, updateItems] = useState([]);
    const [input, setInput] = useState('');

    const shops = props.shops;

    const onChange = event => {
        const searchText = event.target.value;
        setInput(searchText);
        
        const regex = new RegExp(`^${searchText}`, 'gi');

        shops.map(shop => {
            return shop.inventory.map(category => {
                 return Object.values(category).map(val => {
                    if (Array.isArray(val)) { // this gets us the array value. consistent for every shop
                        let arr = val;
                        let filtered = arr.filter(function digDeeper(level) { // ISSUE: Not properly digging deep enough to reach weapons and armor items
                            let result = containsArray(level);
                            if (result) {
                                return result.forEach(newLevel => digDeeper(newLevel));
                            } else {
                                return level.name.match(regex);
                            }
                        })
                        console.log(filtered)
                    }
                })
            })
        })
        
    }

    function containsArray(object) {
        Object.values(object).map(value => {
            if (Array.isArray(value)) {
                return value;
            }
        })
        return false;
    }
    
    return (
        <div>
            Search
            <input type="text" value={input} onChange={event => onChange(event)}/>
        </div>
    )
}

export default Searchbar;