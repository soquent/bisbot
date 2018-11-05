//Touchez pas à ça, sinon ça casse tout

const fs = require('fs');
const Discord = require('discord.js');
//const {prefix} = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
	const edbisbot = let guild = client.channels.find(channel => channel.name === "élevage-du-bisbot");
	edbisbot.send("bip boup. Mise à jour réussie. Je suis opérationnel ! :trumpet:");
});

client.on('message', message => {
	if (message.author.bot) {return;}

	client.commands.get('reactions').execute(message);

	const args = message.content.slice().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('J\'peut pas faire ça en dm.....');
	}

	if (command.args && !args.length) {
		let reply = `Donne moi des arguments stp, ${message.author}!`;

		if (command.usage) {
			reply += `\nl\'utilisation correcte serait \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('olala bip boup quelque chose s\'est mal passé, cette commande est probablement mal codée......');
	}
});

client.login(process.env.BOT_TOKEN);
