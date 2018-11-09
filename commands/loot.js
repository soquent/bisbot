const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'loot',
    description: 'i give one monster weaknesses',
    execute(message, args) {
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }

      const msg = message.content.toLowerCase();

  		  /*if (args[0].includes( 'talent' )|| args[0].includes('skill'))
            {message.channel.send('http://fr.mogapedia.wikia.com/wiki/MHGU_-_Liste_des_talents')}
  		  else if (args[0] === 'list'){message.channel.send(monstres.split(", ").sort().join(", "));}*/



  		      var monstre = capitalize(args[0])
  		      var prettyname = capitalize(args[0])
  		        for (var i = 1; i < args.length; i++) {
                  prettyname = prettyname.concat(" ");
  			           monstre = monstre.concat("_");
  			              if (args[i].includes("-")) {
  				                    const [a,b] = args[i].split("-");
  				                    monstre = monstre.concat(capitalize(a));
  				                    prettyname = prettyname.concat(capitalize(a));
  				                    monstre = monstre.concat("-");
  				                    prettyname = prettyname.concat("-");
  				                    monstre = monstre.concat(capitalize(b));
  				                    prettyname = prettyname.concat(capitalize(b));
  			                       }
  			           else{
  		                  monstre = monstre.concat(capitalize(args[i]))
  		                  prettyname = prettyname.concat(capitalize(args[i]));
  			                 }
  		  }

  	      const wiki = "https://monsterhunter.fandom.com/wiki/".concat(monstre)

          function wik(doc){


            const elements = ['Fire','Ice','Dragon','Thunder','Water']
            const deb = doc.indexOf('<td colspan="2" style="background-color:#3A5766; color:#ffffff; font-weight:bold; font-size:9pt; text-align:center;"><b>Monster Hunter Generations</b>');
            const fin =  doc.indexOf('<b>Threat Level');

            var doc2 = doc.substring(deb,fin);
            const deb2 = doc2.indexOf('data-src=')+9;
            const fin2 = doc2.indexOf('  	 width=');
            doc2 = doc2.substring(deb2,fin2);

              if (doc2 === "") {return "This meownster doesn't even exists !";}
              const embed = new Discord.RichEmbed()
              .setTitle("Monster : ".concat(prettyname))
              .setDescription(wiki)
              .setThumbnail(doc2)
              .addField("Weaknesse(s) : ", doc2, true)

              .setColor("RANDOM")

            return ({embed})
            }
        console.log(prettyname)
          fetch(wiki)
              .then(res => res.text())
              .then(body => message.channel.send(wik(body)))



          }

      }
