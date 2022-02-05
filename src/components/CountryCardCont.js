import React, { useState, useEffect } from 'react';
import SearchAndFilter from "./SearchAndFilter";

import { getCountries } from '../utils/api';

const CountryCardCont = () => {

    // App States
    const [loading, setloading] = useState(true);
    const [countriesData, setcountriesData] = useState([]);
    // setcountriesData(response.data)

    // Fetch All Countries Details
    useEffect(() => {
        getCountries()
            .then((response) => {
                setcountriesData(response.data.data)
                console.log(response.data);
            })
            .catch((err) => console.log(err));
        setloading(false);
    }, [])

    const filterByRegion = (props) => {
        console.log(props);
        const filterResult = countriesData?.filter(countryFilter => {
            return props === countryFilter?.region;
        })
        if (filterResult.length >= 1) {
            setcountriesData(filterResult);
        } else if (filterResult.length === 0) {
            setcountriesData(countriesData);
        }
        console.log(filterResult);
    }

    return (
        <>
            <div className="countryCardCont">
                <SearchAndFilter fn={props => filterByRegion(props)} />
            </div>
            <div className="countryCards">
                {
                    loading
                        ?
                        <p>Loading...</p>
                        :
                        countriesData.map((country, id) => {
                            return (
                                <div className="countryCard" key={id}>
                                    <img src={country.flag} alt="Country Flag" className="cardImage" />
                                    <div className="countryCardDetails">
                                        <p className="lead">{country.name}</p>
                                        <p><span className="subLead">Currency:</span> <span className="subLead2">{country.currency}</span></p>
                                        <p><span className="subLead">Dial Code:</span> <span className="subLead2">{country.dialCode}</span></p>
                                        {/* <p><span className="subLead">Capital:</span> <span className="subLead2">{country.capital}</span></p> */}
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}

export default CountryCardCont;
