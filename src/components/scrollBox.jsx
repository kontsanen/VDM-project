import React from 'react';
import { ScrollArea, Viewport, Scrollbar, Thumb, Corner } from '@radix-ui/react-scroll-area';


const ScrollBox = () => {
  console.log('Rendered')
  return (
    <div>
      <ScrollArea.Root>
        <Viewport>

          <li>Cats</li>
          <li>Dogs</li>
          <li>Horses</li>
         
        </Viewport>
        <Scrollbar orientation="horizontal">
          <Thumb />
        </Scrollbar>
        <Scrollbar orientation="vertical">
          <Thumb />
        </Scrollbar>
        <Corner />
      </ScrollArea.Root>
    </div> 
  );
};

export default ScrollBox;


