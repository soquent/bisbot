//Copie une ligne et remplace ce qui est entre les ' ' par le ptit message random
//.999 -> une chance sur mille de s'envoyer, .99-> une chance sur 100, etc....

module.exports = {
    name: 'reactions',
    description: 'When i react without prefixes',
    execute(message) {
      if (Math.random() > .999) { message.channel.send('bip boup. Sill alive.')}
      if (Math.random() >.999) {message.channel.send('<3')}
      if (Math.random() >.999) {message.channel.send('c par où la festiv ??')}
      if (Math.random() >.999) {message.channel.send('*beep in the distance*')}
      if (Math.random() >.999) {message.channel.send('Bon, on joue ? ')}
      if (Math.random() >.999) {message.channel.send('ALLO ?????')}
      if (Math.random() >.999) {message.channel.send('achete pano bouftou')}
      if (Math.random() >.999) {message.channel.send('uwu')}
      if (Math.random() >.999) {message.channel.send('OwO')}
      });
