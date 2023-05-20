import { styled } from '@mui/system';

export const Container = styled('div')(({ theme }) => ({
    backgroundColor: theme?.palette?.background?.paper,
}));
