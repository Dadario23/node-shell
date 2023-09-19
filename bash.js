const commands = require("./commands");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const userInput = data.toString().trim();
  const userInputArray = userInput.split(" ");

  const comando = userInputArray[0];
  const argumento = userInputArray.slice(1);

  if (comando === "pwd") {
    commands.pwd();
  } else if (comando === "date") {
    commands.date();
  } else if (comando === "ls") {
    commands.ls();
  } else if (comando === "echo") {
    commands.echo(argumento);
  } else if (comando === "cat") {
    commands.cat(argumento);
  } else if (comando === "head") {
    commands.head(argumento);
  } else if (comando === "tail") {
    commands.tail(argumento);
  } else {
    console.log("Ingrese un comando válido");
  }

  process.stdout.write("prompt > ");
});
