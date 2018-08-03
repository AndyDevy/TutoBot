exports.run = (client, message, args, Discord) => {
	const embed {
	  "title": "Esto es un embed",
	  "description": "Hola",
	  "color": 6992362,
	  "footer": {
	    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
	    "text": "Este es el footer"
	  },
	  "thumbnail": {
	    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
	  },
	  "author": {
	    "name": "TutoBot",
	    "url": "https://discordapp.com",
	    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
	  },
	  "fields": [
	    {
	      "name": "Campo 1",
	      "value": "Lorem ipsum dolor sit amet"
	    },
	    {
	      "name": "Campo 2",
	      "value": "Lorem ipsum dolor sit amet"
	    },
	    {
	      "name": "Campo 3",
	      "value": "Lorem ipsum dolor sit amet"
	    }
	  ]
	};
	message.channel.send({ embed });
};