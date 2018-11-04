
const Discord = require('discord.js');
const charlotte = "Aya_Kasai#3571"
const quentin = "kent1#9038"
const tibo = "Crousty#2804"
const morel = 'Dysnome#2882'
const maxime = "Kizma_#5629"
const adele = "adeleflament#6481"
const BisBot = "BisBot#0164"
const elevage_bisbot = 0
const monstres = "Apceros, Aptonoth, Basarios, Bullfango, Cephalos, Cephadrome, Fatalis, Fatalis Pourpre, Felyne, Gendrome, Genprey, Gravios, Hornetaur, Iodrome, Ioprey, Kelbi, Khezu, Kirin, Lao-Shan Lung, Melynx, Mosswine, Plesioth, Rathalos, Rathalos d'argent, Rathian, Rathian d'or, Velocidrome, Velociprey, Vespoid, Yian Garuga, Yian Kut-Ku, Anteka, Akantor, Blango, Blangonga, Bulldrome, Ceanataur, Chameleos, Ceanataur Shogun, Conga, Congalala, Fatalis Blanc, Giaprey, Giadrome, Grand Foudrinsecte, Gypceros, Hermitaur, Hermitaur Daimyo, Kushala Daora, Lavasioth, Nargacuga, Popo, Rajang, Rajang Doré, Remobra, Teostra, Tigrex, Ukanlos, Alatreon, Amatsu Magatsuchi, Agnaktor, Altaroth, Arzuros, Barioth, Barroth, Bnahabra, Brachydios, Deviljho, Deviljho Affamé, Diablos, Duramboros, Gargwa, Jaggi, Jaggia, Lagiacrus, Lagombi, Ludroth, Ludroth Royal, Nibelsnarf, Rhenoplos, Slagtoth, Uragaan, Uroktor, Volvidon, Zinogre, Arzuros Crâne-ardent, Astalos, Brachydios Critique, Gammoth, Glavenus, Glavenus Lame-chaos, Gore Magala, Gore Magala Chaos, Grand Maccao, Hermitaur Poing-fer, Kecha Wacha, Konchu, Lagombi Maître-neige, Larinoth, Moofah, Maccao, Malfestio, Mizutsune, Najarala, Nakarkos, Nargacuga Vent-acier, Nerscylla, Rathalos Roi-enfer, Rathian Reine-poison, Reine Seltas, Seltas, Seregios, Shagaru Magala, Tetsucabra, Tetsucabra Brise-roc, Tigrex Griffe-sombre, Uragaan Roi-cristal, Yian Garuga Œil-mort, Zamtrios, Zamite, Zinogre Feu-du-ciel."
const array_monstres = monstres.split(", ")
array_monstres.sort()
const liste_monstres = array_monstres.join(", ")


const client = new Discord.Client(); 


String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
		}

client.on('ready', () => {
	//const bis = new Channel(client,elevage_bisbot)
	//const bis = client.channels.find('TextChannel','507693816531386379');
	var chans = client.channels.array()
	var nbChans = chans.length
	for (var i=0;	i < nbChans; i++){
		var c = chans[i]
		if (c.id === '507693816531386379') {c.send("bip boup. Mise à jour réussie. Je suis opérationnel ! :trumpet:")
			//elevage_bisbot = c
		}
	//elevage_bisbot.send("bip boup. Mise à jour réussie.")
	}

    console.log('I am ready!');
});



