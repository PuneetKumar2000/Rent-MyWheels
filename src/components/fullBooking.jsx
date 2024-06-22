import { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";

const FullBooking = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pickupDateTime, setPickupDateTime] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = Country.getAllCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleCountryChange = async (e) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);
    try {
      const statesData = State.getStatesOfCountry(countryId);
      setStates(statesData);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const handleStateChange = async (e) => {
    const stateId = e.target.value;
    setSelectedState(stateId);
    try {
      const citiesData = City.getCitiesOfState(selectedCountry, stateId);
      setCities(citiesData);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleStreetNumberChange = (e) => {
    setStreetNumber(e.target.value);
  };

  const handleLandmarkChange = (e) => {
    setLandmark(e.target.value);
  };

  const handlePickupDateTimeChange = (e) => {
    setPickupDateTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected country:", selectedCountry);
    console.log("Selected state:", selectedState);
    console.log("Selected city:", selectedCity);
    console.log("Street Number:", streetNumber);
    console.log("Landmark:", landmark);
    console.log("Pickup Date and Time:", pickupDateTime);
  };

  return (
    <div className="max-w-md p-6 bg-white">
      <h1 className="text-2xl font-semibold mb-4">Select DropOff Location</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
        {/* State dropdown */}
        {selectedCountry && (
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="w-full border rounded-md px-3 py-2 mt-4 focus:outline-none focus:ring focus:border-blue-500"
            required
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        )}
        {/* City dropdown */}
        {selectedState && (
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full border rounded-md px-3 py-2 mt-4 focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        )}
        <div className="mb-4 mt-4">
          <label
            htmlFor="streetNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Street Number
          </label>
          <input
            type="text"
            id="streetNumber"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            value={streetNumber}
            onChange={handleStreetNumberChange}
            placeholder="Enter street number"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="landmark"
            className="block text-sm font-medium text-gray-700"
          >
            Landmark
          </label>
          <input
            required
            type="text"
            id="landmark"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            value={landmark}
            onChange={handleLandmarkChange}
            placeholder="Enter landmark"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pickupDateTime"
            className="block text-sm font-medium text-gray-700"
          >
            DropOff Date and Time
          </label>
          <input
            required
            type="datetime-local"
            id="pickupDateTime"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500"
            value={pickupDateTime}
            onChange={handlePickupDateTimeChange}
          />
        </div>
      </form>
    </div>
  );
};

export default FullBooking;
