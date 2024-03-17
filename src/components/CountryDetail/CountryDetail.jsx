import CountryData from "../CountryData/CountryData";

const CountryDetail = (country, handleVisitedCountries, handleVisitedFlage) => {
// const CountryDetail = (props) => {  // akadhik proprtry asle props er maddhome easily all property er akta object k dhore than distructure kora jai.
    // const {country, handleVisitedCountries, handleVisitedFlage} = props;
    return (
        <div>
            <h3>hii</h3>
            {/* <CountryData country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlage={handleVisitedFlage} ></CountryData> */}
            <CountryData country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlage={handleVisitedFlage}></CountryData>
        </div>
    );
};

export default CountryDetail;