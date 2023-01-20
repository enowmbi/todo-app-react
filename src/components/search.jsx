const Search =({ searchText, handleSearchTextChange, searchTextRef })=>{
    return(
        <input 
            className="task-search"
            type="text" 
            role="search" 
            placeholder="search tasks"
            text={searchText}
            onChange={(e) => handleSearchTextChange(e)}
        />
    )
}

export default Search
