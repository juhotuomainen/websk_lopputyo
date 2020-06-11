// Otetaan tietokannan yhdistämismetodi käyttöön requirella ja tieto tallennetaan tietokanta-muuttujaan. Vinkki otettu mysqltutorial.com-sivulta: https://www.mysqltutorial.org/mysql-nodejs/select/.
const yhteys = require('../config/database_config');
// Sanakirjan kontrolleri-tiedosto
// testiasioita varten tehty "Hae kaikki sanat" -toiminto (metodi.
exports.searchAll = (req, res) => {
/* Palautetaan SQL-kyselym hossa. Palautetaan conn-olion query-ominaisuudelle tehty kysely, joka annetaan conn.querylle parametreina sulkujen sisässä ja heittomerkeissä. Toisena parametrina callback eli takaisinkutsufunktio. Tieto tästä sijaitsee let-avainsanalla sijaitsevassa kysely-muuttujassa. */
yhteys.query('SELECT * FROM Sana', (error, result) => {
if (error){
res.status(500).send('There was an error!');
} else {
/* renderöidään sanakirjasivu.html-tiedosto kutsumalla render-metodia res-olion kautta. Ensimmäisenä parametrina annetaan heittomerkeissä haluttu sivun nimi ja toinen parametri on render-metodin vaatimusten mukaisesti olio. Sen avain on result ja arvo result. */
res.render('sanakirjasivu', {result: result});
}
})
};

// Seuraavien metodien toiminta on ajateltu ohjelman toiminnan ja erityisesti käyttäjän toiminnan näkökulmasta, jolloin ne palauttavat loogisesti (kielien näkökulmasta katsottuna) päinvastaisen arvon haettavaan arvoon verrattuna. 
// Suomenkielisen sanan hakumetodi searchWordFi. Palauttaa vastauksena englanninkielisen sanan.
exports.searchWordFi = (req, res) => {
/* Palautetaan SQL-kyselym hossa. Palautetaan conn-olion query-ominaisuudelle tehty kysely, joka annetaan conn.querylle parametreina sulkujen sisässä ja heittomerkeissä. Siinä valitaan tulostukseenmukaan Sana-taulussa olevat sarakkeet sanan_nimi_en ja sanan_kuvaus_en (nämä ovat ennen FROM Sana -sanoja. Kyselyssä oleva req.body.sana tarkoittaa sitä, että Sana-taulun sana_en-saraketta verrataan pyynnön bodyssa olevaan sana-ominaisuuteen (toistaiseksi testaamatta). Toisena parametrina callback eli takaisinkutsufunktio. */
tietokanta.query('SELECT sanan_nimi_en, sanan_kuvaus_en FROM Sana WHERE Sana.sanan_nimi_en = ?', [req.body.sana], (error, result) => {
if (error){
res.status(500).send('There was an error!');
} else {
// alustetaan tietokannanHakutulos-muuttuja, jossa on tietokannasta haettu, Node JS:n MYSQL-moduulin palauttaa.
let tietokannanHakutulos ='Haettua sanaa ei löytynyt.';

// tarkistetaan, onko tietokannasta saatu tietue. Jos siis result-taulukon, jonka MYSQL-moduuli palauttaa, arvo on 0, 
if (result.length > 0) {
/* muutetaan tietokannanHakutulos-muuttujan arvoksi MySWL-moduulin palauttaman taulukon indeksi 0, jolloin tietokannan tulokset löytyvät aina kyseisestä indeksistä (edellyttäen, että sanoja on yksi (tämä sovellus toimii juuri näin). Tehdään olio, joka sisältääö avaimen sana (arvo results[0].sanan_nimi_en( ja avain kuvaus (arvo result[0].sanan_kuvaus_en).*/
tietokannanHakutulos ={ sana: result[0].sanan_nimi_en, kuvaus: result[0].sanan_kuvaus_en};
}
/* Renderöidään sanakirjanäkymä siten, että tulokset tulevat näkyviin. Ensin annetaan res.renderille parametriksi reitti (eli heittomerkeissä merkkijono sanakirjasivu (halutaan renderöidä sanakirjasivu.html), olio, jonka avain on sana ja arvo req.body.sana (halutaan  nimen omaan laittaa mukaan pyynnön body-oliossa ollut sana) ja hakutulos-avain, jonka arvona tietokannanHakutulos-muuttuja (viittaus parametrina tietokannanHakutulos-muuttujaan). (tietokannasta saatu vastaus). */ 
res.render('hakutulossivu', { sana: req.body.sana, hakutulos: tietokannanHakutulos});
}
});
};

// Englanninkielisen sanan etsimismetodi. Palauttaa vastauksena suomenkielisen sanan. Parametreina req (http-pyyntö), res (httpvastaus) ja ballback (takaisinkutsufunktio).
exports.searchWordEn = (req, res) => {
/* Palautetaan SQL-kyselym hossa. Palautetaan conn-olion query-ominaisuudelle tehty kysely, joka annetaan conn.querylle parametreina sulkujen sisässä ja heittomerkeissä. Siinä valitaan tulostukseenmukaan Sana-taulussa olevat sarakkeet sanan_nimi_fi ja sanan_kuvaus_fi (nämä ovat ennen FROM Sana -sanoja. Kyselyssä oleva req.body.sana tarkoittaa sitä, että Sana-taulun sana_en-saraketta verrataan pyynnön bodyssa olevaan sana-ominaisuuteen (toistaiseksi testaamatta). Toisena parametrina callback eli takaisinkutsufunktio. */
conn.query('SELECT sanan_nimi_fi, sanan_kuvaus_fi FROM Sana WHERE Sana.sanan_nimi_fi = ?', [req.body.sana], (error, result) => {
if (error){
res.status(500).send('There was an error!');
} else {
// alustetaan tietokannanHakutulos-muuttuja, jossa on tietokannasta haettu, Node JS:n MYSQL-moduulin palauttaa.
let tietokannanHakutulos ='Haettua sanaa ei löytynyt.';

// tarkistetaan, onko tietokannasta saatu tietue. Jos siis result-taulukon, jonka MYSQL-moduuli palauttaa, arvo on 0, 
if (result.length > 0) {
// muutetaan tietokannanHakutulos-muuttujan arvoksi MySWL-moduulin palauttaman taulukon indeksi 0, jolloin tietokannan tulokset löytyvät aina kyseisestä indeksistä (edellyttäen, että sanoja on yksi (tämä sovellus toimii juuri näin).
tietokannanHakutulos ={ sana: result[0].sanan_nimi_fi, kuvaus: result[0].sanan_kuvaus_fi};
}
/* Renderöidään sanakirjanäkymä siten, että tulokset tulevat näkyviin. Ensin annetaan res.renderille parametriksi reitti (eli heittomerkeissä merkkijono sanakirjasivu (halutaan renderöidä sanakirjasivu.html), olio, jonka avain on sana ja arvo req.body.sana (halutaan  nimen omaan laittaa mukaan pyynnön body-oliossa ollut sana) ja hakutulos-avain, jonka arvona tietokannanHakutulos-muuttuja (viittaus parametrina tietokannanHakutulos-muuttujaan). (tietokannasta saatu vastaus). */ 
res.render('hakutulossivu', { sana: req.body.sana, hakutulos: tietokannanHakutulos});

}
});
};

// Sanan poistometodi. ensimmäisenä parametrina pyyntö, toisena vastaus ja kolmantena callback.
exports.poistaSana = (req, res) => {
// poistetaan sana

};
