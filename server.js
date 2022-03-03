var express = require('express');//ensures Express server is used
var app = express();//ensures Express server is used
var bodyParser = require('body-parser');
var obj;
const fs = require('fs');//sets us the fs for the parsing functions
//this is an asynchronous parsing function. It also loops through and displays the crucial information to show that i was able to parse the necessary information.
// fs.readFile('./favs.json', 'utf-8', (err, data) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('parsed');
// 		obj = JSON.parse(data);
// 		for (let i=0; i< obj.length; i++){// This is the loop to show the information
// 		console.log(obj[i].user.id + ' ' + obj[i].user.name + ' ' + obj[i].user.screen_name + ' '+ obj[i].created_at + ' '+obj[i].text);
// 		}
// 	}
// });

//This tells the app where any static files used will be located, such as the JSON file
app.use(express.static(__dirname));
app.use(bodyParser.json());

//This function is the Get Function to be used to get the information when requested. (never got this working)
app.get('/getinfo', function(req, res) {
	fs.readFile('./favs.json', 'utf-8', (err, data) => {
		if(err) {
			console.log(err);
		} else {
			console.log('parsed');
			obj = JSON.parse(data);

			//TODO: some operations

			res.send(JSON.stringify(obj));
			// for (let i=0; i< obj.length; i++){// This is the loop to show the information
			// console.log(obj[i].user.id + ' ' + obj[i].user.name + ' ' + obj[i].user.screen_name + ' '+ obj[i].created_at + ' '+obj[i].text);
			// }
		}
	});
    //res.send(obj);
});

//This function was supposed to create a new tweet to push to the JSON file (never fot to this point)
// app.post(obj, function(req, res) {
//     var productName = req.body.name;
//     currentId++;

//     products.push({
//         id: currentId,
//         name: productName
//     });

//     res.send('Successfully created product!');
// });

//This function was supposed to update the name of a user. (never got to this point)
// app.put('/products/:id', function(req, res) {
//     var id = req.params.id;
//     var newName = req.body.newName;

//     var found = false;

//     products.forEach(function(product, index) {
//         if (!found && product.id === Number(id)) {
//             product.name = newName;
//         }
//     });

//     res.send('Succesfully updated product!');
// });

//This function was meant to call the delete function so that one could delete a tweet. (never got to this point)
// app.delete('/products/:id', function(req, res) {
//     var id = req.params.id;

//     var found = false;

//     products.forEach(function(product, index) {
//         if (!found && product.id === Number(id)) {
//             products.splice(index, 1);
//         }
//     });

//     res.send('Successfully deleted product!');
// });

app.listen(3000);// sends the application to the web port 3000
console.log("server running on port 3000");// lets the user know on the console that the server is running. 