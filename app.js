/* Base template made by AndyDevy#9999 */

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  // Notifica a la consola que el bot está listo
  console.log(`[INFO]: ${client.user.tag} está listo. Inicializado correctamente.`);
});

client.on("message", message => {
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Definiendo los argumentos
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Procesador de comandos
  try {
    console.log("[INFO]: " + message.author.tag + " executed '" + command + "'");
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, Discord);
  } catch (err) {
    console.log("[ERROR]: '" + command + "' is not an existing command.");
    console.error("[ERROR]: " + err.message);
    message.reply("No existe ese comando!");
  }
});

client.login(config.token);