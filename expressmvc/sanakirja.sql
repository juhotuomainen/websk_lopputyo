-- Luodaan sanakirja CREATE DATABASE-lausekkeella.
CREATE DATABASE IF NOT EXISTS Sanakirja;
-- Käytetään Sanakirja-tietokantaa USE-lausekkeella.
USE Sanakirja;
-- Taulujen tuhoamislauseet
DROP TABLE IF EXISTS Sana;
DROP TABLE IF EXISTS Sanakirja;

CREATE TABLE Sanakirja(
sanakirja INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nimi VARCHAR(44) NOT NULL,
sanakirjan_kuvaus VARCHAR(90))
ENGINE=INNODB;

/* Tehdään Sana-taulu, jossa ovat sarakkeet Sana (automaattisesti juokseva), Sanan_nimi (tyyppi VARCHAR), Sanan_kuvaus (VARCHAR) ja Sanakirja(viiteavainsarake, joka viittaa Sanakirja-taulun Sanakirja-sarakkeeseen.*/
CREATE TABLE Sana(
sana INT PRIMARY KEY AUTO_INCREMENT,
sanan_nimi_fi VARCHAR(100) NOT NULL,
sanan_nimi_en VARCHAR(100) NOT NULL,
-- Tässä oli alun perin sanan_kieli-sarake, mutta se poistettiin hyödyttymyöden vuoksi ja korvattiin sana_en- ja sana_fi-sarakkeilla.
sanan_kuvaus_fi VARCHAR(100) NOT NULL,
sanan_kuvaus_en VARCHAR(100) NOT NULL)
ENGINE=INNODB;
-- Alun perin tässä oli myös luonti- (siis CREATE TABLE) ja lisäys- eli INSERT INTO-lauseet  Rooli- ja Kayttaja-tauluille, mutta ne poistettiin, koska niitä ei tarvittu.
-- Lisätään tietoja tietokantaan INSERT INTO-lauseella.
-- Sanakirja-taulun INSERT INTO-lauseet
INSERT INTO Sanakirja(nimi, sanakirjan_kuvaus) VALUES ('englanti-suomi-sanakirja', 'Erittäin yksinkertainen englanti-suomi/suomi-englanti-sanakirjan demoversio');

-- Sana-taulun INSERT INTO-lauseet
INSERT INTO Sana (sanan_nimi_fi, sanan_nimi_en, sanan_kuvaus_fi, sanan_kuvaus_en) VALUES('kissa', 'cat', 'Kissaeläimiin kuuluva eläin.', 'An animal belonging to cat animals.'),
('tuli', 'fire', 'Palamisprosessi, jonka seurauksena syntyy tuhkaa.', 'A burning process which makes cinder (also known as ashes)).'),
('vesi', 'water', 'Aine, jolla on neljä olomuotoa: kiinteä, kaasu, höyry ja neste.', 'A subject with four forms: solid, gas, steam and liquid).'),
('koira', 'dog', 'Candidae-heimoon kuuluva eläin, joka on sukua sudelle.', 'An animal belonging to Candidae Tribe (animals that are relatives of the wolves.');

