import { useState } from 'react';
import { DEFAULT_SECTION } from '../constants';

function useMainBoard(initialSection = DEFAULT_SECTION) {
    const [activeSection, setActiveSection] = useState(initialSection);

    return {
        activeSection,
        setActiveSection,
    };
}

export default useMainBoard;
