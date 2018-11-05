const { personnes } = require('../config.json');
const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Donne de l\'aide.',
	aliases: ['aide'],
	usage: '[command name]',

	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			var titre = "*bipbip*, besoin d\'aide, ".concat(message.author.username).concat(" ?");
			/*if (message.author.tag === personnes['tibo']) {titre = titre.concat("Thibault ?")}
			if (message.author.tag === personnes['charlotte']) {titre = titre.concat("Charlotte ?")}
			if (message.author.tag === personnes['quentin']) {titre = titre.concat("Quentin ?")}
			if (message.author.tag === personnes['morel']) {titre = titre.concat("Morel ?")}
			if (message.author.tag === personnes['maxime']) {titre = titre.concat("Maxime ?")}
			if (message.author.tag === personnes['adele']) {titre = titre.concat("Adèle ?")}*/
			const embed = new Discord.RichEmbed()
		  .setTitle(titre)
		  .setColor(0x00AE86)
		  .setDescription("Voici dont je suis capable pour l'instant :")

		  .addField("MHGU :",
		    "-'wiki list' -> liste des monstres \n-'wiki <monstre>' -> lien wiki vers le monstre \n-'wikien <monstre>' -> lien vers la page anglaise du wiki\n\n ")
		  .addField("Sinon je réagis aux mots  suivants :", "allo, olala, zoe, good bot, big hands, bonne nuit.", true)

		  .addBlankField(true)
		  .addField("Autres.", "je dis coucou quand on me mentionne et j'insulte cha quand elle dit que quelque chose est nul.", true);

		  message.channel.send({embed});
			return;

		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};
