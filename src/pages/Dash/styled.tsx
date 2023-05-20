import { CustomThemeOptions, styled } from '@mui/material/styles';

export const DashContainer = styled('div')(({ theme }: { theme: CustomThemeOptions }) => ({
    width: '100%',
    height: '100vh',
    padding: '1rem',
    display: 'grid',
    gridTemplateColumns: '1.2fr 4fr',
    gap: '1rem',
    color: theme?.text?.default,
    backgroundColor: theme?.palette?.background?.default,
}));
