const fs = require("fs");
const readline = require("readline");

module.exports = {
  pwd: function () {
    console.log(process.argv[0]);
  },
  date: function () {
    console.log(new Date());
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function (argumento) {
    if (argumento.length === 0) {
      console.log("Escriba un texto");
    } else {
      const mensaje = argumento.join(" ");
      console.log(mensaje);
    }
  },
  cat: function (argumento) {
    fs.readFile(`${__dirname}/${argumento}`, "utf8", (error, datos) => {
      if (error) throw error;
      console.log(datos);
    });
  },
  head: function (argumento) {
    const archivoStream = fs.createReadStream(`${__dirname}/${argumento}`);
    const rl = readline.createInterface({
      input: archivoStream,
      output: process.stdout,
    });
    let contador = 0;
    rl.on("line", (linea) => {
      contador++;

      if (contador === 5) {
        rl.close();
      }
    });
  },
  tail: function (argumento) {
    const archivoStream = fs.createReadStream(`${__dirname}/${argumento}`);
    const rl = readline.createInterface({
      input: archivoStream,
    });

    const lineas = [];

    rl.on("line", (linea) => {
      lineas.push(linea);
      if (lineas.length > 5) {
        lineas.shift();
      }
    });

    rl.on("close", () => {
      lineas.forEach((linea) => {
        console.log(linea);
      });
    });
  },
};
