// Mongoose käyttöön
const mongoose = require('mongoose');
// viittaus sanakirja-malliin (model)
const Sanakirja = require('./models/Sanakirja_tietokantamalli');
// dbconnection.js-tiedosto (tiedokannan yhdistäminen) käyttöön. Tieto dbcon-muuttujassa.
const dbcon = require('./config/database.config.js');
// lisaystiedosto
const sanaObjekti = new Sanakirja({sana: 'kissa', kieli: 'fi', kuvaus: 'Kissaeläimiin kuuluva eläin.'});
// tallennetaan sana tietokantaan.
sanaObjekti.save()
// kaapataan virhe
.catch((Error) => {
// tulostetaan virhe konsoliin.
console.log('Yhteydenotossa tapahtui virhe. Syy oli' + Error);})
// then-osa, jossa callback-funktio then-metodin parametrina, kasittelee virheen.
.then (() => {
// katkaistaan yhteys (mongoose.connection.close).
mongoose.connection.close();
// tulostetaan yhteydestä viesti konsoliin.
console.log('Opiskelija lisättiin tietokantaan.')});
// katkaistaan yhteys tietokantaan



