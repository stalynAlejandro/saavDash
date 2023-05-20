import { Content } from './Content';
import { SideMenu } from './SideMenu';
import { DashContainer } from './styled';

export function Dash() {
    return (
        <DashContainer>
            <SideMenu />
            <Content />
        </DashContainer>
    );
}
