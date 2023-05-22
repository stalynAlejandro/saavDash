import { CustomThemeOptions, styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }: { theme: CustomThemeOptions }) => ({
    height: '30%',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: theme?.palette?.background?.paper,
}));
