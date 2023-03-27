/* NO OLVIDAR INSTALAR NODEMON Y MODIFICAR PACKAGE .JSON */


import express from 'express';
import bodyParser from 'body-parser';

//RUTAS IMPORTADAS
// user => se antepone al ROUTES porque ya lo pone implicitamente en el USER.JS
import usersRoutes from './routes/users.js'


// INICIA LA APLICACIÓN Y EL PUERTO
const app = express();
const PORT = 5000;


//MIDLEWARE
app.use(bodyParser.json());

// RUTAS
// ESTA RUTA ES LA QUE MANDA GENERAL
app.use('/users',usersRoutes);


app.get('/', ( req, res ) => res.send('Hola desde la página principal'));




// INICIO DEL SERVIDOR
app.listen(PORT,() => console.log(`Server running on port: http://localhost:${PORT}`))


