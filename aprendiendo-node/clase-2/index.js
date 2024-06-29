// Los diferentes módulos de node
// console.log(process.argv);
// console.log(process.env);

// -------   OS   ----------
const os = require('node:os')
// Nos devuelve el sistema operativo que tenemos en el equipo
// console.log(os.type());

// console.log(os.homedir());

// console.log(os.uptime());

// console.log(os.userInfo());

// -------- setTimeout ---------
const mostrarTema = (tema) => {
    console.log(`Estoy aprendiendo ${tema}`);
};

setTimeout(mostrarTema, 2000, 'Node.js');

const sumar = (a, b) => {
    console.log(a + b);
};

setTimeout(sumar, 1000, 3, 5);

