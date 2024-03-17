import { useEffect } from "react";
import { useState } from "react";
import Country from "../singleCountry/Country";
import './Country.css'

// rsc type kore tab marle akta layout create kore diba.
const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    // set visited countries
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log('add this to our visited country')
        // visitedCountries.push(country);  // aivabe korle hobena. karon react a aivabe push korle rendering hoina. mane dom change hoina.
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);  // tahole every rendering a ager visitedCountries er array er sate present visited country add hobe. than new array k set kore dibo visited country er sathe.
        console.log(country)
    }

    // set visited flags
    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedFlage = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }


    return (
        <div >
            <h3>Countries: {countries.length}</h3>

        {/* visited country  */}
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>

            </div>

            <div className="flags-container">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>) // aikhane key hisabe array er index number diasi.
                }
            </div>

            {/* display countries  */}
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlage={handleVisitedFlage}></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;