const request = require('postman-request');

// - With callback abstraction
const geocode = (address, callback) => {
    apiGeoKey = "756edf8f79b594d6223a89f735241c33";
    const baseGeoURL = "http://api.positionstack.com/v1/";
    const url = baseGeoURL + "forward?access_key=" + apiGeoKey + "&query=" + encodeURIComponent(address) + "&output=json" +"&limit=1"
    // console.log(urlGeo);
    request ({url, json: true}, (error, {body}) => {
        // console.log(response);
        // console.log(error);
        if (error) {
            callback("Unable to connect to location services.", undefined);
        } else if (body.error) {
            callback("Unable to find coodinates for the provided location.", undefined)
        } else {
            const geodata = body.data;
            const data = {
                latitude: geodata[0].latitude,
                longitude: geodata[0].longitude,
                location: geodata[0].label
            }
            callback(undefined, data);   
        }
    })
}


// - Without callback
// // Geocoding
// apiGeoKey = "756edf8f79b594d6223a89f735241c33";
// const baseGeoURL = "http://api.positionstack.com/v1/";
// let address = "Ganpat Niketan, 18th Road, Khar West, Mumbai, India"//"Amanora Park Town, Sector R2, Hadapsar, Pune, India";
// const urlGeo = baseGeoURL + "forward?access_key=" + apiGeoKey + "&query=" + address + "&output=json" +"&limit=1"

// request({url: urlGeo, json: true}, (error, response) => {
//     if (error) {
//         console.log(chalk.red.italic("Unable to connect to the position services."))
//     } else if (response.body.error) {
//         console.log(chalk.red.italic("Unable to find coordinates for the provided location."))
//     } else {
//         const geodata = response.body.data;
//         const lat = geodata[0].latitude;
//         const long = geodata[0].longitude;
//         // console.log(geodata);
//         getWeather(lat+','+long);
//     }
// })

module.exports = geocode;