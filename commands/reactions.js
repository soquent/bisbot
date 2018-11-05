//C'est ici pour les reactions rigolotes et mignonnes
//suffit juste de copier/coller la commande et de l'adapter à ta sauce !
const Discord = require('discord.js');
module.exports = {
    name: 'reactions',
    description: 'When i react without prefixes',
    execute(message) {
      const msg = message.content.toLowerCase();
      if (msg.includes('olala')) {

        message.channel.send('quelle vie');
      }
      if (msg.includes('nul')) {
        message.channel.send(':(');
    }
     if (msg.includes('zoe')) {

      message.channel.send("**NON**");
      }
      if (msg.includes('big hands')) {
        message.channel.send('miam')
      }
      if (msg.includes('good bot')) {
        message.react('😄');
        message.channel.send('hihi : ]');
        //message.channel.send('http://icons.iconarchive.com/icons/svengraph/daft-punk/512/Daft-Punk-Guyman-Smile-icon.png');
      }
      if (msg.includes('bonne nuit')) {
        message.reply('fait de beaux rêves !! :sleeping:');
      }
      if (msg.includes('allo')){
        const embed = new Discord.RichEmbed()
        .setTitle("Tu te crois drôle ?")
        .setDescription(":middle_finger:")
        //message.react(dqr);
        //message.react( GrdMacacaorel);
        message.channel.send({embed});
   	}
  }
}
