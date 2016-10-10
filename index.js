var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server is now running! Open the website on http://localhost:8080 in your browser.');
});