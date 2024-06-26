import React from 'react';
import './info.css'
import { ScrollBox } from './components/scrollBox';


function InfoBody() {
  return (
    <div className="body-container"> 
    
      
        <div className="textitem1">Jos vastasit kyllä, usean media-alustan käyttämät <span className="pink-and-bold-and-cursive-word"> algoritmit </span> ovat tehneet tehtävänsä. Yksinkertaisimmillaan algoritmit voivat määrittää esimerkiksi näkyvätkö uutiset uusimmasta vanhimpaan vai suosituimmasta vähiten klikattuun.</div>
     

      <div className="textitem2">Nykyään algoritmeja käytetään kuitenkin myös määrittelemään, mitä sisältöjä näet. Tämä tehdään usein esimerkiksi käyttöhistoriasi perusteella.</div>
      <div className="textitem1"> Jos luet usein uutisia jalkapallosta tai tykkäilet paljon tietyn poliitikon videoista, näet mitä todennäköisimmin näihin aihepiireihin liittyviä sisältöjä etusivullasi huomenna ja sitä seuraavanakin päivänä. Kuulostaa kivalta, vai mitä? Pian saatat kuitenkin huomata, että muunlaisen sisällön osuus on pienentynyt.</div>
      <div className="cat-pic"><img src="/resources/images/cat.jpg" alt="Yle" width="100%" /></div>
      <div className="textitem1"> Tätä tapahtumaa kutsutaan <span className="pink-and-bold-and-cursive-word"> informaatiokuplaksi </span> (eng. Filter bubble), ja sen vuoksi on yhä tärkeämpää ymmärtää, mitä mediassa kuluttaa. Vaikka edellä mainitut esimerkit informaatiokuplista ovatkin harmittomia, on algoritmien todettu vahvistavan esimerkiksi <span className="pink-and-bold-and-cursive-word"> disinformaation </span> ja <span className="pink-and-bold-and-cursive-word"> misinformaation</span>, eli valheellisen tiedon, leviämistä. * Jos käyttäjä ei näe tiedon valheellisuutta, saattaa harmittomasta kuplasta tulla vaarallisen valheellinen.</div>
      <div className="textitem2">Valheellisen tiedon ohella myös näkökulma ympäröivään maailmaan ja sen tapahtumiin kaventuu, kun oma syöte toistaa vain samoja teemoja ja näkökulmia. Yhteiskunnan tasolla tämä lisää <span className="pink-and-bold-and-cursive-word"> polarisaatiota </span> eli mielipiteiden selkeää kahtia jakautumista ja vastakkainasettelua. Yksilön tasolla tämä saattaa puolestaan johtaa olennaisen, esimerkiksi terveyteen tai sotaan liittyvän tiedon missaamiseen.</div>
      <div className="text-item3"> Älä anna siis muiden puhaltaa kupliasi – mieti, mitä luet.</div>
      
        <div className="text-item4">
          <span className="bold-word"> Käsitteitä ** </span>

          <div className='term-element'>
            <p>1. <span className="pink-and-bold-and-cursive-word"> Algoritmi </span></p>
            <p className='explanation'>eli sarja täsmällisesti määriteltyjä käskyjä tai toimenpiteitä jonkin tehtävän suorittamiseksi.</p>
          </div>
          <div className='term-element'>
            <p>2. <span className="pink-and-bold-and-cursive-word"> Disinformaatio</span></p>
            <p className='explanation'>eli tahallisesti levitettyä väärä tieto.</p>
          </div>
          <div className='term-element'>
            <p>3. <span className="pink-and-bold-and-cursive-word"> Misinformaatio</span></p>
            <p className='explanation'>eli tahattomasti levitetty väärä tieto.</p>
          </div>
          <div className='term-element'>
            <p>4. <span className="pink-and-bold-and-cursive-word"> Informaatiokupla</span></p>
            <p className='explanation'>(filter bubble) eli ilmiö, jossa käyttäjien näkökulmat ja ideologiat vahvistuvat esimerkiksi algoritmien tai räätälöityjen hakutulosten seurauksena.</p>
          </div>
          <div className='term-element'>
            <p>5. <span className="pink-and-bold-and-cursive-word"> Medialukutaito </span></p>
            <p className='explanation'>eli kyky lukea ja ymmärtää mediaa.</p>
          </div>
          <div className='term-element'>
            <p>6. <span className="pink-and-bold-and-cursive-word"> Polarisaatio </span></p>
            <p className='explanation'>eli yhteiskunnan yhtenäisyyttä heikentävä ilmiö, jossa vastakkainasettelu lisääntyy ja eri väestöryhmien elämänpiirit eriytyvät toisistaan.</p>
          </div>
        </div>

        <div className="roster-container"> 
          <div className="text-item5">  
              <ScrollBox />
          </div>
        </div>
        
    </div>
    );

    
}

export default InfoBody;