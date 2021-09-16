import React from 'react';
import CountryCard from "./CountryCard";
import { BiSearch } from "react-icons/bi";

const CountryCardCont = () => {
    return (
        <>
            <div className="countryCardCont">
                <div className="countrySearch">
                    <p><BiSearch /></p>
                    <p><input type="text" placeholder="Search for a country.." name="searchCountries" /></p>
                </div>
                <div className="countryFilter">
                    <select name="regionFilter" placeholder="Filter by Region">
                        <option value="Filter by Region">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>

            </div>
            <div>
                <CountryCard />
            </div>
        </>
    )
}

export default CountryCardCont;
