import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./style"

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo" />
                <div>BTC r$135.135,12 (-12.50%)</div>
            </Content>
        </Container>
    )
}