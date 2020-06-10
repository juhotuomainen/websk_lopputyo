/* Tämä tiedosto sisältää sanakirja-sovelluksen reitit. */
// Metodi, joka määrittää sanakirjan reittit
const appi = require('../app.js');
// reitti oppilaisiin


module.exports = (app) => {
// määritetään ennen varsinaisia tiedostomäärityksiä viite app..js-tiedostoon, jonka tieto on app-muuttujassa. Viite määritetään app-muuttujan kautta kutsuttavan require-metodin avulla


// ensiksi määritellään reitti, josta löytyvät kaikki sanat. Käytössä get-pyyntö
//app.get('/:sanakirja', app.searchAll);
// suomenkielisen sanan haku, tieto tallentuu sanafi-muuttujaan. Käytössä GET-http-pyyntö
app.get('sanakirja/:sanafi', app.searchWordFi);
// Englanninkielisen sanan hakureitti. HTTP-verbinä get, koska kysymys on  sanan hausta.
app.get('/sanakirja/:sanaen', app.searchWordEn);
// Sanan lisäysreitti. HTTP-verbinä POST, koska reitti on suojattu salasanalla.
app.post('/lisaaSana', app.lisaaSana);
// sanan poistoreitti. HTTP-verbinä DELETE, koska se poistaa tietynn asian sitä pyydettäessä. Toinen parametri sulkujen sisällä on metodi, jota kutsutaan (tässä tapauksessa poistaSana).
app.delete('/:poista', app.poistaSana);
// Sanan päivitysreitti, tehdään putilla, koska postia käytetään yleensä silloin, kun luodaan jotakin uutta (kuten käyttäjä tai sana). Tieto muuttujassa paivita.
app.put('/sanakirja/:paivita', app.paivitaSana);
};
