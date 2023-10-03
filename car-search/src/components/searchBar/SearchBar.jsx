import React ,{useState}  from 'react'
import './searchbar.css'
import search from '../../images/search.svg';
import close from '../../images/x.svg';

const SearchBar=({placeholder,data,onFilterChange,onSearchWord,searchWord})=>{

  const handleFilter = (event) =>{
      const word = event.target.value
      onSearchWord(word);
      const newFilter = data.filter((value)=>{
          return value.title.toLowerCase().startsWith(word.toLowerCase());
      });
      
      if(word ===""){
          onFilterChange([]);
        }
      else{
        onFilterChange(newFilter);
      }
  };

  const clearInput= ()=>{
      onFilterChange([]);
      onSearchWord("");
  }

  return(
    <div className="search">
      <div className="searchInputs">
        <input type="text" 
          onChange={handleFilter}
          value = {searchWord}
          placeholder={placeholder}/>

        <div className="searchIcon">
        {searchWord.length === 0 ? 
        <button><img src={search}/></button>
        : <button><img className="clearBtn" 
            onClick={clearInput}
            src={close}/></button> 
        }
        </div>
      </div>
    </div>

  )
}

export default SearchBar;
