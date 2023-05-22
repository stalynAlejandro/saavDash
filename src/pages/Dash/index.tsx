import { Content } from './Content';
import { SideMenu } from './SideMenu';
import { Container } from './styled';

export function Dash() {
    return (
        <Container>
            <SideMenu />
            <Content />
        </Container>
    );
}
