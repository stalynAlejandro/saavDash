import { CustomThemeOptions, styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }: { theme: CustomThemeOptions }) => ({
    height: '70%',
    padding: 20,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: theme?.palette?.background?.paper,
}));
