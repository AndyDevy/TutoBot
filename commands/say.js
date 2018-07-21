let config = require('./../config.json');

exports.run = (message, client, args, Discord) => {
	// Estableciendo argumentos
	var content = meesage.replace(config.prefix, '');
	console.log(content);

	// Tomar el mensaje completo
	// Remover el prefijo
	// Quitar espacios de exceso
}