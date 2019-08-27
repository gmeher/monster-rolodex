import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props)=>{
    return (
        <div class="search-box-container">
            <input type = "search" onChange = {props.handleChange} placeholder="search your monster"></input>
        </div>
        
    )
}