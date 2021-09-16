import React from 'react';
import "../index.css";
import CountryFlag from "../flag.jpg";

const CountryCard = () => {
    return (
        <div className="countryCards">
            <div className="countryCard">
                <img src={CountryFlag} alt="Country Flag" className="cardImage" />
                <div className="countryCardDetails">
                    <p className="lead">Germany</p>
                    <p><span className="subLead">Population:</span> <span>815,000</span></p>
                    <p><span className="subLead">Region:</span> <span>Europe</span></p>
                    <p><span className="subLead">Capital:</span> <span>Berlin</span></p>
                </div>
            </div>
            <div className="countryCard">
                <img src={CountryFlag} alt="Country Flag" className="cardImage" />
                <div className="countryCardDetails">
                    <p className="lead">United States of America</p>
                    <p><span className="subLead">Population:</span> <span>815,000</span></p>
                    <p><span className="subLead">Region:</span> <span>Europe</span></p>
                    <p><span className="subLead">Capital:</span> <span>Berlin</span></p>
                </div>
            </div>
            <div className="countryCard">
                <img src={CountryFlag} alt="Country Flag" className="cardImage" />
                <div className="countryCardDetails">
                    <p className="lead">Germany</p>
                    <p><span className="subLead">Population:</span> <span>815,000</span></p>
                    <p><span className="subLead">Region:</span> <span>Europe</span></p>
                    <p><span className="subLead">Capital:</span> <span>Berlin</span></p>
                </div>
            </div>
            <div className="countryCard">
                <img src={CountryFlag} alt="Country Flag" className="cardImage" />
                <div className="countryCardDetails">
                    <p className="lead">Germany</p>
                    <p><span className="subLead">Population:</span> <span>815,000</span></p>
                    <p><span className="subLead">Region:</span> <span>Europe</span></p>
                    <p><span className="subLead">Capital:</span> <span>Berlin</span></p>
                </div>
            </div>
            <div className="countryCard">
                <img src={CountryFlag} alt="Country Flag" className="cardImage" />
                <div className="countryCardDetails">
                    <p className="lead">Germany</p>
                    <p><span className="subLead">Population:</span> <span>815,000</span></p>
                    <p><span className="subLead">Region:</span> <span>Europe</span></p>
                    <p><span className="subLead">Capital:</span> <span>Berlin</span></p>
                </div>
            </div>
            <div className="countryCard">
                <img src={CountryFlag} alt="Country Flag" className="cardImage" />
                <div className="countryCardDetails">
                    <p className="lead">Germany</p>
                    <p><span className="subLead">Population:</span> <span>815,000</span></p>
                    <p><span className="subLead">Region:</span> <span>Europe</span></p>
                    <p><span className="subLead">Capital:</span> <span>Berlin</span></p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard;
