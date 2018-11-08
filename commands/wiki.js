const fetch = require('node-fetch');
const Discord = require('discord.js');

const {monstres} = require('../config.json');
module.exports = {
    name: 'wiki',
    description: 'Je donne divers liens vers le wiki de MHGU',
    execute(message, args) {
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }

      const msg = message.content.toLowerCase();

  		  if (args[0].includes( 'talent' )|| args[0].includes('skill'))
            {message.channel.send('http://fr.mogapedia.wikia.com/wiki/MHGU_-_Liste_des_talents')}

  		  else if (args[0] === 'list'){message.channel.send(monstres.split(", ").sort().join(", "));}

        else{

  		      var monstre = capitalize(args[0])
  		        for (var i = 1; i < args.length; i++) {

  			           monstre = monstre.concat("_");
  			              if (args[i].includes("-")) {
  				                    const [a,b] = args[i].split("-");
  				                    monstre = monstre.concat(capitalize(a));
  				                    monstre = monstre.concat("-");
  				                    monstre = monstre.concat(capitalize(b));
  			                       }
  			           else{
  		                  monstre = monstre.concat(capitalize(args[i]))
  			                 }
  		  }

  	      const wiki = "http://fr.mogapedia.wikia.com/wiki/".concat(monstre)

          function wik(doc){

            const elements = ['Feu','Glace','Dragon','Foudre','Eau']
            const deb = doc.indexOf('<h3 class="pi-data-label pi-secondary-font">Faible contre</h3>');
            const fin =  doc.indexOf('<h3 class="pi-data-label pi-secondary-font">Habitat(s)</h3>');

            var sortie = ""
            const doc2 = doc.substring(deb,fin);
            for (var i=0; i < elements.length; i++){

              if (doc2.includes(elements[i])){
                sortie = sortie.concat(elements[i]+"\n")
                }
              }
              const embed = new Discord.RichEmbed()
              .setTitle("Monstre : ".concat(args.split(",").join(" ")))
              .setDescription(wiki)
              .addField("Faiblesses : ", sortie, true)
              .setImage('https://vignette.wikia.nocookie.net/mogapedia/images/1/16/Status_Effect-Waterblight_MH4_Icon.png/revision/latest/scale-to-width-down/20?cb=20140625220940&path-prefix=fr');
              .setColor("RANDOM");
              /*const dqr = message.guild.emojis.find(emoji => emoji.name === "dqr");
              const GrdMacacaorel = message.guild.emojis.find(emoji => emoji.name === "GrdMacacaorel");
              message.react(dqr.id);
              message.react(GrdMacacaorel.id);
              message.channel.send({embed});*/
            return ({embed})
            }
          fetch(wiki)
              .then(res => res.text())
              .then(body => message.channel.send(wik(body)))



          }
        }
      }
