import React from 'react';
import './info.css';


function InfoBody() {
  return (
    <div className="body-container"> 
      
        <div className="textitem1">Jos vastasit kyllä, usean media-alustan käyttämät <span className="pink-and-bold-and-cursive-word"> algoritmit </span> ovat tehneet tehtävänsä. Yksinkertaisimmillaan algoritmit voivat määrittää esimerkiksi näkyvätkö uutiset uusimmasta vanhimpaan vai suosituimmasta vähiten klikattuun.</div>
     

      <div className="textitem2">Nykyään algoritmeja käytetään kuitenkin myös määrittelemään, mitä sisältöjä näet. Tämä tehdään usein esimerkiksi käyttöhistoriasi perusteella.</div>
      <div className="textitem1"> Jos luet usein uutisia jalkapallosta tai tykkäilet paljon tietyn poliitikon videoista, näet mitä todennäköisimmin näihin aihepiireihin liittyviä sisältöjä etusivullasi huomenna ja sitä seuraavanakin päivänä. Kuulostaa kivalta, vai mitä? Pian saatat kuitenkin huomata, että muunlaisen sisällön osuus on pienentynyt.</div>
      <div className="textitem2"> <img src="/resources/images/cat.jpg" alt="Yle" width="50%" /> </div>
      <div className="textitem1"> Tätä tapahtumaa kutsutaan <span className="pink-and-bold-and-cursive-word"> informaatiokuplaksi </span> (eng. Filter bubble), ja sen vuoksi on yhä tärkeämpää ymmärtää, mitä mediassa kuluttaa. Vaikka edellä mainitut esimerkit informaatiokuplista ovatkin harmittomia, on algoritmien todettu vahvistavan esimerkiksi <span className="pink-and-bold-and-cursive-word"> disinformaation </span> ja <span className="pink-and-bold-and-cursive-word"> misinformaation</span>, eli valheellisen tiedon, leviämistä. Jos käyttäjä ei näe tiedon valheellisuutta, saattaa harmittomasta kuplasta tulla vaarallisen valheellinen.</div>
      <div className="textitem2">Valheellisen tiedon ohella myös näkökulma ympäröivään maailmaan ja sen tapahtumiin kaventuu, kun oma syöte toistaa vain samoja teemoja ja näkökulmia. Yhteiskunnan tasolla tämä lisää <span className="pink-and-bold-and-cursive-word"> polarisaatiota </span> eli mielipiteiden selkeää kahtia jakautumista ja vastakkainasettelua. Yksilön tasolla tämä saattaa puolestaan johtaa olennaisen, esimerkiksi terveyteen tai sotaan liittyvän tiedon missaamiseen.</div>
      <div className="text-item3"> Älä anna siis muiden puhaltaa kupliasi – mieti, mitä luet.</div>
      
      
      <div className="roster-container"> 
        <div className="text-item4">
          <span className="bold-word"> Käsitteitä * </span>
          <p>1. <span className="pink-and-bold-and-cursive-word"> Algoritmi </span> eli sarja täsmällisesti määriteltyjä käskyjä tai toimenpiteitä jonkin tehtävän suorittamiseksi. </p>
          <p>2. <span className="pink-and-bold-and-cursive-word"> Disinformaatio </span>  eli tahallisesti levitettyä väärä tieto.</p>
          <p> 3. <span className="pink-and-bold-and-cursive-word"> Misinformaatio </span> eli tahattomasti levitetty väärä tieto.</p>
          <p>4. <span className="pink-and-bold-and-cursive-word"> Informaatiokupla </span> (filter bubble) (filter bubble) eli ilmiö, jossa käyttäjien näkökulmat ja ideologiat vahvistuvat esimerkiksi algoritmien tai räätälöityjen hakutulosten seurauksena.  </p>
          <p>5. <span className="pink-and-bold-and-cursive-word"> Medialukutaito </span> eli kyky lukea ja ymmärtää mediaa.</p>
          <p>6. <span className="pink-and-bold-and-cursive-word"> Polarisaatio </span> eli yhteiskunnan yhtenäisyyttä heikentävä ilmiö, jossa vastakkainasettelu lisääntyy ja eri väestöryhmien elämänpiirit eriytyvät toisistaan.</p>
          <div className="text-item5">  
          <p> * Micich & Cross. 2023. How misinformation on social media has changed news. Saatavissa: https://pirg.org/edfund/articles/misinformation-on-social-media/   </p>
          <p> Tieteen termipankki. 2024: Clean Energy Research:algorithm. Saatavissa: https://tieteentermipankki.fi/wiki/Clean Energy Research:algorithm. </p>

          <p>Yle. 2021. Valheenpaljastaja: Kahdeksan asiaa, jotka jokaisen pitäisi ymmärtää misinformaatiosta. Saatavissa https://yle.fi/aihe/artikkeli/2021/02/08/valheenpaljastaja-kahdeksan-asiaa-jotka-jokaisen-pitaisi-ymmartaa </p>

          <p> Oxford -reference. (n.d.). Filter bubble. Saatavissa: https://www.oxfordreference.com/display/10.1093/acref/9780191803093.001.0001/acref-9780191803093-e-482 </p>

          <p> Suomi.fi. (n.d.) Sisäisen turvallisuuden sanasto, yhteiskunnan polarisaatio. Saatavissa: https://sanastot.suomi.fi/terminology/02462623-9925-43d7-b117-2ee271cebdb7/concept/0180f378-0378-45ac-8a6c-4326ee005d95  </p>
          </div>
          </div>
        </div>
        </div>
      
    );
}

export default InfoBody;