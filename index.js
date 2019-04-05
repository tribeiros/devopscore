const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.render('index');
});

console.log("Tiago ribeiro - tribeiros@indracompany.com")
app.listen(port, () => console.log(`listening on port ${port}!`))