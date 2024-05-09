import React from 'react';
import './Info.css';


function InfoBody() {
  return (
    <div className="body-container"> 
      <div className="textitem1">Jos vastasit kyllä, usean media-alustan käyttämät <span className="pink-and-bold-word"> algoritmit </span> ovat tehneet tehtävänsä. Yksinkertaisimmillaan algoritmit voivat määrittää esimerkiksi näkyvätkö uutiset uusimmasta vanhimpaan vai suosituimmasta vähiten klikattuun.</div>
      <div className="textitem2">Nykyään algoritmeja käytetään kuitenkin myös määrittelemään, mitä sisältöjä näet. Tämä tehdään usein esimerkiksi käyttöhistoriasi perusteella.</div>
      <div className="textitem1"> Jos luet usein uutisia jalkapallosta tai tykkäilet paljon tietyn poliitikon videoista, näet mitä todennäköisimmin näihin aihepiireihin liittyviä sisältöjä etusivullasi huomenna ja sitä seuraavanakin päivänä. Kuulostaa kivalta, vai mitä? Pian saatat kuitenkin huomata, että muunlaisen sisällön osuus on pienentynyt.</div>
      <div className="textitem2"> <img src="../public/cat.jpg" alt="Description of the image" /> </div>
      <div className="textitem1"> Tätä tapahtumaa kutsutaan <span className="pink-and-bold-word"> informaatiokuplaksi </span> (eng. Filter bubble), ja sen vuoksi on yhä tärkeämpää ymmärtää, mitä mediassa kuluttaa. Vaikka edellä mainitut esimerkit informaatiokuplista ovatkin harmittomia, on algoritmien todettu vahvistavan esimerkiksi <span className="pink-and-bold-word"> disinformaation </span> ja <span className="pink-and-bold-word"> misinformaation</span>, eli valheellisen tiedon, leviämistä. Jos käyttäjä ei näe tiedon valheellisuutta, saattaa harmittomasta kuplasta tulla vaarallisen valheellinen.</div>
      <div className="textitem2">Valheellisen tiedon ohella myös näkökulma ympäröivään maailmaan ja sen tapahtumiin kaventuu, kun oma syöte toistaa vain samoja teemoja ja näkökulmia. Yhteiskunnan tasolla tämä lisää <span className="pink-and-bold-word"> polarisaatiota </span> eli mielipiteiden selkeää kahtia jakautumista ja vastakkainasettelua. Yksilön tasolla tämä saattaa puolestaan johtaa olennaisen, esimerkiksi terveyteen tai sotaan liittyvän tiedon missaamiseen.</div>
      <div className="text-item3"> Älä anna siis muiden puhaltaa kupliasi – mieti, mitä luet.</div>
      
      
      <div className="roster-container"> 
        <div className="text-item4">
          <span className="bold-word"> Käsitteitä * </span>
          <p>1. <span className="pink-and-bold-word"> Algoritmi </span> eli kuvaus tai ohje siitä, miten joki tehtävä</p>
          <p>2. <span className="pink-and-bold-word"> Disinformaatio </span>  eli tahallisesti levitettyä väärä tieto.</p>
          <p> 3. <span className="pink-and-bold-word"> Misinformaatio </span> eli tahattomasti levitetty väärä tieto.</p>
          <p>4. <span className="pink-and-bold-word"> Informaatiokupla </span> (filter bubble) eli</p>
          <p>5. <span className="pink-and-bold-word"> Medialukutaito </span> eli kyky lukea ja ymmärtää mediaa.</p>
          <p>6. <span className="pink-and-bold-word"> Polarisaatio </span> eli</p>
          <div className="text-item5"> päläpälä </div>
          </div>
        </div>
        </div>
      
    );
}

export default InfoBody;