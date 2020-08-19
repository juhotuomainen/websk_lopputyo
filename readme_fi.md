# Erittäin yksinkertainen sanakirja-sovellus
## Yleiskuvaus sovelluksesta
Tämä sovellus on erittäin yksinkertainen sanakirjasovellus, joka on samalla Web-sovelluskehitys 1 -kurssin lopputyö (oletan, että saan kurssista arvosanan 1 tämän työn avulla). Alun perin sovellukseen oli tarkoitus tehdä suojattu, Google-kirjautumisen vaativa käyttöliittymä, mutta kurssien tehtävissä ilmenneiden ongelmien ja niiden haasteellisuuden vuoksi tein sovellukseen vain välttämättömimmät toiminnot eli sanojen lisäyksen, päivityksen ja poiston sekä kaikkien sanojen haun ja sanojen hakemisen sekä suomeksi että englanniksi. Sovellus näyttää sanoista tällä hetkellä vain nimen (itse sanan, kuten tuli tai fire) ja kuvauksen (kuten "Palamisprosessi, jonka seurauksena syntyy tuhkaa."). Sovellus on niin sanottu MVC-sovellus (Model View Control), mikä tarkoittaa sitä, että siinä on vain mallit (models), näkymät (views) ja kontrollerit (controllers), eikä siinä ole erillistä, toiselta palvelimelta ladattavaa käyttöliittymää. Käyttöliittymänä toimivat .ejs-sivut (EJS tulee sanoista Embedded JavaScript eli sulautettu javaScript, jota kirjoitetaan html:n sekaan .ejs-tiedostoon). Muita ohjelmointikieliä EJS:n lisäksi ovat JavaScript (lähes koko sovellus) ja SQL (pelkkää SQL:ää vain luontilauseissa, mysql-moduulin kautta tapahtuvaa tietokannan käsittelyä kontrolleritiedostossa sanaakirja_controller.js). Sovelluksen oli alun perin tarkoitus toimia MongoDB-tietokannan päällä,mutta ongelmien vuoksi tietokannaksi vaihdettiin SQL-tietokanta. Lisäksi sovelluksessa on erittäin yksinkertainen REST API eli rajapinta, joka tarjoaa erittäin alkeelliset ja yksinkertaiset toiminnot sovelluksen käyttöön. Sanakirjan toimintoja ovat tällä hetkellä sanojen poisto, lisäys, päivitys sekä niiden hakeminen (ks. kohta "Sovelluksen käyttö" alempana). Sovellus toimii tällä hetkellä vain paikallisesti, joten se pitää kloonata eli asentaa Git-versionhallintajärjestelmää käyttäen (ks. ohjeet alempana).

