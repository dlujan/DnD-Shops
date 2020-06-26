import React, { useState } from 'react';
import SingleItem from './SingleItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Searchbar = (props) => {
    const [currentItems, updateItems] = useState({filtered: []});
    const [input, setInput] = useState('');

    const shops = props.shops;

    const onChange = event => {
        const searchText = event.target.value;
        setInput(searchText);
        
        const regex = new RegExp(`^${searchText}`, 'gi');
        let filtered = [];

        shops.forEach(shop => {
            shop.inventory.forEach(category => {
                 Object.values(category).forEach(val => {
                    if (Array.isArray(val)) { // This gets us to consistent inventory level for each shop
                        let shelves = val;
                        shelves.forEach(function digDeeper(shelf) {
                            //Check if shelf contains an array | means we have to dig deeper
                            let result = containsArray(shelf);
                            if (!Array.isArray(result)) { // if it is an object, grab that object if it matches the search query
                                if (result.name.match(regex) || result.category.match(regex)) {
                                    filtered.push(result);
                                }
                            } else if (Array.isArray(result)) { // if it is an array then dig deeper
                                result.forEach(newShelf => digDeeper(newShelf));
                            }
                        })
                    }
                })
            })
        })
        if (searchText.length === 0) {
            filtered = [];
        }
        updateItems({ filtered });
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
            <div className="grid-container" style={{display: 'flex', justifyContent: 'flex-end', padding: '5px 0'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <input type="text" placeholder="Search..." value={input} onChange={event => onChange(event)}/>
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
            </div>
            <div className="grid-container" style={{maxHeight: '250px', paddingTop: '5px', overflow: 'scroll', overflowX: 'hidden'}}>
                {currentItems.filtered.map(item => {
                    return <SingleItem item={item}/>
                })}
            </div>
        </div>
    )
}

const feedStyle = () => {

}

export default Searchbar;