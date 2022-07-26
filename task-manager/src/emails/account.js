const domain = 'sandbox1fcf36d2dc2b496798807c3a87f25612.mailgun.org'
const data = {
	from: "Excited User <me@samples.mailgun.org>",
	to: 'lazylucifer@yahoo.com, piyush@jamuura.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness at 12.22, post authorization of emails!'
};

const formData = require('form-data')
const Mailgun = require('mailgun.js')

const mailgun = new Mailgun(formData)
const client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY}) 

// client.messages.create(domain, data).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })



const sendWelcomeEmail = (email, name) => {
    client.messages.create(domain, {
        from: "Welcome <me@samples.mailgun.org>",
        to: email,
        subject: 'Thanks for joining in!',
        text: ` Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

const sendCancelationEmail = (email, name) => {
    client.messages.create(domain, {
        from: 'Sorry to See you go <piyush@jamuura.com>',
        to: email,
        subject: 'We are sorry to see you go!',
        text: `Hi ${name}, we regret that you have decided to discontinue using our services. Do let us know if we can help resolve any issues you are facing with our service.`
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
// usign the mailgun-js library
// const mailgun = require("mailgun-js");
// const mg = mailgun({apiKey: mailgunAPIKey, domain: domain});

// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });
