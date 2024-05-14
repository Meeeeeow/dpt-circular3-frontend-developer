/* eslint-disable react/prop-types */
const FlightSegmentRow = ({ itinerary, result }) => (
    <>
        {itinerary.segments.map((segment, segIdx) => (
            <tr key={segIdx}>
                <td>{segment.marketingCarrier} {segment.flightNumber}</td>
                <td>{segment.aircraft}</td>
                <td>{result.class[0][segIdx]}</td>
                <td>{result.fareBasis[0][segIdx]}</td>
                <td>{segment.departure.iataCode} to {segment.arrival.iataCode}</td>
                <td>{new Date(segment.departure.at).toLocaleString()}</td>
                <td>{new Date(segment.arrival.at).toLocaleString()}</td>
                <td>____</td>
                {segIdx === 0 && <td rowSpan={itinerary.segments.length}>{itinerary.duration}</td>}
                {segIdx === 0 && (
                    <td rowSpan={itinerary.segments.length} className="mb-2">
                        <div>${result.price}</div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-2">
                            Select
                        </button>
                    </td>
                )}
            </tr>
            
        ))}
        <br/>
        <tr><td colSpan="10" className="border-t-2 border-gray-200"></td></tr>
    </>
);
export default FlightSegmentRow;