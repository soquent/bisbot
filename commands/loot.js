const fetch = require('node-fetch');
const Discord = require('discord.js');
const alphabet = "azertyuiopqsdfghjklmwxcvbn +%1234567890"
//const

module.exports = {
    name: 'loot',
    description: 'i give loot',
    execute(message, args) {
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }
      const msg = message.content.toLowerCase();

  		  /*if (args[0].includes( 'talent' )|| args[0].includes('skill'))
            {message.channel.send('http://fr.mogapedia.wikia.com/wiki/MHGU_-_Liste_des_talents')}

  		  else if (args[0] === 'list'){message.channel.send(monstres.split(", ").sort().join(", "));}*/



  		      var monstre = args[0]
  		      var prettyname = capitalize(args[0])
  		        for (var i = 1; i < args.length; i++) {
                  prettyname = prettyname.concat(" ");
  			           monstre = monstre.concat("-");
  			              if (args[i].includes("-")) {
  				                    const [a,b] = args[i].split("-");
  				                    monstre = monstre.concat(a);
  				                    prettyname = prettyname.concat(capitalize(a));
  				                    monstre = monstre.concat("-");
  				                    prettyname = prettyname.concat("-");
  				                    monstre = monstre.concat(b);
  				                    prettyname = prettyname.concat(capitalize(b));
  			                       }
  			           else{
  		                  monstre = monstre.concat(capitalize(args[i]))
  		                  prettyname = prettyname.concat(capitalize(args[i]));
  			                 }
  		  }

  	      const wiki = "https://mhworld.kiranico.com/monster/".concat(monstre)
          message.channel.send(wiki)
          function wik(doc){

            const deb = doc.indexOf('<h5>High Rank</h5>');
            const fin =  doc.indexOf('<h4 class="card-header">Barroth weapons and armor</h4>');
            const corps = doc.substring(deb,fin)
            var sortie = ""
            for(var j=0; j<corps.length;j++ ){
              message.channel.send('2')
              const tab = corps.split('<td rowspan=')
              for (var k = 0;k<tab.length;k++){
                message.channel.send('3')
                var bout = tab[k]
                var titre = "**"
                var pointeur = 4
                var lettre = bout.charAt(pointeur);
                while (alphabet.includes(lettre)){
                  message.channel.send('5')
                  titre.concat(lettre);
                  pointeur++;

                }
                message.channel.send(titre)
                message.channel.send('1')
                titre.concat('**\n')
                sortie.concat(titre)
              }
            }
            message.channel.send(sortie)
            return sortie
            //  if (sortie === "") {return "This meownster doesn't even exists !";}


                /*const embed = new Discord.RichEmbed()
                .setTitle("Monster : ".concat(prettyname))
                .setDescription(wiki)
                .setThumbnail(doc_thumb)
              .addField("Weaknesse(s) : ", sortie, true)
              .setColor("RANDOM")

            return ({embed})*/
          }
        console.log(prettyname)
          fetch(wiki)
              .then(res => res.text())
              .then(body => message.channel.send(wik(body)))



          }

      }
