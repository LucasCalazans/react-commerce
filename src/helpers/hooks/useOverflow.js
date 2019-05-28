import { useEffect } from 'react';

export default (active, el = document.body) => {
    useEffect(() => {
        el.style.overflow = active ? 'hidden' : '';
    }, [active]);
};
