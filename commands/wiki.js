const {liste } = require('../config.json');
module.exports = {
    name: 'wiki',
    description: 'link to mhgu wiki',
    execute(message, args) {
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }
      const msg = message.content.toLowerCase();

  		  if (args[0].includes( 'talent' )|| args[0].includes('skill'))
            {message.channel.send('http://fr.mogapedia.wikia.com/wiki/MHGU_-_Liste_des_talents')}

  		  else if (args[0] === 'list'){message.channel.send(liste_monstres);}

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
  	      message.channel.send(wiki);
        }
      }
}
