import React from 'react';
import { ScrollArea, Viewport, Scrollbar, Thumb, Corner } from '@radix-ui/react-scroll-area';


export const ScrollBox = () => {
  
  const Sources =  [
    'Cats',
    'Dogs',
  ];
  return (
    <div>
    <div> Scroll box would be here! </div>
   <ScrollArea.Root>
      <Viewport>
        <ul>
          {Sources.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Viewport>
      <Scrollbar orientation="horizontal">
        <Thumb />
      </Scrollbar>
      <Scrollbar orientation="vertical">
        <Thumb />
      </Scrollbar>
      <Corner />
  </ScrollArea.Root> */
    </div>
  );
};