client.on('message', message => {
	var msg = message.content.toLowerCase()
	//message.react(message.biscord.emojis.get('oktibo'))
	var mentions = message.mentions.users.array()
	var nbmentions = mentions.length
	 
	for (var i=0;	i < nbmentions; i++){
			var m = mentions[i]
		if (m.tag === "BisBot#0164") {
	message.reply("coucou :)") }	
	}
	
	
	
	//if (msg.includes('faiblesse')) { var shell = WScript.CreateObject("WScript.Shell");
	//shell.Run("python get_faiblesses.py");}
  //if (message.content ===  't') {
	  mots = msg.split(" ");
  
	  if(mots[0] === 'wikien') {
		  
		  const monstre = mots[1]
		  const wiki = "https://monsterhunter.fandom.com/wiki/".concat(monstre)
			message.channel.send(wiki);
	  }
	  if(mots[0] === 'wiki'){
		  if (mots[1].includes( 'talent' )|| mots[1].includes('skill')){message.channel.send('http://fr.mogapedia.wikia.com/wiki/MHGU_-_Liste_des_talents')} 
		  
		  else if (mots[1] === 'list'){message.channel.send(liste_monstres);}
		  else{
			  
		  var monstre = mots[1].capitalize()
		  for (var i = 2; i < mots.length; i++) {
			
			monstre = monstre.concat(" ");
			if (mots[i].includes("-")) {
				const [a,b] = mots[i].split("-");
				monstre = monstre.concat(a.capitalize())
				monstre = monstre.concat("-")
				monstre = monstre.concat(b.capitalize())
			}
			else{
		  monstre = monstre.concat(mots[i].capitalize())
			}
		  }
		  
		monstre = monstre.replace(' ','_');
		  const wiki = "http://fr.mogapedia.wikia.com/wiki/".concat(monstre)
	  message.channel.send(wiki);
		  }

  }
	
	 if (msg.includes('allo')){
		 
    const embed = new Discord.RichEmbed()
  .setTitle("Tu te crois drôle ?")
  //.setColor(#ebb329)
  .setDescription(":middle_finger:")
 
  message.channel.send({embed});
	 }

	if (msg.includes('help')){
	const dqr = client.emojis.find(emoji => emoji.name === "dqr");
		
	const GrdMacacaorel = client.emojis.find(emoji => emoji.name === "GrdMacacaorel");
		message.reply(`${dqr} ${GrdMacacaorel}`)
	var titre = "*bipbip*, besoin d\'aide, "
	if (message.author.tag === tibo) {titre = titre.concat("thibault ?")}
	if (message.author.tag === charlotte) {titre = titre.concat("charlotte ?")}
	if (message.author.tag === quentin) {titre = titre.concat("quentin ?")}
	if (message.author.tag === morel) {titre = titre.concat("morel ?")}
	if (message.author.tag === maxime) {titre = titre.concat("maxime ?")}
	if (message.author.tag === adele) {titre = titre.concat("adèle ?")}
	const embed = new Discord.RichEmbed()
  .setTitle(titre)
  .setColor(0x00AE86)
  .setDescription("Voici dont je suis capable pour l'instant :")
  
  .addField("${GrdMacacaorel} MHGU ${dqr}",
    "-wiki list -> liste des monstres \n-'wiki <monstre>' -> lien wiki vers le monstre \n-'wikien <monstre>' -> lien vers la page anglaise du wiki\n\n ")
  .addField("Sinon je régais aux mots  suivants :", "allo, olala, zoe, good bot, big hands, bonne nuit.", true)

  .addBlankField(true)
  .addField("Autres.", "je dis coucou quand on me mentionne et j'insulte cha quand elle dit que quelque chose est nul.", true);
 
  message.channel.send({embed});
	
  }
	//if (msg.includes('trig')){message.channel.send('pls trigger '}

	if (msg.includes('id du salon')){message.channel.send(String(message.channel.id))}
  
	if (msg.includes('olala')){
		if (message.author.tag === tibo) {
		///	const opt = MessageOptions()
		//	opt.tts = true
			
			message.channel.send("tu l'as dit tibo")}
		else {message.channel.send('quelle vie');}
	}
	
	if (msg.includes('nul') && (message.author.tag === charlotte)) {
		opt = MessageOptions()
		opt.tts = true
		message.channel.send('tg cha',opt)}
	
  	 if (msg.includes('zoe')){
    message.channel.send("**NON**");
  }
	if (msg.includes('big hands')){message.channel.send('miam')}
    if (msg.includes('good bot')) {
		message.channel.send('hihi : ]');
        const attachment = new Discord.Attachment('http://icons.iconarchive.com/icons/svengraph/daft-punk/512/Daft-Punk-Guyman-Smile-icon.png');
        message.channel.send(attachment);
	}
	if (msg.includes('bonne nuit')) { message.reply('fait de beaux rêves !! :sleeping:')}
	if (message.author.tag === morel && Math.random() >.99 ){ 
	message.channel.send('très drole ta blague morel (/s)')}
	if (Math.random() > .999) { message.channel.send('bip boup. Sill alive.')}
	if (Math.random() >.999) {message.channel.send('<3')}
	if (Math.random() >.999) {message.channel.send('cha t nul a smash')}
	if (Math.random() >.999) {message.channel.send('*beep in the distance*')}
	if (Math.random() >.999) {message.channel.send('Bon, on joue ? ')}
	if (Math.random() >.999) {message.channel.send('ALLO ?????')}
	if (Math.random() >.999) {message.channel.send('achete pano bouftou')}
	if (Math.random() >.999) {message.channel.send('uwu')}
	if (Math.random() >.999) {message.channel.send('OwO')}
  });

client.login('NTA1MDU1MTI4NzA1OTU3ODg5.Dr0UwA.4M_6Kl4IWH4HSmKv5hC6Bje44jk');
