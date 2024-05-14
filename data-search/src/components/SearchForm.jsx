/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { data } from '../data/data';
import FlightSearchForm from './FlightSearchForm';
import SearchResultsTable from './SearchResultsTable';

const SearchForm = ({ flightType }) => {
    const [flights, setFlights] = useState([{
        fromCity: '',
        toCity: '',
        journeyDate: '',
        returnDate: '',
        travelerClass: '1 Traveler, Economy'
    }]);
    const [iataCodes, setIataCodes] = useState([]);
    const [responseMsg] = useState(data.message);
    const [results, setResults] = useState(data.flightOffer); 


    useEffect(() => {
        let codes = [];
        data.flightOffer.forEach(offer => {
            offer.itineraries.forEach(itinerary => {
                itinerary.segments.forEach(segment => {
                    codes.push(segment.departure.iataCode, segment.arrival.iataCode);
                });
            });
        });
        setIataCodes([...new Set(codes)]);
    }, []);

    const handleInputChange = (index, field, value) => {
        const newFlights = [...flights];
        newFlights[index][field] = value;
        setFlights(newFlights);
    };

    const handleSearch = () => {
        if (flights[0].fromCity === '' && flights[0].toCity === '') {
            setResults(data.flightOffer);
        } else {
            const filteredResults = data.flightOffer.filter(offer =>
                offer.itineraries.some(itinerary =>
                    itinerary.segments.some(segment =>
                        segment.departure.iataCode === flights[0].fromCity &&
                        segment.arrival.iataCode === flights[0].toCity
                    )
                )
            );
            setResults(filteredResults);
        }
    };
    console.log(results);
    const addFlightRow = () => {
        if (flightType === 'multiCity') {
            setFlights([...flights, { fromCity: '', toCity: '', journeyDate: '', travelerClass: '1 Traveler, Economy' }]);
        }
    };

    const removeFlightRow = () => {
        if (flightType === 'multiCity' && flights.length > 1) {
            const newFlights = flights.slice(0, -1);
            setFlights(newFlights);
        }
    };
    return (
        <div className="p-4">
            <FlightSearchForm
                flights={flights}
                handleSearch={handleSearch}
                addFlightRow={addFlightRow}
                removeFlightRow={removeFlightRow}
                iataCodes={iataCodes}
                flightType={flightType}
                handleInputChange={handleInputChange}
            />
            <div>
                <h3 className="border border-r-green-400 mb-4 w-full">{responseMsg}</h3>
                <SearchResultsTable
                    results={results}
                />
            </div>
        </div>
    );
};

export default SearchForm;
