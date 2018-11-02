
const { Client, RichEmbed, Attachment } = require('discord.js');


const client = new Client();

client.on('ready', () => {
  console.log('I am ready!');
});
var compteur_parole = 0

client.on('message', message => {
	var msg = message.content.toLowerCase()
	var charlotte = "Aya_Kasai#3571"
	var quentin = false
	var tibo = "Crousty#2804"
	var morel = 'Dysnome#2882'
	var maxime = false
	var adele = false
	var BisBot = "BisBot#0164"
	
	
	//message.react(message.biscord.emojis.get('oktibo'))
	var mentions = message.mentions.users.array()
	var nbmentions = mentions.length
	for (var i=0;	i < nbmentions; i++){
			var m = mentions[i]
		if (m.tag === "BisBot#0164") {
	message.reply("coucou :)") }
		
		if (m.tag === "Crousty#2804") {
			if (compteur_parole == 3) {
				message.reply('tu parles trop.');
			compteur_parole = 0;
			}
			else {
			compteur_parole+=1;
			//message.
			}
		//message.react(':ok_hand:')
		}
	}
  //if (message.content === 't') {
	 if (msg.includes('allo')){
	
    const embed = new RichEmbed()
      .setTitle('@everyone')
      .setColor(0xFF0000)
      .setDescription(':middle_finger:');
    message.channel.send(embed);
	
  }
  
  
	if (msg.includes('olala')){
		if (message.author.tag === tibo) {message.channel.send("tu l'as dit tibo")}
		else {message.channel.send('quelle vie');}
	}
	
	if (msg.includes('nul') && (message.author.tag === charlotte)) { message.channel.send('tg cha')}
	
  	 if (msg.includes('zoe')){
    message.channel.send("**NON**");
  }
    if (message.content === 'good bot') {
		message.channel.send('hihi : ]');
        const attachment = new Attachment('http://icons.iconarchive.com/icons/svengraph/daft-punk/512/Daft-Punk-Guyman-Smile-icon.png');

        message.channel.send(attachment);
	}
	if (message.author.tag === morel && Math.random() >.99 ){ 
	message.channel.send('très drole ta blague morel (/s)')}
	if (Math.random() > .99) { message.channel.send('bip boup. Sill alive.')}
	if (Math.random() >.99) {message.channel.send('<3')}
	if (Math.random() >.99) {message.channel.send('cha t nul a smash')}
	if (Math.random() >.99) {message.channel.send('*beep in the distance*')}
	if (Math.random() >.99) {message.channel.send('Bon, on joue ? ')}
  });

client.login('NTA1MDU1MTI4NzA1OTU3ODg5.Dr0UwA.4M_6Kl4IWH4HSmKv5hC6Bje44jk');
