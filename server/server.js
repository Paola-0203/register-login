import express from 'express'; // Importación de módulos ES6
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.js';
import cors from 'cors';
const app = express();
const port = 9000;

//middlewares
app.use(cors({
  origin: 'http://localhost:3000', // URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true // Permitir cookies si es necesario
}));
app.use(express.json());
app.use("/api", userRoutes);

//rutas
app.get('/api', (req, res) => {
  res.send('Hello World');
});


// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Conexión a la base de datos establecida');
    }).catch(err => console.log(err));


app.listen(9000, () => {        
  console.log('Server is running on port ', port);
});

