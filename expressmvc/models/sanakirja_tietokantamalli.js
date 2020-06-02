const mongoose = require('mongoose');
// tallennetaan tieto mongo-tietokannan skeemasta Schema-muuttujaan ja yhtäsuuruusmerkin oikealle puolelle kirjoitetaan mongoose.Schema (mongoose-kirjaston Schema-metodia).
const Schema = mongoose.Schema;
// otetaan Grades-alidokumentti käyttöön, tieto muuttujassa gradeschema.
//const gradeSchema = require('./Grade');
// Luodaan uusi olio SanakirjaSchema Schema-luokasta
const SanakirjaSchema = new Schema ({sana: {type: String, required: true, unique: false}, 
// Koska mongoose-kirjastojen sääntöjen ja samalla mongodb-skeemojen määritys tapahtuu oliopohjaisesti, avaimen (ennen kaksoispistettä tulevan ominaisuuden) jälkeen olevan arvon ominaisuudet ovat aaltosulkeissa (JavaScript tunnistaa ne olioksi). Ensin kirjoitetaan nimi-kenttä: tyyppi: merkkijono (String), vaadittu (reguired) =true ja yksilöivyys (unique): true
kieli: {type: String, required: true}, 

// kuvaus: type (tyyppi): String (merkkijono), required (vaadittu): true eikä yksilöivyysmäärettä.
kuvaus: {type: String, required: true}
});
/* Tehdään malli (model) mongoosen avulla. Tieto tallennetaan yhtäsuuruusmerkin vasemmalla puolella olevaan muuttujaan, jotta ohjelma muistaisi sen.  Yhtäsuuruusmerkin oikealla puolella siis mongoose-kirjaston model-metodin kutsu (mongoose.model),  jonka sisässä ensin heittomerkeissä mallin nimi, pilkku ja sen jälkeen käytettävän skeeman nimi.*/
const Sanakirja = mongoose.model('Sanakirja', SanakirjaSchema);
// viedään moduuli Sanakirja ulos (export)
module.exports = Sanakirja;
