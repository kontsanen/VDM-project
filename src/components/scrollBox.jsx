import React from 'react';
import './scrollBox.css';
import { ScrollArea, Viewport, Scrollbar, Thumb, Corner } from '@radix-ui/react-scroll-area';


export const ScrollBox = () => {

  const sources = [
    {
      title: "* Micich & Cross. (2023). How misinformation on social media has changed news.",
      url: "https://pirg.org/edfund/articles/misinformation-on-social-media/",
    },
    {
      title: "** Tieteen termipankki. (2024). Clean Energy Research:algorithm",
      url: "https://tieteentermipankki.fi/wiki/Clean_Energy_Research:algorithm",
    },
    {
      title: "** Yle. (2021). Valheenpaljastaja: Kahdeksan asiaa, jotka jokaisen pitäisi ymmärtää misinformaatiosta.",
      url: "https://yle.fi/aihe/artikkeli/2021/02/08/valheenpaljastaja-kahdeksan-asiaa-jotka-jokaisen-pitaisi-ymmartaa",
    },
    {
      title: "** Oxford -reference. (n.d.). Filter bubble.",
      url: "https://www.oxfordreference.com/display/10.1093/acref/9780191803093.001.0001/acref-9780191803093-e-482",
    },
    {
      title: "** Suomi.fi. (n.d.) Sisäisen turvallisuuden sanasto, yhteiskunnan polarisaatio.",
      url: "https://sanastot.suomi.fi/terminology/02462623-9925-43d7-b117-2ee271cebdb7/concept/0180f378-0378-45ac-8a6c-4326ee005d95",
    },
    {
      title: "Kuva: Jerry from Sioux Falls, South Dakota, United States, CC BY-SA 4.0, via Wikimedia Commons",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/White_cat_watching_Wikipedia.jpg",
    },
    
  ];

  return (
    <div>
   <ScrollArea className="ScrollAreaRoot">
      <Viewport className="ScrollAreaViewport">
      <div className="Text"> Lähteet: </div>
      <ul style={{ listStyle: 'none' }}> 
            {sources.map((source, index) => (
              <li key={index}>
                <a className='sourceContainer' href={source.url} target="_blank" rel="noopener noreferrer">
                  <div className='Tag'>
                    {source.title}
                  </div>
                  <div className='sourceArrow'>
                    <img src='/resources/images/arrow-right3.png' alt='>' height="100%" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
      </Viewport>
      <Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
        <Thumb className="ScrollAreaThumb"/>
      </Scrollbar>
      <Corner className="ScrollAreaCorner" />
  </ScrollArea> 
    </div>
  );
};



