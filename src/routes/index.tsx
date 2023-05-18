import { Dash } from '../pages/Dash';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '',
        element: <Dash />,
    },
]);
