const express = require('express');
const path = require('path');

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/api-routes.js')(app); 
require('./routes/html-routes.js')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
