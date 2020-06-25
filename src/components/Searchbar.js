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
                        let shelves = val;
                        shelves.forEach(function digDeeper(shelf) {
                            //Check if shelf contains an array | means we have to dig deeper
                            let result = containsArray(shelf);
                            if (!Array.isArray(result)) {
                                console.log(shelf.name); // return object if it matches regex
                            } else if (Array.isArray(result)) {
                                console.log('We need to dig deeper...');
                            }
                        })
                        // // filter weapons
                        // let filtered = arr.filter(function digDeeper(index) { // ISSUE: Not properly digging deep enough to reach weapons and armor items
                        //     let result = containsArray(index); // is either an array or object
                        //     if (Array.isArray(result)) {
                        //         return result.map(newIndex => digDeeper(newIndex));
                        //     } else {
                        //         //return result.name.match(regex);
                        //         return result.name;
                        //     }
                        // })
                        // console.log(filtered)
                    }
                })
            })
        })
        
    }

    function containsArray(object) {
        let result = object;
        Object.keys(object).forEach(key => {
            if (Array.isArray(object[key])) { // if it ever finds an array it will set result equal to it
                result = object[key];
            }
        })
        return result; // result will either be a new array or the original object
    }
    
    return (
        <div>
            Search
            <input type="text" value={input} onChange={event => onChange(event)}/>
        </div>
    )
}

export default Searchbar;