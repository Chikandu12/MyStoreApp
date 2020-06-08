var express = require ('express');
 var app = express();


app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render("MyStoreApp");
});

//app.listen(process.env.PORT, process.env.IP);
//console.log('Node server running on port ')
var port = process.env.PORT ? process.env.PORT :  4000;
app.listen(port, process.env.IP);
console.log('Listening on port ' + port) ;