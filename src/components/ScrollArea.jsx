import * as ScrollArea from '@radix-ui/react-scroll-area';

export function RosterScrollArea({ children }) { 
    return (
        <ScrollArea.Root>
            <ScrollArea.Viewport>
                {children}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="horizontal">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar orientation="vertical">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
        </ScrollArea.Root>
    );
}




