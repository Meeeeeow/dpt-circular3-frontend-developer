/* eslint-disable react/prop-types */
const Buttons = ({selected, handleSelect}) => {
  
  return (
    <div className="bg-white p-4 flex space-x-4 w-full justify-center border border-r-green-300">
        <button
          className={`px-6 py-2 text-sm font-medium rounded-md ${selected === 'roundTrip' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => handleSelect('roundTrip')}
        >
          Round Trip
        </button>
        <button
          className={`px-6 py-2 text-sm font-medium rounded-md ${selected === 'oneWay' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => handleSelect('oneWay')}
        >
          One Way
        </button>
        <button
          className={`px-6 py-2 text-sm font-medium rounded-md ${selected === 'multiCity' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => handleSelect('multiCity')}
        >
          Multi-City
        </button>
    </div>
  )
}

export default Buttons