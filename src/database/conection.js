const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Servicios-Biomedicos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'))
    .catch(err => console.log(err));