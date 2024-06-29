// const { sumar } = require("./funciones");
// console.log(sumar(1, 2));
const fs = require('node:fs/promises');
(
    async () => {
        console.log("Leyendo el primer archivo");
        const textoArchivo1 = await fs.readFile('./fichero1.txt', 'utf-8');
        console.log(textoArchivo1);
        console.log("haciendo cositas ");
        console.log("Leyendo el segundo archivo");
        const textoArchivo2 = await fs.readFile('./fichero2.txt', 'utf-8');
        console.log(textoArchivo2);
    }
)()

// Sincrono -> le linea por linea y si no termina espera que acabe para continuar(Es bloqueante)