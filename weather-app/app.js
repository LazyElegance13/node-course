const request = require('postman-request');
const chalk = require('chalk');

const getWeather = (location) => {
    const baseURL = "http://api.weatherstack.com/"
    const apiKey = "0f47ace1714914d9d0b38a75fb740910"
    const city = location;
    const url = baseURL + "current?access_key=" + apiKey + "&query=" + city //+ "&units=f" 
    // console.log(url);
    request({url: url, json: true}, (error, response) => {
        // const data = JSON.parse(response.body)
        // console.log(response.body)
        if (error){
            console.log(chalk.red.italic('Unable to connect to weather service!'));
        } else if (response.body.error) {
            console.log(chalk.red.italic('Unable to find location.'));
        } else {
            data = response.body.current;
            temperature = data.temperature;
            feelslike = data.feelslike;
            console.log(data.weather_descriptions[0] + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.')
        }
    })
}

// Geocoding
apiGeoKey = "756edf8f79b594d6223a89f735241c33";
const baseGeoURL = "http://api.positionstack.com/v1/";
let address = "Ganpat Niketan, 18th Road, Khar West, Mumbai, India"//"Amanora Park Town, Sector R2, Hadapsar, Pune, India";
const urlGeo = baseGeoURL + "forward?access_key=" + apiGeoKey + "&query=" + address + "&output=json" +"&limit=1"

request({url: urlGeo, json: true}, (error, response) => {
    if (error) {
        console.log(chalk.red.italic("Unable to connect to the position services."))
    } else if (response.body.error) {
        console.log(chalk.red.italic("Unable to find coordinates for the provided location."))
    } else {
        const geodata = response.body.data;
        const lat = geodata[0].latitude;
        const long = geodata[0].longitude;
        // console.log(geodata);
        getWeather(lat+','+long);
    }
})
// Address -> Lat/Long -> Weather
getWeather('Pune');