## Sovelluksen kansiorakenne
Sanakirja-sovelluksen kansiorakenne on seuraava (huomaa, että tähtimerkki (*) tiedoston tai kansion edessä tarkoittaa sitä, että se syntyy vasta sovelluksen asennuksen jälkeen):
- Päätaso (git-puun juuri kansiossa, johon sovellus on asennettu): 
 - expressmvc, joka sisältää sovelluksen toiminnan kannalta tärkeät kansiot ja tiedostot
  
  - bin-kansio (asennuksen jälkeen tulevat binääritiedostot): 
   - * www: web-palvelimeen käynnistykseen liittyviä asioita (kuten nodemon-moduulin käynnistys)
  - config-kansio (asetustiedostot):  
   - database_config.js: Yhteydenotto SQL-tietokantaan
  - Controllers-kansio (sovelluksen kontrollerit eli funktiot, joita käytetään, edellisessä osiossa ("Yleiskuvaus sovelluksesta" kuvattujen toimintojen suorittamiseen):
   - googleControllerjs.txt: Alun perin Google-kirjautumisen hoitava kontrolleri, joka jätettiin hyödyntämättä.. Siksi senkoodi on tässä sovelluksessa txt-versiona vain sen vuoksi, että nähdään, mitä olen yrittänyt tehdä sovellusta kehittäessäni
   - sanakirja_controller.js: Sanakirjan kontrolleritiedosto
  - * Node_modules-kansio (sisältää kaikki NodeJS:n tarvitsemat moduulit, jotta sovellus toimisi oikein)
  - Public (sisältää julkisia, yleisiä tiedostoja): 
   - images (kuvat, tällä hetkellä tyhjä)
   - Javascripts (Yleiset JavaScript-tiedostot, tällä hetkellä tyhjä)
   - stylesheets (CSS (Cascading Style Sheet) -tyylitiedostot, joilla muokataan sivun ulkoasua)
    - styles.css: sisältää sovelluksen tyylit eli ulkoasun
  - routes-kansio (sovelluksen reitit eli tiedostot, ojoissa määritellään, miten tieto kulkee sovelluksessa palvelimelta eteenpäin):
   - index.js: Sovelluksen perusreitti, jota käytetään vain testaamiseen. Tulostaa Express.sovelluskehyksen tervetulosivun ("Welcome to Express").
   - sanakirjaroute.js: Sanakirjan-sovelluksen kaikki perusreitit ja niitä käsittelevät callbackit (eli parametreina välitettävät funktiot) sisältävä tiedosto
   - users.js: Sanakirjan-sovelluksen käyttäjien reitit ja niitä käsittelevät callbackit (eli parametreina välitettävät funktiot) sisältävä tiedosto
  - views-kansio (sisältää sanakirjan näkymät eli sovelluksen sivut)
   - error.ejs: virhesivu, joka näytetään virhetilanteessa
   - hakutulossivu.ejs: vanha versio sivusta, joka näytetään käyttäjän haettua sanaa joko englanniksi tai suomeksi
   - lisayssivu.ejs: sivu, joka näytetään sanaa lisättäessä
   - paivityssivu.ejs: sivu, joka näytetään sanaa päivitettäessä
   - poistosivu.ejs: sivu, joka näytetään tiedostoa poistettaessa
   - sanakirja.ejs: sivu, joka näytetään sanaa haettaessa
   - sanakirjasivu.ejs: Sanakirjan hakusivun vanhempi vewrsio (vain oppimisprosessin kuvaustarkoituksena)
   - sanakirjasivu_juho.html: sanakirjasivu-näkymän vanhempi html-versio, jossa on myös JavaScript-koodia erillisessä script-elementissä ja saavutettavan yhdistelmäruudun yritelmä, joka ei kuitenkaan toiminut. Tiedosto on siis mukana vain oppimisprosessin kuvausta varten.
   - tulossivu.ejs: sivu, joka näytetään käyttäjän haettua sanaa joko englanniksi tai suomeksi
  - App.js: Sovelluksen päätiedosto (sisältää kaikki sovelluksen käynnistykseen ja toimintaan liittyvät ydinasiat, kuten muuttujien alustuksen ja sovelluksen käynnistämisen app-olion kautta kutsuttavan listen-metodin avulla)
  - pagkage.json: JSON (JavaScript Object Notation) -muotoinen tiedosto, joka sisältää Sanakirja-web-sovelluksen kannalta tärkeimmät NodeJS-kirjaston moduulit.
  - * Package.json: JSON (JavaScript Object Notation) -muotoinen tiedosto, joka sisältää tiedon asennetuista NodeJS:n moduuleista
  - reademe_fi.md: Tämä ohjetiedosto, joka sisältää tietoja sovelluksesta, sen käytöstä ja asennuksesta.
  - sanakirja.sql: Sanakirja-sovelluksen luontiin tarkoitettu testititietokanta (Sisältää kaksi käyttäjää, kaksi käyttäjille määriteltyä roolia (perus- ja admin-käyttäjä) ja yhden sanakirjan (Suomi-englanti-sanakirja), jossa on neljä sanaa (tuli/fire, vesi/water, koira/dog ja kissa/cat).
 - .gitignore: sisältää tiedostot ja kansiot, joita Git ei ota mukaan versionhallintaan.


## Sovelluksen asennus
Huomautus: Koska sovellus on testattu ja todettu toimivaksi Windowsilla (Windows 10 Professional, 64-vittinen, versio 10.0.18362.890)), ohje on tehty Windowsin käyttäjän ( ja myös ruudunlukuohjelman käyttäjän) näkökulmasta. Linuxin ja MAC OS:n käyttäjien pitäisi kuitenkin pystyä asentamaan sovellus, kun heidän koneissaan on ensin NodeJS:n ja XAMPP:n versiot kyseiselle käyttöjärjestelmälle (siis MAC OS tai Linux-versio).

### Ennakkovaatimukset
Ennen sovelluksen asennusta seuraavat ohjelmistot tulee olla asennettuna (voi toimia muillakin, mutta nämä todettu toimiviksi Windowsissa):
- XAMPP for Windows 7.3.0-0 (Sisältää MySQL-palvelimen joka tarvitaan tietokannan käsittelyssä).
- NodeJS for Windows (testattu versiolla 10.16.3, pitäisi toimia uudemmissakin).
- Git-versionhallintajärjestelmä (testattu Gitin Windows-versiolla 2.23.0, pitäisi toimia myös muissakin käyttöjäräjestelmissä (kuten Linux) sitä käytettäessä)

Lisäksi XAMPP-ohjelmistosta tulee olla käynnistettyinä Apache- ja MySQL-palvelimet. Voit käynnistää ne kahdella tavalla:
- Avaa komentokehote (kuten Windows Power Shell tai Komentokehote) ja siirry kansioon, johon XAMPP asentui (oletuksena c:\xampp). Aja komentojonot apache_start.bat ja mysql_start.bat. Vastaavasti palvelinten pysäytys tapahtuu ajamalla komentojonot apache_stop.bat ja mysql_stop.bat. Komentojonot ajetaan eli suoritetaan kirjoittamalla niiden nimi komentokehotteeseen XAMPP:n sisältävässä kansiossa oltaessa.
- Vaihtoehtoisesti voit siirtyä Windowsin Resurssienhallinnassa kansioon, johon XAMPP asentui (oletuksena c:\xampp) ja kaksoisklikkaamalla tiedostoa xampp-control.exe tai vaihtoehtoisesti siirtymällä sen kohdalle näppäimistöllä ja painamalla enteriä xampp-control.exe-tiedoston kohdalla. Sen jälkeen avautuu valintaikkuna, jossa on kaikkien palvelimien käynnistys-  ja pysäytyspainikkeet sekä asetusten hallintapainikkeet ja muita säätöpainikkeita. Sen lisäksi ikkunassa on myös tekstikenttä, josta näkyy XAMPP-sovellusten toiminta. Käynnistä Apache-ja MySQL-palvelin (nimenomaan tässä järjestyksessä) joko kaksoisklikkaamalla palvelinten kuvakkeiden vieressä olevia Start-painikkeita tai siirtymällä Sarkain-näppäimellä ensimmäisen Start-painikkeen (Apache) kohdalle painamalla sitä kaksi kertaa ja painamalla välilyöntiä, joka aktivoi painikkeen. Sen jälkeen siirry toisen Start-painikkeen (MySQL) kohdalle painamalla taas Sarkain-näppäintä kaksi kertaa ja painamalla sitten välilyöntiä, joka aktivoi painikkeen. Tarkista vielä lopuksi lokiteksti-säätimestä, että palvelimet ovat käynnissä joko klikkaamalla aluetta hiirellä tai siirtymällä Vaihto+Sarkain-näppäinyhdistelmällä taaksepäin säätimissä niin kauan kunnes kuulet ilmoituksen "Muokkaa. Kirjoita tekstiä" (tai englanninkielistä ruudunlukuohjelmaa käytettäessä "Edit. Contains Text.") ja paina CTRL+End-näppäinyhdistelmää,, joka siirtää kohdistuksen sivun loppuun. Siirry sen jälkeen nuolinäppäimillä ylöspäin ensin yksi rivi ylöspäin, kuuntele/lue se ja sirry sitten kaksi riviä ylöspäin. Jos kummankin rivin lopputekstinä on "running" eli "käynnissä", palvelimet ovat toiminnassa ja voit siirtyä asentamaan sovellusta. Muussa tapauksessa voit tehdä muutoksia asetustiedostoihin (.conf) tai kysyä apua esimerkiksi XAMPP:n keskustelufoorumista tai tuntemiltasi kavereilta.

### Asennusohje
- Aivan ensimmäiseksi avaa komentokehote (kuten Windows Power Shell tai perinteinen Windowsin komentokehote)
- Luo kansio, johon haluat asentaa ohjelman (esimerkiksi websk_lopputyo).
- Siirry luomaasi kansioon cd-komennolla (esimerkissä "cd websk_lopputyo).
- Kloonaa git varasto (repository) komennolla git clone https://github.com/juhotuomainen/websk_lopputyo.git
- tarkista dir-komennolla, asentuiko kansioon mitään kirjoittamalla pelkkä komennon nimi.
- Siirry expressmvc-kansioon cd-komennolla kirjoittamalla cd expressmvc. Kun olet siirtynyt tähän kansioon, asennusohjelma asentaa tiedostot oikealla tavalla.
- Asenna ohjelmistot kirjoittamalla komentokehotteessa komento "npm install". Tämän komennon pitäisi asentaa kaikki ohjelmistot (lista package.json-tiedostossa), jotka tarvitaan ohjelman toimimiseksi.
- Aja eli suorita testitietokannan luontiin tarkoitettu sql-tiedosto avaamalla toinen komentokehote. Jos olet määritellyt MySQL-palvelimen (MariaDB) hakemiston ympäristömuuttujaan eli siten, että voit käynnistää sovelluksen mistä tahansa, kirjoita vain mysql -u käyttäjänimi -p salasana (korvaa "käyttäjänimi" ja "salasana" tietokantasi tiedoilla; Oletuksena käyttäjänimi on root ja salasanaa ei ole). 
 - Jos et ole määritellyt mysql:iä käynnistymään mistä tahansa, mene ensin XAMPPin hakemistoon komentokehotteessa cd-komennolla (oletuksena "c:\xampp") ja sitten samalla komennolla kansioon "mysql" ("cd mysql"). Paina Enteriä. Kirjoita sitten "Mysql -u käyttäjänimi -p salasana" -komento.
 - Kummassakin tapauksessa Näkyviin tulee MariaDB:n ikkuna. Kirjoita siihen komento "source sanakirja.sql", jos olet käynnistänyt MariaDB:n komentokehotteen kansiosta, jossa sovelluksen sisältämä expressmvc-kansio on tai "source asematunnus:polku\kansioon\expressmvc\sanakirja.sql", jos olet muualla kuin sanakirjaskriptin sisältävässä expressmvc-kansiossa ja paina Enteriä. Nyt valmiusmerkin (kursorin vasemmalla puolella oleva teksti) pitäisi olla muodossa "MariaDB[(Sanakirja)]>", mikä tarkoittaa, että Sanakirja-tietokanta on valittu ja luotu. Sulje komentokehote CTRL+C:llä.
- Käynnistä sovellus komentokehotteessa komennolla "nodemon app". Sammutus tapahtuu näppäinkomennolla CTRL+C. Paina siis ensin CTRL-näppäintä (löytyy usein näppäimistön vasemmasta alakulmasta Windows-näppäimen vasemmalta puolelta tai oikeasta alakulmasta vasemman nuolinäppäimen vasemmalta puolelta) ja sitten paina kerran C-näppäintä.

### Sovelluksen käyttö
Tällä hetkellä kaikki toiminnot toimivat käyttöliittymän kautta, mutta suoria linkkejä niihin ei vielä ole (poikkeuksena suomen- ja englanninkielisen sanan haku, jotka toimivat painamalla käyttöliittymässä olevia "Suomi" tai "Englanti"-painikkeita (ruudunlukuohjelman käyttäjällä tekstinä on "Hakukieli suomi" tai "Hakukieli englanti" selvyyden vuoksi)). Siksi alla on lueteltu osoitteet, joihin selaimella tulee mennä, jotta haluttu sivu tulee näkyviin:
- Sanakirjan aloitussivu: http://localhost:3000/sanakirja (sisältää hakupainikkeet (suomi ja Englanti) sekä tekstikentän, johon voi kirjoittaa hakutuloksen)
- Kaikkien sanojen näyttäminen: localhost:3000/kaikkisanat (tulostaa kaikki sanat ja niiden kuvaukset niin suomeksi kuin englanniksi näytölle)
- suomenkielisen sanan haku englanniksi: http://localhost:3000/sanakirja/sanafi (tähän mennään automaattisesti "Englanti" -painiketta (tai ruudunlukuohjelman käyttäjällä "Hakukieli englanti" painamalla)
- englanninkielisen sanan haku suomeksi: http://localhost:3000/sanakirja/sanaen (tähän mennään automaattisesti "Suomi" -painiketta (ruudunlukuohjelman käyttäjällä "Hakukieli suomi" -painiketta) painamalla)
- Sanan lisäys: http://localhost:3000/sanakirja/lisaasana (avaa lisayssivu.ejs-tiedoston kautta käyttöliittymän, jonka kautta voi lisätä sanan). Ikkunassa on ensin toisen tason otsikko "Sanan lisäys sanakirjaan", sitten tekstikenttä "Sana suomeksi", johon lisätään suomenkielinen sana, "Sana englanniksi", johon lisätään vastaava englanninkielinen sana, "Sanan kuvaus suomeksi", johon kirjoitetaan suomenkielinen, lisättävän sanan kuvaus ja "Sanan kuvaus englanniksi", johon kirjoitetaan uuden sanan englanninkielinen kuvaus. Lisäksi sivulla on "Lisää sana" -painike, jota painamalla voidaan lisätä sana. Sovellus ilmoittaa "Lisää sana"-painikkeen painamisen jälkeen, onnistuiko sanan lisäys. Jos ongelmia ilmeni, sovellus ilmoittaa siitä käyttäjälle.
- Sanan poisto: http://localhost:3000/sanakirja/poistasana (avaa poistosivu.ejs-tiedoston kautta käyttöliittymän, jonka kautta voi poistaa sanan). Ikkunassa on sanan kirjoituskenttä, johon poistettava sana kirjoitetaan ja "Poista sana" -painike, jota painamalla "Poistettava sana" -kenttään kirjoitettu sana voidaan poistaa. Kun poisto on tehty, sovellus ilmoittaa lopuksi, onnistuiko se. Jos ongelmia ilmeni, sovellus ilmoittaa siitä käyttäjälle.
- Sanan päivitys: http://localhost:3000/sanakirja/paivitasana (avaa paivityssivu.ejs-tiedoston kautta käyttöliittymän, jonka kautta voi päivittää sanan). Sivulle on ensin toisen tason otsikko "Sanan päivitys" ja sitten lomake. Siinä on ensimmäisenä tekstikenttä "Päivitettävä sana", johon kirjoitetaan päivitettävä sana joko englanniksi tai suomeksi, sitten tekstikenttä "Sana suomeksi", johon päivitetään suomenkielinen sana, "Sana englanniksi", johon päivitetään vastaava englanninkielinen sana, "Sanan kuvaus suomeksi", johon kirjoitetaan suomenkielinen, uusi sanan kuvaus ja "Sanan kuvaus englanniksi", johon kirjoitetaan uuden sanan englanninkielinen kuvaus. Lisäksi sivulla on "Päivitä sana" -painike, jota painamalla voidaan päivittää sana. Sovellus ilmoittaa lopuksi, onnistuiko sanan päivitys. Jos ongelmia ilmeni, sovellus ilmoittaa siitä käyttäjälle.

## Lisenssi (License)
Juhon lisenssi (JL), versio 0.1 (15.6.2020)
§1. Termit:
Teoksen tekijällä (Jäljempänä "oppilas") tarkoitetaan henkilöä, joka on tehnyt tämän  teoksen lukuun ottamatta NodeJS:n tarjoamia valmiita lisäosia (jäljempänä "moduulit"). Teoksen arvioijalla (jäljempänä "opettaja") tarkoitetaan henkilöä, joka arvioi teoksen osana Web-sovelluskehitys 1 -kurssia. Käyttäjällä (jäljempänä "Käyttäjä") tarkoitetaan henkilöä, joka käyttää (ajaa, asentaa ja testaa tai muutoin käyttää) sovellusta tietokoneessaan. Sovelluksen vaatimalla ympäristöllä (jäljempänä "sovelluksen vaatima ympäristö") tarkoitetaan ohjelmistojen ja moduulien muodostamaa kokonaisuutta, joka tarvitaan sovelluksen käynnistymiseen ja suorittamiseen. 

§2. Lisenssin sisältö
§2.1. Opettajan ja oppilaan oikeudet
Tämä sovellus on tarkoitettu vain arviointi- ja testikäyttöön, minkä vuoksi ssiinä on turvallisuus- ja muita puutteita.  Opettajalla on oikeus teoksen muokkaamiseen, jos hän katsoo sen olevan välttämätöntä. Lisäksi opettajalla on oikeus kommentoida ja arvioida oppilaan työtä. Oppilaalla on oikeus tekemäänsä koodiin ja kun arviointi on päättynyt ja kurssi suoritettu hyväksytysti, opiskelijalla on kaikki oikeudet kirjoittamansa koodin uudelleenkäyttöön. Opiskelijalla ei ole oikeutta NodeJS:n moduuleihin tai NodeJS-kehitysalustaan, jonka tekijänoikeudet omistaa Google (https://www.google.com). 
§2.2. Käyttäjän oikeudet
Käyttäjä saa asentaa yhden (1) kopion sovelluksesta tietokoneelleen ja käyttää sitä vain sovelluksen testaamiseen, henkilökohtaiseen eikä mihinkään kaupalliseen käyttöön. 

§2.3. Käyttäjän oikeuksien rajoitukset
Käyttäjä ei saa muokata sovellusta millään tavalla eikä levittää sitä eteenpäin ilman oppilaan kirjallista suostumusta (poikkeuksena tähän on sanakirjasivu_juho.html-sivun yhdistelmäruuduissa ollut kooodi, jota koskevat omat lisenssiehdot ja jotka löytyvät, kun käyttäjä avaa tiedoston (polku päähakemistosta katsottuna: .\expressmvc\views\sanakirjasivu_juho.html). Hän ei saa myöskään enepää kuin yhden kopion konelleen tai palvelimelle, johon sovellus ja sen vaatima ympäristö on asennettu. 

§4. Tekijänoikeudet
Tämän teoksen tekijänoikeudet omistaa Juho Tuomainen. Tekijänoikeudet (C) 2020 Juho Tuomainen. Kaikki oikeudet pidätetään ellei toisin mainita.