// configuraatiotiedosto, johon laitetaan tietokannan kasittelykomentoja. Viedaan olio komennolla module.exports
/*module.exports = {
// Avain url, arvo merkkijonomuotoinen tietokannan osoite.
//url: 'mongodb://localhost:27017/Sanakirja'
}*/
// Tätä koodia ei otettu käyttöön, koska en saanut MonboDB:tä toimimaan ja kirjoitin sen kommentteihin.
// MySQL kayttoon
let mysql =require('mysql');
// yhteysolio. Tallennetaan tiedot olioon ja tehdään yhteys paikalliselle tiesokantapalvelimelle ('localhost'). Lisaksi syotetaan kayttajatunnus, salasana ja tietokanta ('nodesk').
const yhteys = {
mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'Sanakirja',
multipleStatements: true,
debug: true
})

/* Yhdistäminen tietokantaan. Se tapahtuu kutsumalla mysql-olion kautta connect-metodia. Annetaan sille parametreina sulkujen sisässä virheen käsittelymuuttuja virhe. Jos virheen käsittely ei onnistu, tulostetaan viesti . Muutoin tulostetaan konsoliin viesti "Yhdistettiin onnistuneesti tietokantaan". Tieto on välitetty then-funktiolle ja viestin tulostaa sen parametrina sulkujen sisässä oleva anonyymi (nimetön) nuolifunktio, jolla ei ole parametreja.*/
.then((yhteys) => {
/* Yhdistetään Mysql-tietokantaan Sanakirja käyttäen mysql-olion connect-metodia, jolle annetaan parametriksi sulkujen sisään tarvittavat yhdistämistiedot merkkijonoina. */
yhteys.connect(
if (err) {
// Tulostetaan virheviesti konsoliin. Sillä on parametrina tekstiä ja err-muuttujan nimi plus-operaattorilla (+) yhdistettynä.
console.log('Kun otettiin yhteyttä tietokantaan, tapahtui virhe. Syy oli ' + err);
// Lopetetaan prosessi process.exit-metodilla
process.exit();
}
// Muutoin jatketaan tietokannan käsittelyä ottamalla siihen yhteyttä.
else {
console.log('Yhdistettiin onnistuneesti tietokantaan.');
});
// Määritellään portti (tieto tallennetaan port-muuttujaan). Se on joko process-luokan env-aliluokan PORT-ominaisuus (property) tai portti 3000.
const port = process.env.PORT || 3000;
/* Kuunnellaan porttia 3000. Se määritellään app-olion listen-funktiota hyödyntäen ja sillä on kaksi parametria: ensimmäinen on port-muuttuja ja toinen suoritettava callback-funktio, jonka parametrilista on tyhjä (tyhjät sulut). Sen jälkeen on nuolifunktion runkomerkki (=>),  ja sitten console.log. Sen sulkujen jälkeen päättyy app.usen sulut ja koko komeuden lopuksi kirjoitetaan puolipiste. */
app.listen (port, () => { 
console.log('Palvelin käynnissä portissa ' + port + '.')
});
};
module.exports = yhteys;