// Otetaan tietokannan yhdistämismetodi käyttöön requirella ja tieto tallennetaan tietokanta-muuttujaan. Vinkki otettu mysqltutorial.com-sivulta: https://www.mysqltutorial.org/mysql-nodejs/select/.
const yhteys = require('../config/database_config');
// Sanakirjan kontrolleri-tiedosto
// testiasioita varten tehty "Hae kaikki sanat" -toiminto (metodi.
exports.searchAll = (req, res) => {
/* Palautetaan SQL-kyselym hossa. Palautetaan conn-olion query-ominaisuudelle tehty kysely, joka annetaan conn.querylle parametreina sulkujen sisässä ja heittomerkeissä. Toisena parametrina callback eli takaisinkutsufunktio. Tieto tästä sijaitsee let-avainsanalla aiemmin alustetussa yhteys-muuttujassa. Ensimmäinen yhteys-olion query-funktiolle annettavista parametreista on tekstimuotoinen SQL-lause, jonka SQL-kyselylausekkeessa on kysymysmerkki (?) oikean arvon tilalla, mikä parantaa vain hieman sovelluksen tietoturvaa. Muiden funktioiden kyselyt ontoteutettu samalla tavalla. */
yhteys.query('SELECT * FROM Sana', (error, result) => {
if (error){
res.status(500).send('There was an error!');
} else {
res.render('sanakirja', {sanat: result});
}
})
};

// Seuraavien metodien toiminta on ajateltu ohjelman toiminnan ja erityisesti käyttäjän toiminnan näkökulmasta, jolloin ne palauttavat loogisesti (kielien näkökulmasta katsottuna) päinvastaisen arvon haettavaan arvoon verrattuna. 
// Suomenkielisen sanan hakumetodi searchWordFi. Palauttaa vastauksena englanninkielisen sanan.
exports.searchWordFi = (req, res) => {
/* Palautetaan SQL-kyselym hossa. Palautetaan conn-olion query-ominaisuudelle tehty kysely, joka annetaan conn.querylle parametreina sulkujen sisässä ja heittomerkeissä. Siinä valitaan tulostukseenmukaan Sana-taulussa olevat sarakkeet sanan_nimi_en ja sanan_kuvaus_en (nämä ovat ennen FROM Sana -sanoja. Kyselyssä oleva req.body.sana tarkoittaa sitä, että Sana-taulun sana_en-saraketta verrataan pyynnön bodyssa olevaan sana-ominaisuuteen (toistaiseksi testaamatta). Toisena parametrina callback eli takaisinkutsufunktio. */
console.log(req.body.sana);
yhteys.query('SELECT sanan_nimi_en, sanan_kuvaus_en FROM Sana WHERE Sana.sanan_nimi_fi = ?', [req.body.sana], (error, result) => {
if (error){
console.log(error);
/* Lähetetään http-koodi 500 res-olion status-funktio hyödyntäen. Se ketjutetaan send-metodille, jonka parametriksi annetaan heittomerkkien sisään oma virheviesti. */
res.status(500).send('Suomenkielistä sanaa haettaessa tapahtui virhe!' + error);
} else {
// palautetaan tyhjä olio. Tieto tästä tallennetaan const-avainsanalla alustettuun tulos-muuttujaan.
const tulos = {};
if(result.length > 0) {
tulos.sana = result[0].sanan_nimi_en;
tulos.kuvaus = result[0].sanan_kuvaus_en;
}
res.render('tulossivu', {sana: req.body.sana, tulos: tulos});
}
});
};

// Englanninkielisen sanan etsimismetodi. Palauttaa vastauksena suomenkielisen sanan. Parametreina req (http-pyyntö), res (httpvastaus) ja ballback (takaisinkutsufunktio).
exports.searchWordEn = (req, res) => {
/* Palautetaan SQL-kyselym hossa. Palautetaan conn-olion query-ominaisuudelle tehty kysely, joka annetaan conn.querylle parametreina sulkujen sisässä ja heittomerkeissä. Siinä valitaan tulostukseenmukaan Sana-taulussa olevat sarakkeet sanan_nimi_fi ja sanan_kuvaus_fi (nämä ovat ennen FROM Sana -sanoja. Kyselyssä oleva req.body.sana tarkoittaa sitä, että Sana-taulun sana_en-saraketta verrataan pyynnön bodyssa olevaan sana-ominaisuuteen (toistaiseksi testaamatta). Toisena parametrina callback eli takaisinkutsufunktio. */
yhteys.query('SELECT sanan_nimi_fi, sanan_kuvaus_fi FROM Sana WHERE Sana.sanan_nimi_en = ?', [req.body.sana], (error, result) => {
if (error){
console.log(error);
res.status(500).send('There was an error!');
} else {
const tulos = {};
if(result.length > 0) {
tulos.sana = result[0].sanan_nimi_fi;
tulos.kuvaus = result[0].sanan_kuvaus_fi;
}
res.render('tulossivu', {sana: req.body.sana, tulos:tulos});
}
});
};

// Sanan poistometodi. ensimmäisenä parametrina pyyntö, toisena vastaus ja kolmantena callback.
exports.deleteWord = (req, res) => {
// poistetaan sana
yhteys.query('DELETE FROM Sana WHERE sanan_nimi_fi = ? OR sanan_nimi_en = ?', [req.body.sana, req.body.sana], (error, result) => {
if (error) {
res.status(500).send('There was an error!');
} else {
let message = "Sana poistettiin onnistuneesti.";
if (result.affectedRows == 0) {
message = 'Sanaa ei löytynyt.';
}
res.render('poistosivu', {sana: req.body.sana, message: message});
}
});
};

exports.updateWord = (req, res) => {
yhteys.query('UPDATE Sana SET sanan_nimi_fi = ?, sanan_nimi_en = ?, sanan_kuvaus_fi = ?, sanan_kuvaus_en = ? WHERE sanan_nimi_fi = ? OR sanan_nimi_en = ?', [req.body.sanafi, req.body.sanaen, req.body.kuvausfi, req.body.kuvausen, req.body.sana, req.body.sana], (error, result) => {
if (error) {
res.status(500).send('There was an error!');
} else {
let message = 'Sana "' + req.body.sana + '"päivitettiin onnistuneesti.';
if (result.affectedRows == 0) {
message = 'Sanaa ei löytynyt.';
}
res.render('paivityssivu', {sana: req.body.sana, message: message});
}
});
};

exports.addWord = (req, res) => {
yhteys.query('INSERT INTO Sana(sanan_nimi_fi, sanan_nimi_en, sanan_kuvaus_fi, sanan_kuvaus_en) VALUES (?,?,?,?)',[req.body.sanafi, req.body.sanaen, req.body.kuvausfi, req.body.kuvausen], (error, result) => {
if (error) {
res.status(500).send(error.message);
} else {
res.render('lisayssivu', {message: 'Sana lisättiin onnistuneesti.'});
}
});
};