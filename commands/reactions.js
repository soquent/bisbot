//C'est ici pour les reactions rigolotes et mignonnes
//suffit juste de copier/coller la commande et de l'adapter à ta sauce !
const Discord = require('discord.js');
const { personnes,id,csmiley } = require('../config.json');

module.exports = {
    name: 'reactions',
    description: 'Réactions aux messages sans préfixes.',
    execute(message) {

      const msg = message.content.toLowerCase();

      if(message.isMentioned(id['bisbot'])){
        message.channel.send(`Coucou ${message.author} :blush: `)
      }

      if (msg.includes('olala')) {

        message.channel.send('quelle vie');
      }
      if (msg.includes('nul') && message.author.id === id['charlotte']) {
        message.channel.send('Je suis désolé :(');

    }
      if (msg.includes('zoe')) {

      message.channel.send("**NON**");
      }
      if (msg.includes('big hands')) {
        message.channel.send('miam')
      }
        if (msg.includes('amel')) {
        message.channel.send('je dors toute seule')
      }
      if (msg.includes('good bot')) {
        message.react('😄');
        message.channel.send('hihi : ]');
        //message.channel.send(`${'http://icons.iconarchive.com/icons/svengraph/daft-punk/512/Daft-Punk-Guyman-Smile-icon.png'}`);
      }
      if (msg.includes('bonne nuit')) {
        message.channel.send(`fait de beaux rêves ${message.author} !! :sleeping:`);
      }


      if (msg.includes('attaque éclair')) {
        message.channel.send(':cloud_lightning: :cloud_lightning: :cloud_lightning: \n');
      }


      if (msg.includes('allo')){

        const embed = new Discord.RichEmbed()
        .setTitle("moshi moshi")
        .setDescription(":telephone:")
        .setColor(0xFA0000);
        const dqr = message.guild.emojis.find(emoji => emoji.name === "dqr");
        const GrdMacacaorel = message.guild.emojis.find(emoji => emoji.name === "GrdMacacaorel");
        message.react(dqr.id);
        message.react(GrdMacacaorel.id);
        message.channel.send({embed});
   	}
  }
}
