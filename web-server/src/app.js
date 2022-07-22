const path = require('path')
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const getWeather = require('./utils/getweather');
const favicon = require('serve-favicon');

const app = express();
const port = process.env.PORT || 3000;

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'));

// Define paths for Express Config
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, "../templates/views"); // renaming folder as default location for hbs is a views folder in the main directory
const partialPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(publicDirectory));
app.use(favicon(publicDirectory + '/img/favicon.ico')); 

app.get('/', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "Lazy Lucifer"
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Do you need help?",
        name: "Lazy Lucifer"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Lazy Lucifer"
    })
})

app.get('/weather', (req, res) => {
    const address = req.query.address;
    if (!address) {
        return res.send({
            error: "You must provide an address to get the weather."
        })
    }
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({error});
        }
        getWeather(latitude, longitude , (error, forecastData) => {
            if (error) {
                return res.send({error});
            }
            res.send({forecast: forecastData, location, address});
        });
    });


})


app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({ products: []});
})

// for specific help 404 page
app.get('/help/*', (req, res) =>  {
    res.render('404', {
        title: "Ouch!",
        error: "Help article not found",
        name: "Lazy Lucifer"
    });
});

// needs to always be last for the above routes to work
app.get('*', (req, res) => {
    res.render('404', {
        title: "Ouch!",
        error: "Page not found",
        name: "Lazy Lucifer"
    });
});

app.listen(port, () => {
    console.log(`Example app listening at port ${port}`)
});