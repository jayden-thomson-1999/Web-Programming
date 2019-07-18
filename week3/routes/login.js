// app passes in the express object needed for the route
// path passes in a path object needed to find the file. 
// path is '/' for index

module.exports = function(app, path) {
    app.get('/', function(req, res) {
        let filepath = path.resolve('./www/login.html');
        res.sendFile(filepath);
    });
}