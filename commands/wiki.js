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


  		      var monstre = args[0].capitalize()
  		        for (var i = 1; i < args.length; i++) {

  			           monstre = monstre.concat("_");
  			              if (args[i].includes("-")) {
  				                    const [a,b] = args[i].split("-");
  				                    monstre = monstre.concat(a.capitalize());
  				                    monstre = monstre.concat("-");
  				                    monstre = monstre.concat(b.capitalize());
  			                       }
  			           else{
  		                  monstre = monstre.concat(args[i].capitalize())
  			                 }
  		  }

  	      const wiki = "http://fr.mogapedia.wikia.com/wiki/".concat(monstre)
  	      message.channel.send(wiki);
        }
      }
}
