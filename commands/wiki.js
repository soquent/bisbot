module.exports = {
    name: 'wiki',
    description: 'link to mhgu wiki',
    execute(message, args) {
      const msg = message.content.toLowerCase();

  		  if (mots[0].includes( 'talent' )|| mots[0].includes('skill')){message.channel.send('http://fr.mogapedia.wikia.com/wiki/MHGU_-_Liste_des_talents')}

  		  if (mots[0] === 'list'){message.channel.send(liste_monstres);}

        else{


  		      var monstre = mots[0].capitalize()
  		        for (var i = 1; i < mots.length; i++) {

  			           monstre = monstre.concat("_");
  			              if (mots[i].includes("-")) {
  				                    const [a,b] = mots[i].split("-");
  				                    monstre = monstre.concat(a.capitalize());
  				                    monstre = monstre.concat("-");
  				                    monstre = monstre.concat(b.capitalize());
  			                       }
  			           else{
  		                  monstre = monstre.concat(mots[i].capitalize())
  			                 }
  		  }

  	     const wiki = "http://fr.mogapedia.wikia.com/wiki/".concat(monstre)
  	      message.channel.send(wiki);
        }
      }
}
