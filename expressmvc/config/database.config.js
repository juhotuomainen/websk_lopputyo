// configuraatiotiedosto, johon laitetaan tietokannan kasittelykomentoja. Viedaan olio komennolla module.exports
/*module.exports = {
// Avain url, arvo merkkijonomuotoinen tietokannan osoite.
//url: 'mongodb://localhost:27017/Sanakirja'
}*/
// T�t� koodia ei otettu k�ytt��n, koska en saanut MonboDB:t� toimimaan ja kirjoitin sen kommentteihin.
// MySQL kayttoon
let mysql =require('mysql');
// yhteysolio. Tallennetaan tiedot olioon ja tehd��n yhteys paikalliselle tiesokantapalvelimelle ('localhost'). Lisaksi syotetaan kayttajatunnus, salasana ja tietokanta ('nodesk').
const yhteys = {
mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'Sanakirja',
multipleStatements: true,
debug: true
})

/* Yhdist�minen tietokantaan. Se tapahtuu kutsumalla mysql-olion kautta connect-metodia. Annetaan sille parametreina sulkujen sis�ss� virheen k�sittelymuuttuja virhe. Jos virheen k�sittely ei onnistu, tulostetaan viesti . Muutoin tulostetaan konsoliin viesti "Yhdistettiin onnistuneesti tietokantaan". Tieto on v�litetty then-funktiolle ja viestin tulostaa sen parametrina sulkujen sis�ss� oleva anonyymi (nimet�n) nuolifunktio, jolla ei ole parametreja.*/
.then((yhteys) => {
/* Yhdistet��n Mysql-tietokantaan Sanakirja k�ytt�en mysql-olion connect-metodia, jolle annetaan parametriksi sulkujen sis��n tarvittavat yhdist�mistiedot merkkijonoina. */
yhteys.connect(
if (err) {
// Tulostetaan virheviesti konsoliin. Sill� on parametrina teksti� ja err-muuttujan nimi plus-operaattorilla (+) yhdistettyn�.
console.log('Kun otettiin yhteytt� tietokantaan, tapahtui virhe. Syy oli ' + err);
// Lopetetaan prosessi process.exit-metodilla
process.exit();
}
// Muutoin jatketaan tietokannan k�sittely� ottamalla siihen yhteytt�.
else {
console.log('Yhdistettiin onnistuneesti tietokantaan.');
});
// M��ritell��n portti (tieto tallennetaan port-muuttujaan). Se on joko process-luokan env-aliluokan PORT-ominaisuus (property) tai portti 3000.
const port = process.env.PORT || 3000;
/* Kuunnellaan porttia 3000. Se m��ritell��n app-olion listen-funktiota hy�dynt�en ja sill� on kaksi parametria: ensimm�inen on port-muuttuja ja toinen suoritettava callback-funktio, jonka parametrilista on tyhj� (tyhj�t sulut). Sen j�lkeen on nuolifunktion runkomerkki (=>),  ja sitten console.log. Sen sulkujen j�lkeen p��ttyy app.usen sulut ja koko komeuden lopuksi kirjoitetaan puolipiste. */
app.listen (port, () => { 
console.log('Palvelin k�ynniss� portissa ' + port + '.')
});
};
module.exports = yhteys;