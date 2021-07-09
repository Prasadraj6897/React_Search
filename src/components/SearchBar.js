import React, {useState} from 'react'

/**
* @author
* @function SearchBar
**/

const SearchBar = (props) => {
    const { onSearch } = props;
    
    const [searchText, setSearchText] = useState('')

    const handleInput = (e) => {
        const text = e.target.value
        setSearchText(text)
    }

    const handleEnterKeyPressed = (e) => {
        if(e.key=== 'Enter') {
          onSearch(searchText)
        }
    }
  return(
    <div>
        <div className="control">
            <input className="input" type= "text" placeholder="Search You Movies" value={searchText} onKeyPress={handleEnterKeyPressed} onChange={handleInput}/>
        </div>
    </div>
   )

 }

export default SearchBar