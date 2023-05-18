import React, { useState } from 'react';
import { ThemeType } from '../vite-env';
import { lightTheme, darkTheme } from './index';
import { ThemeProvider, responsiveFontSizes } from '@mui/material';

const getThemeByName = (theme: string) => {
    return themeMap[theme];
};

export const themeMap: { [key: string]: any } = {
    lightTheme,
    darkTheme,
};

export const ThemeContext = React.createContext(getThemeByName('lightTheme'));

export const MuiThemeProvider = (props: {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => {
    const [themeName, setThemeName] = useState('darkTheme');
    const theme = responsiveFontSizes(getThemeByName(themeName));

    const setThemeToStore = (theme: ThemeType) => {
        setThemeName(theme);
    };

    return (
        <ThemeContext.Provider value={{ themeName, setThemeToStore }}>
            <ThemeProvider theme={theme}>{props?.children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
