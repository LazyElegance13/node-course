console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const messageFour = document.querySelector('#message-4');
const weatherIcon = document.querySelector('#weather-icon')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchElement.value
    messageOne.textContent = 'Loading....'
    messageTwo.textContent = '';
    messageThree.textContent = '';
    messageFour.textContent = '';

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
                messageThree.textContent = data.humidity;
                messageFour.textContent = data.uv_index;
                weatherIcon.setAttribute('src', data.icon);
            }
        })
    });
});

