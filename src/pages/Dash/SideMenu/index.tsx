import { Home } from './Home';
import { Library } from './Library';
import { Container } from './styled';

export function SideMenu() {
    return (
        <Container>
            <Home />
            <Library />
        </Container>
    );
}
