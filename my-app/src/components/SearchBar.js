import React from 'react'

export const SearchBar = ({ itemsList, setSearchResults }) => {
    const handleSubmit = (e) => e.prevenntDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(itemsList)

        const resultsArray = itemsList.filter(itemsList =>  itemsList.name.toLowerCase().includes(e.target.value.toLowerCase()))

        setSearchResults(resultsArray)
    }

    return (
        <>
            <form className='search' onSubmit={handleSubmit}>
                <input className='search_input' type='text' id='search' onChange={handleSearchChange} />
                <button className='search__button'>Chercher</button>
            </form>
        </>
    )
}

export default SearchBar