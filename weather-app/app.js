const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const getWeather = require('./utils/getweather');

const address = process.argv[2]
// console.log(address);
if (!address) {
    console.log(chalk.inverse.magenta("No location argument provided"));
} else {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(chalk.inverse.magenta(error));
        }
        getWeather(latitude, longitude , (error, forecastData) => {
            if (error) {
                return console.log(chalk.inverse.magenta(error));
            }
            console.log(chalk.inverse.cyan(location));
            console.log(chalk.inverse(forecastData));
        });
    });
}





// Old Version without callback chaining
// geocode("Boston", (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// });

// getWeather(44.1545, -75.7088 , (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// });

