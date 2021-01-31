// DEPENDENCIES
const path = require('path');
const express = require('express');
const { readdirSync } = require('fs');

//load instance of express
const app = express()


//generate path to public folder
const publicDirectoryPath = path.join(__dirname, '../public')
const helpPath = path.join(__dirname, '../public/help.html')
const aboutPath = path.join(__dirname, '../public/about.html')

// tell node which templating engine to use when installed
// need this line to set up handlebars
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))
// app.use('/help', express.static(helpPath))
// app.use('/about', express.static(aboutPath))

// configures what the server should do when someone tries to get the resource at a url
// ex. HTML or JSON
// takes in route and function
// arguments are request and response

// ROUTES
app.get('', (req, res) => {
    // render one of our views
    // first argument is name of view we want to use, second argument is an object
    // no need for file extension; just needs name of template
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Andrew Mead'
    })
})

app.get('/message', (req, res) => {
    res.render('help', {
        title: "Help",
        message: "This is a test help message."
    })
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