//The server is the tool that allows the flow of information from the "front-end" to the "back-end"
//Via "routes" from the API. Those routes will be defined below  using express.js initialized as "app" variable.

const express = require('express'); //brings in express to our entry file begins building server
const connectDB = require('./Backend/config/db'); //brings in logic from db.js

const app = express(); //initializes app variable with express

app.get('/', (req, res) => res.send('API RUNNING')); //Checks if API is running

//

const PORT = process.env.PORT || 5000; //creates environment variable for deployment interface || use local port

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // verifies that server is running on portapp.use('api/users', require('./routes/api/users'));
