import logoImg from "../../assets/logo.svg"
import { QuotesContainer } from "../QuotesContainer"
import { Container, Content } from "./style"

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo" />
                <QuotesContainer />
            </Content>
        </Container>
    )
}