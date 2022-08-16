const express = require('express');
const app = express();
const cors = require('cors');

require('./database/conection');

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api', require('./routes/user_controller'));

app.listen(3000);
console.log("Server running on port", 3000);