// DEPENDENCIES
const express = require('express');

console.log(__dirname)
console.log(__filename)

// used to store express function
const app = express()

// configures what the server should do when someone tries to get the resource at a url
// ex. HTML or JSON
// takes in route and function
// arguments are request and response

// ROUTES
app.get('', (req, res) => {
    // allows to send something back to requester
    res.send('<h1>Weather</h1>');
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Jordan',
        age: 27
    }, {
        name: 'Emily',
        age: 26
    }]);
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Philadelphia',
        weather: `It's snowing`
    })
})

// starts the server and listen on a ports
app.listen(3000, () => {
    console.log('Serve is up on port 3000.')
})