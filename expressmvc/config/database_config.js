// configuraatiotiedosto, johon laitetaan tietokannan kasittelykomentoja. Viedaan olio komennolla module.exports
/*module.exports = {
// Avain url, arvo merkkijonomuotoinen tietokannan osoite.
//url: 'mongodb://localhost:27017/Sanakirja'
}*/
// T�t� koodia ei otettu k�ytt��n, koska en saanut MonboDB:t� toimimaan ja kirjoitin sen kommentteihin.
// MySQL kayttoon
let mysql =require('mysql');
// yhteysolio. Tallennetaan tiedot olioon ja tehd��n yhteys paikalliselle tiesokantapalvelimelle ('localhost'). Lisaksi syotetaan kayttajatunnus, salasana ja tietokanta ('nodesk').
const yhteys = 
mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'Sanakirja',
multipleStatements: true
});

/* Yhdistet��n Mysql-tietokantaan Sanakirja k�ytt�en mysql-olion connect-metodia, jolle annetaan parametriksi sulkujen sis��n tarvittavat yhdist�mistiedot merkkijonoina. */
yhteys.connect( err => {
if (err) {
// Tulostetaan virheviesti konsoliin. Sill� on parametrina teksti� ja err-muuttujan nimi plus-operaattorilla (+) yhdistettyn�.
console.log('Kun otettiin yhteytt� tietokantaan, tapahtui virhe. Syy oli ' + err);
// Lopetetaan prosessi process.exit-metodilla
process.exit();
}
// Muutoin jatketaan tietokannan k�sittely� ottamalla siihen yhteytt�.
else {
console.log('Yhdistettiin onnistuneesti tietokantaan.');
}
});

module.exports = yhteys;