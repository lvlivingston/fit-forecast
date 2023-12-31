//WEATHER CONTROLLER
const { default: axios } = require("axios");
const weatherApiKey = process.env.WEATHERAPI_KEY
const ROOT_URL = 'https://api.weatherapi.com/v1/';
const endpoint = 'forecast'
module.exports = {
  index,
}
async function index(req, res, next) {
  try{
    const userLocation = req.query.location
    const endpointUrl = `${ROOT_URL}${endpoint}.json?key=${weatherApiKey}&q=${userLocation}&days=3&aqi=no&alerts=no`
    const endpointData = await axios.get(
        endpointUrl,
        { headers: { 'Content-Type': 'application/json' }}
      )
    res.json(endpointData.data)
    //console.log(endpointData.data)
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}