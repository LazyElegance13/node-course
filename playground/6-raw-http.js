const http = require('http');
const url = "http://api.weatherstack.com/current?access_key=0f47ace1714914d9d0b38a75fb740910&query=18.519479,73.870703"

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        // console.log(`BODY: ${chunk}`);
    })

    response.on('end', () => {
        // console.log('No more data in response.')
        const body = JSON.parse(data)
        console.log(body);
    })
})
request.on('error', (e) => {
    console.error('An error', e);
})
request.end();