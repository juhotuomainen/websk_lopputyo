-- Luodaan sanakirja CREATE DATABASE-lausekkeella.
CREATE DATABASE IF NOT EXISTS Sanakirja;
-- Käytetään Sanakirja-tietokantaa USE-lausekkeella.
USE Sanakirja;
-- Taulujen tuhoamislauseet
DROP TABLE IF EXISTS Kayttajatili;
DROP TABLE IF EXISTS Rooli;
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
sanan_kuvaus_en VARCHAR(100) NOT NULL,
sanakirja INT NOT NULL,
FOREIGN KEY (sanakirja) REFERENCES Sanakirja(sanakirja,)
ON UPDATE CASCADE
ON DELETE CASCADE
) ENGINE=INNODB;

-- Tehdään taulukko Rooli. Sen sarakkeita ovat Rooli, nimi ja viiteavainsarake Kayttajatili, joka viittaa Kayttaja-tili-taulun Kayttajatili-sarakkeeseen */
CREATE TABLE Rooli(
rooli INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
Nimi VARCHAR(20) NOT NULL
ON UPDATE CASCADE
ON DELETE CASCADE

)ENGINE=INNODB;

/* Tehdään taulu Kayttajatili. Sen sarakkeita ovat Kayttajatili (tietotyyppi kokonaisluku ja automaattisesti juokseva), Kayttajatunnus (tietotyyppi VARCHAR ja maksimipituus 30 merkkiä), Salasana (tietotyyppi varchar ja maksimipituus 44 merkkiä) sekä Rooli (viiteavainsarake, joka viittaa Rooli-taulun Rooli-perusavainsarakkeeseen).*/ 
CREATE TABLE Kayttajatili(
kayttajatili INT PRIMARY KEY AUTO_INCREMENT,
kayttajatunnus VARCHAR(30) NOT NULL,
salasana VARCHAR(44) NOT NULL,
rooli INT NOT NULL,
FOREIGN KEY(rooli) REFERENCES Rooli(rooli)
ON UPDATE CASCADE
ON DELETE CASCADE
)
-- Moottorina INNODB
ENGINE=INNODB;

-- Lisätään tietoja tietokantaan INSERT INTO-lauseella.
-- Sanakirja-taulun INSERT INTO-lauseet
INSERT INTO Sanakirja(nimi, sanakirjan_kuvaus) VALUES ('englanti-suomi-sanakirja', 'Erittäin yksinkertainen englanti-suomi/suomi-englanti-sanakirjan demoversio');

-- Sana-taulun INSERT INTO-lauseet
INSERT INTO Sana (sanan_nimi_fi, sanan_nimi_en, sanan_kuvaus_fi, sanan_kuvaus_en, sanakirja) VALUES('cat', 'kissa', 'Kissaeläimiin kuuluva eläin.', 'An animal belonging to cat animals.', 1),
('tuli', 'fire', 'Palamisprosessi, jonka seurauksena syntyy tuhkaa.', 'A burning process which makes cinder (also known as ashes)).', 1),
('water', 'vesi', 'Aine, jolla on neljä olomuotoa: kiinteä, kaasu, höyry ja neste.', 'A subject with four forms: solid, gas, steam and liquid).', 1),
('dog', 'koira', 'Candidae-heimoon kuuluva eläin, joka on sukua sudelle.', 'An animal belonging to Candidae Tribe (animals that are relatives of the wolves.', 1);

INSERT INTO Rooli(Nimi) VALUES ('Peruskäyttäjä'),
('ylläpitäjä');
 
-- Kayttajatili-taulun INSERT INTO-lauseet
INSERT INTO Kayttajatili(kayttajatunnus, salasana, rooli) VALUES ('Anneli96', 'helpposalasana', 1),
('hannelez2', 'KxfdszZ2aJl>', 2);
-- Rooli-taulun INSERT INTO-lauseet
-- Luodaan sanakirja CREATE DATABASE-lausekkeella.
CREATE DATABASE IF NOT EXISTS Sanakirja;
-- Käytetään Sanakirja-tietokantaa USE-lausekkeella.
USE Sanakirja;
-- Taulujen tuhoamislauseet
DROP TABLE IF EXISTS Kayttajatili;
DROP TABLE IF EXISTS Rooli;
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
sanan_kuvaus_en VARCHAR(100) NOT NULL,
sanakirja INT NOT NULL,
FOREIGN KEY (sanakirja) REFERENCES Sanakirja(sanakirja))
ENGINE=INNODB;

-- Tehdään taulukko Rooli. Sen sarakkeita ovat Rooli, nimi ja viiteavainsarake Kayttajatili, joka viittaa Kayttaja-tili-taulun Kayttajatili-sarakkeeseen */
CREATE TABLE Rooli(
rooli INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
Nimi VARCHAR(20) NOT NULL
)ENGINE=INNODB;

/* Tehdään taulu Kayttajatili. Sen sarakkeita ovat Kayttajatili (tietotyyppi kokonaisluku ja automaattisesti juokseva), Kayttajatunnus (tietotyyppi VARCHAR ja maksimipituus 30 merkkiä), Salasana (tietotyyppi varchar ja maksimipituus 44 merkkiä) sekä Rooli (viiteavainsarake, joka viittaa Rooli-taulun Rooli-perusavainsarakkeeseen).*/ 
CREATE TABLE Kayttajatili(
kayttajatili INT PRIMARY KEY AUTO_INCREMENT,
kayttajatunnus VARCHAR(30) NOT NULL,
salasana VARCHAR(44) NOT NULL,
rooli INT NOT NULL,
FOREIGN KEY(rooli) REFERENCES Rooli(rooli))
-- Moottorina INNODB
ENGINE=INNODB;

-- Lisätään tietoja tietokantaan INSERT INTO-lauseella.
-- Sanakirja-taulun INSERT INTO-lauseet
INSERT INTO Sanakirja(nimi, sanakirjan_kuvaus) VALUES ('englanti-suomi-sanakirja', 'Erittäin yksinkertainen englanti-suomi/suomi-englanti-sanakirjan demoversio');

-- Sana-taulun INSERT INTO-lauseet
INSERT INTO Sana (sanan_nimi_fi, sanan_nimi_en, sanan_kuvaus_fi, sanan_kuvaus_en, sanakirja) VALUES('cat', 'kissa', 'Kissaeläimiin kuuluva eläin.', 'An animal belonging to cat animals.', 1),
('tuli', 'fire', 'Palamisprosessi, jonka seurauksena syntyy tuhkaa.', 'A burning process which makes cinder (also known as ashes)).', 1),
('water', 'vesi', 'Aine, jolla on neljä olomuotoa: kiinteä, kaasu, höyry ja neste.', 'A subject with four forms: solid, gas, steam and liquid).', 1),
('dog', 'koira', 'Candidae-heimoon kuuluva eläin, joka on sukua sudelle.', 'An animal belonging to Candidae Tribe (animals that are relatives of the wolves.', 1);

INSERT INTO Rooli(Nimi) VALUES ('Peruskäyttäjä'),
('ylläpitäjä');
 
-- Kayttajatili-taulun INSERT INTO-lauseet
INSERT INTO Kayttajatili(kayttajatunnus, salasana, rooli) VALUES ('Anneli96', 'helpposalasana', 1),
('hannelez2', 'KxfdszZ2aJl>', 2);
-- Rooli-taulun INSERT INTO-lauseet
