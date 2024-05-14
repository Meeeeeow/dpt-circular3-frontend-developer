/* eslint-disable react/prop-types */
import FlightSegmentRow from "./FlightSegementRow";

const SearchResultsTable = ({ results }) => (
    <div>
        <table className="min-w-full table-auto text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="py-3">Flight</th>
                    <th scope="col" className="py-3">Aircraft</th>
                    <th scope="col" className="py-3">Class</th>
                    <th scope="col" className="py-3">Fare</th>
                    <th scope="col" className="py-3">Route</th>
                    <th scope="col" className="py-3">Departure</th>
                    <th scope="col" className="py-3">Arrival</th>
                    <th scope="col" className="py-3"></th>
                    <th scope="col" className="py-3">Duration</th>
                    <th scope="col" className="py-3">Price</th>
                </tr>
            </thead>
            <tbody className="bg-white mb-4">
                {results.map((result) => result.itineraries.map((itinerary, itinIdx) => (
                    <FlightSegmentRow key={itinIdx} itinerary={itinerary} result={result} />
                )))}
               
            </tbody>
        </table>
    </div>
);

export default SearchResultsTable;
   
