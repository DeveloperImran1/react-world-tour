import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail.jsx';
const Country = ({ country, handleVisitedCountries, handleVisitedFlage }) => {       // "react/prop-types" : 'off'   // function er peramtera props k validation korte hoi. But amra akhon validation off kore rakhar jonno ai liner er code ta likhta hoi. .eslintrc.cjs file a 

    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited' : 'nai'}`}>
            <h3 style={{ color: visited && 'purple' }}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountries(country)}>add visited country</button>
            <hr />
            <button onClick={() => handleVisitedFlage(country.flags.png)}>add flag</button>
            <hr />
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {visited ? "I have visited this country." : "I want to visit"}

            <hr />
           <CountryDetail country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlage={handleVisitedFlage} ></CountryDetail>
        </div>
    );
};

export default Country;