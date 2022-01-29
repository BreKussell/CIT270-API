const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send('Hello Browser');
});

app.post('/login', (req,res) => {
    console.log(JSON.stringify(req.body));
    //let passHash = md5
    // let userHash = md5
    if(req.body.userName == "brekussell" && req.body.password == "password"){  //hash Username: 32ff5c30e56237bc234f93248617cd62 Password: cc3a0280e4fc1415930899896574e118
        res.send("welcome.")
} else{
    res.send("Get thee hense hacker!");
}

});

app.listen(port, () =>{});