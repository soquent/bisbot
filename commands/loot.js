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
          /*function wik(doc){

            const deb = doc.indexOf('<h5>High Rank</h5>');
            const fin =  doc.indexOf('<h4 class="card-header">Barroth weapons and armor</h4>');

            var sortie = ""
            for(var j=0, )

              if (sortie === "") {return "This meownster doesn't even exists !";}
              if (Math.random() >.999) {sortie = sortie.concat("Also, this monster seems weak to Death :3")}


              const deb2 = doc.indexOf('<td colspan="2" style="background-color:#3A5766; color:#ffffff; font-weight:bold; font-size:9pt; text-align:center;"><b>Monster Hunter Generations</b>');
              const fin2 =  doc.indexOf('<b>Threat Level');
              var doc_thumb = doc.substring(deb2,fin2); //contains the thumbnail
              const deb3 = doc_thumb.indexOf('data-src=')+10;
              const fin3 = doc_thumb.indexOf('  	 width=')-1;
              doc_thumb = doc_thumb.substring(deb3,fin3);

                const embed = new Discord.RichEmbed()
                .setTitle("Monster : ".concat(prettyname))
                .setDescription(wiki)
                .setThumbnail(doc_thumb)
              .addField("Weaknesse(s) : ", sortie, true)
              .setColor("RANDOM")

            return ({embed})*/

        console.log(prettyname)
          fetch(wiki)
              .then(res => res.text())
              .then(body => message.channel.send(wik(body)))



          }

      }
