// Otetaan tietokannan yhdistämismetodi käyttöön requirella ja tieto tallennetaan tietokanta-muuttujaan. Vinkki otettu mysqltutorial.com-sivulta: https://www.mysqltutorial.org/mysql-nodejs/select/.
const tietokantta = require('../../config/database.config.js');
// alustetaan muuttuja yhteys, joka saa arvokseen NodeJS:n mysql-moduulin createConnection-funktion  kutsun, jonka parametriksi annetaan suluissa oleva yhteys-muuttuja.
const yhteys = mysql.createConnection(yhteys);
// Sanakirjan kontrolleri-tiedosto
// testiasioita varten tehty "Hae kaikki sanat" -toiminto (metodi.
exports.searchAll = (req, res, error, fields) => {
/* Palautetaan SQL-kyselym hossa. Palautetaan conn-olion query-ominaisuudelle tehty kysely, joka annetaan conn.querylle parametreina sulkujen sisässä ja heittomerkeissä. Toisena parametrina callback eli takaisinkutsufunktio. Tieto tästä sijaitsee let-avainsanalla sijaitsevassa kysely-muuttujassa. */
let kysely = yhteys.query('SELECT * FROM Sana', callback);

// kutsutaan yhteys-lmuuttujan query-ominaisuutta yhteys-muuttujan kautta. Parametrina anonyymi takaisinkutsunuolifunktio, joka huolehtii kyselyn haun aikana tapahtuvan virheenkäsittelyn ja tulostaa tietokantakyselyn tuloksen konsoliin.
yhteys.query ((kysely, error, records, fields) => {
/* Jos tulee virhe, tulostetaan virheviesti konsoliin. Vinkki otettu sivustolta https://www.mysqltutorial.org/mysql-nodejs/select/. */
if (error) {
	// Tulostus konsoliin. Console.log:in parametriksi error.message.
	console.log('Virhe tapahtui kyselyä tehtäessä. Syynä oli ' + error.message + '.');
});
// Lähetetään kysely eteenpäin then-metodille. Se käsittelee kysely-parametrin (siis muuttujan, joka sisältää SQL-kyselyn) seuraavasti: jos tulee virhe, se tulostetaan konsoliin. 
    then((kysely) => {
// Muutetaan SQL-kysely JSON-dataksi.
        res.json(kysely);
    })
// catch-lohko, joka käsittelee virheen 
.catch(err => {
/* Lähetetään virhekoodi 500 (määrittelemätön palvelinpuolen virhe) res-oliion send-ominaisuutta hyödyntäen. Sulkujen sisässä annetaan  parametrina olio, jonka avain on message ja arvo virheolion viesti tai (looginen tai-operaattori ||) heitto- ja lainausmerkkien sisään kirjoitettu virheilmoitus. */
        res.status(500).send({
            message: err.message || "Virhe tapahtui sanoja haettaessa. syy oli " + err
        });
    });

// Lopetetaan yhteys tietokantaan connection.end-metodilla (vinkki sivulta https://www.mysqltutorial.org/mysql-nodejs/select/).
connection.end();
};
// Seuraavien metodien toiminta on ajateltu ohjelman toiminnan ja erityisesti käyttäjän toiminnan näkökulmasta, jolloin ne palauttavat loogisesti (kielien näkökulmasta katsottuna) päinvastaisen arvon haettavaan arvoon verrattuna. 
// Suomenkielisen sanan hakumetodi searchWordFi. Palauttaa vastauksena englanninkielisen sanan.
exports.searchWordFi = (req, res) {
/* Palautetaan SQL-kyselym hossa. Palautetaan conn-olion query-ominaisuudelle tehty kysely, joka annetaan conn.querylle parametreina sulkujen sisässä ja heittomerkeissä. Siinä valitaan tulostukseenmukaan Sana-taulussa olevat sarakkeet sanan_nimi_en ja sanan_kuvaus_en (nämä ovat ennen FROM Sana -sanoja. Kyselyssä oleva req.body.sana tarkoittaa sitä, että Sana-taulun sana_en-saraketta verrataan pyynnön bodyssa olevaan sana-ominaisuuteen (toistaiseksi testaamatta). Toisena parametrina callback eli takaisinkutsufunktio. */
let kysely = tietokanta.query('SELECT sanan_nimi_en, sanan_kuvaus_en FROM Sana WHERE Sana.sanan_nimi_en = req.body.sana', callback);
// tulostetaan kysely konsoliin
console.log(kysely);

// Lähetetään kysely eteenpäin then-metodille. Se käsittelee kysely-parametrin (siis muuttujan, joka sisältää SQL-kyselyn) seuraavasti: jos tulee virhe, se tulostetaan konsoliin. 
    then(((kysely) => {
// Muutetaan SQL-kysely JSON-dataksi.
        res.json(kysely);
    })
// catch-lohko, joka käsittelee virheen 
.catch(err => {
/* Lähetetään virhekoodi 500 (määrittelemätön palvelinpuolen virhe) res-oliion send-ominaisuutta hyödyntäen. Sulkujen sisässä annetaan  parametrina olio, jonka avain on message ja arvo virheolion viesti tai (looginen tai-operaattori ||) heitto- ja lainausmerkkien sisään kirjoitettu virheilmoitus. */
        res.status(500).send({
            message: err.message || "Virhe tapahtui sanoja haettaessa. syy oli " + err
        });
    });
// Lopetetaan yhteys tietokantaan connection.end-metodilla (vinkki sivulta https://www.mysqltutorial.org/mysql-nodejs/select/).
connection.end();

};

// Englanninkielisen sanan etsimismetodi. Palauttaa vastauksena suomenkielisen sanan. Parametreina req (http-pyyntö), res (httpvastaus) ja ballback (takaisinkutsufunktio).
exports.searchWordEn = (req, res, callback) => {
/* Palautetaan SQL-kyselym hossa. Palautetaan conn-olion query-ominaisuudelle tehty kysely, joka annetaan conn.querylle parametreina sulkujen sisässä ja heittomerkeissä. Siinä valitaan tulostukseenmukaan Sana-taulussa olevat sarakkeet sanan_nimi_fi ja sanan_kuvaus_fi (nämä ovat ennen FROM Sana -sanoja. Kyselyssä oleva req.body.sana tarkoittaa sitä, että Sana-taulun sana_en-saraketta verrataan pyynnön bodyssa olevaan sana-ominaisuuteen (toistaiseksi testaamatta). Toisena parametrina callback eli takaisinkutsufunktio. */
let kysely = conn.query('SELECT sanan_nimi_fi, sanan_kuvaus_fi FROM Sana WHERE Sana.sanan_nimi_fi = req.body.sana', callback);
// Lähetetään kysely eteenpäin then-metodille. Se käsittelee kysely-parametrin (siis muuttujan, joka sisältää SQL-kyselyn) seuraavasti: jos tulee virhe, se tulostetaan konsoliin. 
    then(kysely => {
// Muutetaan SQL-kysely JSON-dataksi.
        res.json(kysely);
    })
// catch-lohko, joka käsittelee virheen 
.catch(err => {
/* Lähetetään virhekoodi 500 (määrittelemätön palvelinpuolen virhe) res-oliion send-ominaisuutta hyödyntäen. Sulkujen sisässä annetaan  parametrina olio, jonka avain on message ja arvo virheolion viesti tai (looginen tai-operaattori ||) heitto- ja lainausmerkkien sisään kirjoitettu virheilmoitus. */
        res.status(500).send({
            message: err.message || "Virhe tapahtui sanoja haettaessa. syy oli " + err
        });
    });

// Lopetetaan yhteys tietokantaan connection.end-metodilla (vinkki sivulta https://www.mysqltutorial.org/mysql-nodejs/select/).
connection.end();

};
// Sanan poistometodi. ensimmäisenä parametrina pyyntö, toisena vastaus ja kolmantena callback.
exports.poistaSana = (req, res, fields) => {
// poistetaan sana
// Lähetetään kysely eteenpäin then-metodille. Se käsittelee kysely-parametrin (siis muuttujan, joka sisältää SQL-kyselyn) seuraavasti: jos tulee virhe, se tulostetaan konsoliin. 

    then(kysely => {
// Muutetaan SQL-kysely JSON-dataksi.
        res.json(kysely);
    })
// catch-lohko, joka käsittelee virheen 
.catch(err => {
/* Lähetetään virhekoodi 500 (määrittelemätön palvelinpuolen virhe) res-oliion send-ominaisuutta hyödyntäen. Sulkujen sisässä annetaan  parametrina olio, jonka avain on message ja arvo virheolion viesti tai (looginen tai-operaattori ||) heitto- ja lainausmerkkien sisään kirjoitettu virheilmoitus. */
        res.status(500).send({
            message: err.message || "Virhe tapahtui sanoja haettaessa. syy oli " + err
        });
    });
// Lopetetaan yhteys tietokantaan connection.end-metodilla (vinkki sivulta https://www.mysqltutorial.org/mysql-nodejs/select/).
connection.end();

};
