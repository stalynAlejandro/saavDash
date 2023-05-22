import { CustomThemeOptions, styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }: { theme: CustomThemeOptions }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: theme?.text?.default,
    backgroundColor: theme?.palette?.background?.default,
}));
