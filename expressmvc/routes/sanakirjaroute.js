/* Tämä tiedosto sisältää sanakirja-sovelluksen reitit. */
// Metodi, joka määrittää sanakirjan reittit
const express = require('express');
const app = express.Router();

const sanakirja = require('../controllers/sanakirja_controller');

// määritetään ennen varsinaisia tiedostomäärityksiä viite app..js-tiedostoon, jonka tieto on app-muuttujassa. Viite määritetään app-muuttujan kautta kutsuttavan require-metodin avulla


// ensiksi määritellään reitti, josta löytyvät kaikki sanat. Käytössä get-pyyntö
app.get('/', (req, res) => {
res.render('sanakirjasivu');
});

app.get('/lisaasana', (req, res) => {
res.render('lisayssivu');
});

app.get('/paivitasana', (req, res) => {
res.render('paivityssivu');
});

app.get('/poistasana', (req, res)=>{
res.render('poistosivu');
});

/* Kaikkien sanojen haku. Mennään REST APIssa osoitteeseen /kaikkisanat. Tämä on samalla ensimmäinen app-olion get-metodille annetuista parametreista (heittomerkkien sisään kirjoitettu merkkijono). Toisena parametrina on app-olion kautta kutsuttavan metodin searchAll alustus,jotta Express osaa käyttää sitä kaikkien sanojen hakureittiä käytettäessä. */
app.get('/kaikkisanat', sanakirja.searchAll);
/* suomenkielisen sanan haku, tieto tallentuu sanafi-muuttujaan. Käytössä POST-http-verbi, koska se valittiin tilanteeseen soveltuvuuden vuoksi. Toimen parametri kertoo, että toiminnon suoritukseen käytetään sanakirja-olion kautta kutsuttavaa metodia searchWordFi. */
app.post('/sanafi', sanakirja.searchWordFi);
// Englanninkielisen sanan haku, tieto haetaan (REST APIn avulla) paikasta sanaen. Käytössä POST-http-pyyntö. Toimen parametri kertoo, että toiminnon suoritukseen käytetään sanakirja-olion kautta kutsuttavaa metodia searchWordFi.
app.post('/sanaen', sanakirja.searchWordEn);
/* Sanan lisäys. Mennään REST APIssa osoitteeseen /lisaasana. Tämä on samalla ensimmäinen app-olion get-metodille annetuista parametreista (heittomerkkien sisään kirjoitettu merkkijono). Toisena parametrina on app-olion kautta kutsuttavan metodin addWord alustus,jotta Express osaa käyttää sitä sanojen lisäysreittiä käytettäessä. */
app.post('/lisaasana', sanakirja.addWord);
/* Sanan  päivitys. Mennään REST APIssa osoitteeseen /paivitasana. Tämä on samalla ensimmäinen app-olion get-metodille annetuista parametreista (heittomerkkien sisään kirjoitettu merkkijono). Toisena parametrina on app-olion kautta kutsuttavan funktion updateWord alustus,jotta Express osaa käyttää sitä sanan päivitysreittiä käytettäessä. */
app.post('/paivitasana', sanakirja.updateWord);
/* Sanan poisto. Mennään REST APIssa osoitteeseen /poistasana. Tämä on samalla ensimmäinen app-olion get-metodille annetuista parametreista (heittomerkkien sisään kirjoitettu merkkijono). Toisena parametrina on app-olion kautta kutsuttavan funktion deleteWord alustus, jotta Express osaa käyttää sitä sanan poistoreittiä käytettäessä. */
app.post('/poistasana', sanakirja.deleteWord);

module.exports = app;
