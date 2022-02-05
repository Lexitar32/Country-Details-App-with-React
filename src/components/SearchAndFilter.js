import React from 'react';
import { BiSearch } from "react-icons/bi";

const SearchAndFilter = ({ fn }) => {
    return (
        <>
            <div className="countrySearch">
                <p><BiSearch /></p>
                <p><input type="text" placeholder="Search for a country.." name="searchCountries" /></p>
            </div>
            <div className="countryFilter">
                <select name="regionFilter" placeholder="Filter by Region" onClick={(e) => fn(e.target.value)}>
                    <option value="Filter by Region">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </>
    )
}

export default SearchAndFilter
