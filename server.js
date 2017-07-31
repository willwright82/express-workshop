const express = require('express');
const formidable = require('express-formidable');
const app = express();

//app.get('/', (request, response) => {
  //response.send('Hello World');
//});

//app.get('/node', (request, response) => {
  //response.send('Yup, that is me!');
//});

//app.get('/cyf', (request, response) => {
  //response.send('Yay CodeYourFuture!');
//});

// Serve Node Girls CMS from /public
app.use(express.static('public'));

app.use(formidable());

app.post('/create-post', (request, response) => {
  //response.send('Yay CodeYourFuture!');
  console.log(request.fields);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000--Ready to accept requests!');
});
