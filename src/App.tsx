import { router } from './routes';
import { RouterProvider } from 'react-router-dom';
import { MuiThemeProvider } from './themes/ThemeProvider';

function App() {
    return (
        <MuiThemeProvider>
            <RouterProvider fallbackElement={<p>Loading ..</p>} router={router} />
        </MuiThemeProvider>
    );
}

export default App;
