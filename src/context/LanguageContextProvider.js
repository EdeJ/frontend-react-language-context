import React, { createContext, useState } from 'react'

export const LanguageContext = createContext();

function LanguageContextProvider({ children }) {

    const [language, setLanguage] = useState('nl');


    const toggleLanguage = () => {
        switch (language) {
            case 'nl':
                setLanguage('es');
                break;
            case 'es':
                setLanguage('nl');
                break;
            default:
                setLanguage('nl');
                break;
        }
        console.log(language);
    }

    const data = {
        language,
        toggleLanguage
    }

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider
