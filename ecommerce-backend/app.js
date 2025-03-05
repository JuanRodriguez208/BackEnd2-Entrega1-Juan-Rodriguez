const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Rutas
const authRoutes = require('./routes/authRoutes');
app.use('/api/sessions', authRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.log('Error de conexión a MongoDB:', error));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
