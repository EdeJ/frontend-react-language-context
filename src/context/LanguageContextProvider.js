import React, { createContext, useState } from 'react'

export const LanguageContext = createContext();

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState('nl');

    const data = {
        language,
        setLanguage
    }

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider
