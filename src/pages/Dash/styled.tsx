import { CustomThemeOptions, styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }: { theme: CustomThemeOptions }) => ({
    width: '100%',
    height: '96vh',
    padding: '1rem',
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: '1.2fr 4fr',
    color: theme?.text?.default,
    backgroundColor: theme?.palette?.background?.default,
}));
