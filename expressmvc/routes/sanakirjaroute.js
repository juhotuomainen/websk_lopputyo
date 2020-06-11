/* Tämä tiedosto sisältää sanakirja-sovelluksen reitit. */
// Metodi, joka määrittää sanakirjan reittit
const express = require('express');
const app = express.Router();

const sanakirja = require('../controllers/sanakirja_controller');

// määritetään ennen varsinaisia tiedostomäärityksiä viite app..js-tiedostoon, jonka tieto on app-muuttujassa. Viite määritetään app-muuttujan kautta kutsuttavan require-metodin avulla


// ensiksi määritellään reitti, josta löytyvät kaikki sanat. Käytössä get-pyyntö
app.get('/', sanakirja.searchAll);
// suomenkielisen sanan haku, tieto tallentuu sanafi-muuttujaan. Käytössä GET-http-pyyntö
app.post('/sanafi', sanakirja.searchWordFi);
app.post('/sanaen', sanakirja.searchWordEn);
// Englanninkielisen sanan lisäysreitti
//app.post('/lisaaSana', sanakirja.lisaaSana);
// sanan poistoreitti
app.delete('/:poista', sanakirja.poistaSana);
// Sanan päivitysreitti, tehdään putilla, koska postia käytetään yleensä silloin, kun luodaan jotakin uutta (kuten käyttäjä tai sana). Tieto muuttujassa paivita.
app.put('/:paivita');

module.exports = app;
