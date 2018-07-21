exports.run = (message, client, args, Discord) => {
	// Estableciendo argumentos
	const command = 'tuto!say';
	let content = message.content.slice().trim();

	message.channel.send(content);
};

/*
	const command = 'z-sugerir';
  	const content = message.content.slice(command.length).trim();
 */