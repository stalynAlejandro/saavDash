import { styled } from '@mui/system';

export const Container = styled('div')(({ theme }) => ({
    padding: 20,
    borderRadius: 5,
    backgroundColor: theme?.palette?.background?.paper,
}));
