
const CountryData = ({country, handleVisitedCountries, handleVisitedFlage}) => {
   console.log(country)
    return (
        <div>
            <h3><small>Country Data: {country.country.name.common} </small></h3>

        </div>
    );
};

export default CountryData;