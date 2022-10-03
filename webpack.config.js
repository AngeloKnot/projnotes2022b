//el archivo de configuracion debe usar ES5

//importar un administrador de rutas de archivos 
const path = require('path');

//exportamos un objeto de configuraion
//que sera usado por el webpack
module.exports = {
    //0. Establecionedo el modo
    mode: 'production',
    //1. El archivo de entrada o indexador
    entry: "./client/index.js",
    //2. Especificar el archivo de salida
    output: {
        //2.1 Ruta absoluta de salida
        path: path.resolve(__dirname, "public"),
        //2.2 Nombre del archivo de salida
        filename: "bundle.js"
    },
}