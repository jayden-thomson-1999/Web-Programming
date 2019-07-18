const users = {
    'johndoe@domain.com': 'password',
    'janedoe@domain.com': 'qwerty',
    'danejohns@domain.com': 'asdf'
}

module.exports = function(app) {    
    app.post('/api/login', (req, res) => {
        let { username, password } = req.body;
        let found = false;
        console.log(username, password);
        console.log(req.body);
        
        if(users.hasOwnProperty(username)) {
            if(password == users[username]) {
                found = true;
            }
        }

        if(found == true) {
            res.json({ 'ok': true });
        } else {
            res.json({'ok': false, 'errors': {}});
        }
    });
}
