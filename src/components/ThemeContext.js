import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({ theme: 1, toggleTheme: () => {} });


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(1);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme % 3) + 1);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`theme-${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
