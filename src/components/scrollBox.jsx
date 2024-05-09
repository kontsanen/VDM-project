import React from 'react';

import { ScrollArea, Viewport, Scrollbar, Thumb, Corner } from '@radix-ui/react-scroll-area';


function ScrollBox () {
  return (
    <div>
    <div>tähän tulisi scrollbox</div>
    <ScrollArea.Root>
      <Viewport>
        {/* Add your scrollable content here */}
        <p>This is some long text that will be scrollable.</p>
        <p>Here's another paragraph to add some content.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3 (and so on...)</li>
        </ul>
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

export default ScrollBox; // Export the component for use in other parts of your project



