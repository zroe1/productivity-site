'use client';
import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const updateState = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  const handleClear = () => {
    setSearchValue("")
  }

  const filteredProducts = props.searchItems.filter((product) => {
    return product.includes(searchValue)
  })

  return (
    <div>
      <input type="text" value={searchValue} onChange={updateState}/>
      {searchValue != "" && <button onClick={handleClear}>clear</button>}
      
      <ul>
        {filteredProducts.map((product) => {
            return <li key={product}>{product}</li>
        })}
      </ul>

    </div>
  )
}

export default SearchBar;