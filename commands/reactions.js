module.exports = {
    name: 'reactions',
    description: 'When i react without prefixes',
    execute(message) {
      if (msg.includes('olala')) {

        message.channel.send('quelle vie');
      }



        message.channel.send(':(');
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
  }

}
