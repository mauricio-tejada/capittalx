import { Container, Form } from "./style";

export function Content() {
    return (
        <Container>
            <h2>Faça agora sua simulação</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
            <Form>
                <input type="number" placeholder="Digite um valor" />
                <input type="number" />
            </Form>
        </Container>
    )
}