import { CustomThemeOptions, styled } from '@mui/material/styles';

export const DashContainer = styled('div')(({ theme }: { theme: CustomThemeOptions }) => ({
    width: '100%',
    height: '100vh',
    color: theme?.text?.default,
    backgroundColor: theme?.palette?.background?.default,
}));
