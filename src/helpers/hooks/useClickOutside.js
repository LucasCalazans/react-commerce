import { useEffect } from 'react';

export default (ref, onClick, events = ['mousedown', 'touchstart']) => {
    useEffect(() => {
        const handler = event => {
            const { current: el } = ref;
            el && !el.contains(event.target) && onClick(event);
        };
        for (const eventName of events) {
            document.addEventListener(eventName, handler);
        }
        return () => {
            for (const eventName of events) {
                document.removeEventListener(eventName, handler);
            }
        };
    });
};
