// http käyttöön
const http = require('http');
// otetaan ejs-tiedostomoduuli käyttöön requirella. Sen avulla renderöidään html-sivua. Apua tehtävän tekooon otettu tässä kohdassa osoittedesta https://stackoverflow.com/questions/4529586/render-basic-html-view.
//const ejs = require('ejs); 
// Varsinbainen http-serverin luonti tapahtuu luomalla muuttuja server ja talolentamalla tiedot siihen.

const server = http.createServer(function (req, res) {
// Otetaan html-moottori käyttöön kutsumalla engine-funktiota app-olion kautta. Parametrina sulkujen sisässä annetaan  merkkijono html (eli html-tiedostotarkennin) sekä renderFile-metodin kutsu, joka on toinen app.enginen parametri. En ole varma tämän rivin sijaintipaikasta...
app.engine('html', ejs.renderFile);
// Laitetaan tekstimuodossa headerit eli niiden tulee olla tekstiä
// testimuuttuja, joka kommentoidaan pois kun se jää tarpeettomaksi. Sillä testataan, että palvelin toimii edes jotenkin.
const body = 'Terve mualima!';
/* Kutsutaan setHeaders-funktiota res-olionkautta. Annetaan parametriksi sulkujen sisään heittomerkeissä sisällön pituus-attribuutti (content-length) ja toiseksi parametriksi body.length eli body-olion  (dataosan "rungon" sisältävä  olio") mitta.*/
res.setHeaders('content-Length', 'body.length');
/* Tehdään sama kuinedellä (kutsutaan uudelleen setHeaders-funktiota res-olion kautta), mutta ensimmäisenä parametrina tällä kertaa heittomerkeissä sisällön tyyppi (Content-Type) ja toisena parametrina heittomerkkien sisässä merkkijono text/plain eli kyseessä on puhdas tekstityyppi. */
res.setHeaders('Content-Type', 'text/plain');
// Lopetetaan res-olion kautta kutsutun body-olion täyttäminen kutsumalla end-metodia res-olion kautta (res.end) ja antamalla sille parametriksi body.
res.end(body);
});
/* kuunnellaan porttia 3001 kutsumalla listen metodia server-muuttujan kautta. Tehdään niin, että ensin server.listen-metodin kutsuun laitetaan sulkujen sisälle 3001, pilkku, väli ja sitten anonyymi callback-funktio, joka tulostaa tiedon palvelimen käynnistymisestä konsoliin.*/
/*catch((Error) => {
// tulostetaan virhe konsoliin.
console.log('Yhteydenotossa tapahtui virhe. Syy oli' + Error);});*/

server.listen(3001, () => {
console.log('Palvelin käynnissä portissa 3001.');
});