import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    typography: {
        fontFamily: ['Fira Code', 'Roboto'].join(','),
    },
    palette: {
        mode: 'dark',
        primary: { main: '#1db954' },
        secondary: { main: '#1ed760' },
        background: {
            paper: '#7c7c7c',
            default: '#191414',
        },
    },
    text: {
        default: '#ffff',
        contrast: '#0000',
    },
    status: {
        info: '#00e000',
        danger: '#ff0000',
        warning: '#ffa500',
    },
});

export const lightTheme = createTheme({
    typography: {
        fontFamily: ['Fira Code', 'Roboto'].join(','),
    },
    palette: {
        mode: 'light',
        primary: { main: '#ff62fe' },
        secondary: { main: '#fff300' },
    },
    textColor: {
        default: '#0000',
        contrast: '#ffff',
    },
    status: {
        info: '#00e000',
        danger: '#ff0000',
        warning: '#ffa500',
    },
});
