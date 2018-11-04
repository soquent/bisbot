const fs = require('fs');
const Discord = require('discord.js');
const { prefix, personnes } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('I\'m ready !');
	client.channels.array()[6].send("bip boup. Mise à jour réussie. Je suis opérationnel ! :trumpet:")

});

client.on('message', message => {
	if (!message.content.startsWith(prefix) {client.commands.get('reactions').execute(message, args);;}

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('oopsie la commande ne s\'est pas déroulée comme prévue');
	}

});





client.login(process.env.BOT_TOKEN);
