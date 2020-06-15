// configuraatiotiedosto, johon laitetaan tietokannan kasittelykomentoja. Viedaan olio komennolla module.exports
/*module.exports = {
// Avain url, arvo merkkijonomuotoinen tietokannan osoite.
//url: 'mongodb://localhost:27017/Sanakirja'
}*/
// Tätä koodia ei otettu käyttöön, koska en saanut MonboDB:tä toimimaan ja kirjoitin sen kommentteihin.
// MySQL kayttoon
let mysql =require('mysql');
// yhteysolio. Tallennetaan tiedot olioon ja tehdään yhteys paikalliselle tiesokantapalvelimelle ('localhost'). Lisaksi syotetaan kayttajatunnus, salasana ja tietokanta ('nodesk').
const yhteys = 
mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'Sanakirja',
multipleStatements: true
});

/* Yhdistetään Mysql-tietokantaan Sanakirja käyttäen mysql-olion connect-metodia, jolle annetaan parametriksi sulkujen sisään tarvittavat yhdistämistiedot merkkijonoina. */
yhteys.connect( err => {
if (err) {
// Tulostetaan virheviesti konsoliin. Sillä on parametrina tekstiä ja err-muuttujan nimi plus-operaattorilla (+) yhdistettynä.
console.log('Kun otettiin yhteyttä tietokantaan, tapahtui virhe. Syy oli ' + err);
// Lopetetaan prosessi process.exit-metodilla
process.exit();
}
// Muutoin jatketaan tietokannan käsittelyä ottamalla siihen yhteyttä.
else {
console.log('Yhdistettiin onnistuneesti tietokantaan.');
}
});

module.exports = yhteys;