# APIREST_nodeexpress


## Instrucciones para construir la API


Esta api esta construida en ES6(Javascript 2015) 

### Paso 1
Iniciar el comando : `npm init -y` el cuál crea un archivo PACKAGE.JSON y contiene la información general del proyecto.

### Paso 2
Instalar EXPRESS en nuestro proyecto : `npm install --save express` el cuál agrega la dependencia necesaria en el package.json y nos dice que el proyecto se ejecutará correctamente, solo si tiene la dependencia express.

### Paso 3
Configurar o añadir en el package.json y debajo de "main" : `"type":"module"` esto para indicar que usaremos en los archivos "import" como estandar ES6

### Paso 4
Instalar el NODEMON solo para desarrollo: `"npm install --save-dev nodemon"` Cuando estemos en producción no se instala, para eso se necesitará PM2.
Luego configurar en el package.json en el apartado de scripts: `"start":"nodemon <el nombre de tu archivo principal .js"` esto para que el servidor nodemon se inicia o se actualice automaticamene al momento de desarrollar.
Ahora en la consola digita:
`npm start` y tu aplicación correra con el servidor nodemon en el puerto que tu configuraste


## FUENTE
https://www.youtube.com/watch?v=l8WPWK9mS5M&t=1336s


## COMANDO PARA INICIAR
npm start
