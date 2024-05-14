/* eslint-disable react/prop-types */


const FlightSearchForm = ({ flights, handleSearch, addFlightRow, removeFlightRow, iataCodes, flightType, handleInputChange }) => {
    return (
        <div className="mb-4">
            {flights.map((flight, index) => (
                <div key={index} className="flex justify-start items-center space-x-2 mb-4 w-full">
                    <select value={flight.fromCity} onChange={(e) => handleInputChange(index, 'fromCity', e.target.value)} className="border p-2">
                        <option value="">Select Departure City</option>
                        {iataCodes.map(code => <option key={code} value={code}>{code}</option>)}
                    </select>
                    <select value={flight.toCity} onChange={(e) => handleInputChange(index, 'toCity', e.target.value)} className="border p-2">
                        <option value="">Select Arrival City</option>
                        {iataCodes.map(code => <option key={code} value={code}>{code}</option>)}
                    </select>
                    <input type="date" className="border p-2" value={flight.journeyDate} onChange={(e) => handleInputChange(index, 'journeyDate', e.target.value)} />
                    {flightType === 'roundTrip' && (
                        <input type="date" className="border p-2" value={flight.returnDate} onChange={(e) => handleInputChange(index, 'returnDate', e.target.value)} />
                    )}
                    <input type="text" placeholder="Traveler, Class" className="border p-2" value={flight.travelerClass} onChange={(e) => handleInputChange(index, 'travelerClass', e.target.value)} />
                    {flightType === 'multiCity' && (
                        <button onClick={addFlightRow} className="px-6 py-2 bg-green-500 text-white rounded-md">Add Another City</button>
                    )}
                    {flightType === 'multiCity' && index === flights.length - 1 && flights.length > 1 && (
                        <button onClick={removeFlightRow} className="px-4 py-2 bg-red-500 text-white rounded-md">Remove</button>
                    )}
                </div>
            ))}
            <button onClick={handleSearch} className="px-6 py-2 bg-blue-500 text-white rounded-md">Search</button>
        </div>
    );
};
export default FlightSearchForm;