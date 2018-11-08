const fetch = require('node-fetch');

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

          var content;
          fetch(wiki)
              .then(res => res.text())
              //.then(body => console.log(body));


              .then(body => message.channel.send(body.substring(1,100)))
              message.channel.send(wiki);
              /*const elements = ['Feu','Glace','Dragon','Foudre','Eau']
              const deb = content.indexOf('<h3 class="pi-data-label pi-secondary-font">Faible contre</h3>');
              const fin =  content.indexOf('<h3 class="pi-data-label pi-secondary-font">Habitat(s)</h3>');
              const sortie = ""
              content = content.substring(deb,fin);
              for (var i=0; i < elements.length; i++){

                if (content.includes(elements[i])){
                  sortie = sortie.concat(elements[i]+", ")
                }
                }
                message.channel.send(sortie)*/

          }
        }
      }
