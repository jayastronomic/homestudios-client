import React from 'react'
import '../SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

const SearchPage = () => {
    return( 
        <div className="searchPage">
            <div className="searchPage__info">
                <p>80 stays • 26 august to 30 august • 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <SearchResult />
        </div>
    )
}

export default SearchPage;