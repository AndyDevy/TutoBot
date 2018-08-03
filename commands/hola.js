exports.run = (client, message, args, Discord) => {
	message.channel.send("Hola, " + message.author.username);
};