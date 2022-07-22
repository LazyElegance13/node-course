const request = require('postman-request');

// - With callback abstraction
const getWeather = (latitude, longitude, callback) => {
    const baseURL = "http://api.weatherstack.com/"
    const apiKey = "0f47ace1714914d9d0b38a75fb740910"
    const url = baseURL + "current?access_key=" + apiKey + "&query=" + latitude + ',' + longitude //+ "&units=f" 
    console.log(url);
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to find location.", undefined);
        } else {
            data = body.current;
            temperature = data.temperature;
            feelslike = data.feelslike;
            callback(undefined, {
                forecast: data.weather_descriptions[0] + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.',
                icon: data.weather_icons[0],
                humidity: `Humidity is ${data.humidity}`,
                uv_index: `UV index is ${data.uv_index}`
            })
        }
    })
}





module.exports = getWeather;

// - Without callback abstracrtion

// const getWeather = (location) => {
//     const baseURL = "http://api.weatherstack.com/"
//     const apiKey = "0f47ace1714914d9d0b38a75fb740910"
//     const city = location;
//     const url = baseURL + "current?access_key=" + apiKey + "&query=" + city //+ "&units=f" 
//     // console.log(url);
//     request({url: url, json: true}, (error, response) => {
//         // const data = JSON.parse(response.body)
//         // console.log(response.body)
//         if (error){
//             console.log(chalk.red.italic('Unable to connect to weather service!'));
//         } else if (response.body.error) {
//             console.log(chalk.red.italic('Unable to find location.'));
//         } else {
//             data = response.body.current;
//             temperature = data.temperature;
//             feelslike = data.feelslike;
//             console.log(data.weather_descriptions[0] + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.')
//         }
//     })
// }


// // Address -> Lat/Long -> Weather
// getWeather('Pune');