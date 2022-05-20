import styled from "styled-components"

export const Container = styled.main`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 2.5rem;

    position: absolute;
    width: 757px;
    left: 72px;
    top: 25%;

h2 {
    color: #fff;
    font-size: 3rem;
    font-weight: 500;
}

p {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;

    max-width: 50%;
}
`

export const Form = styled.form`
    
    input {
        width: 100%;
        padding: 1.5rem;
        height: 3rem;

        color: #fff;

        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background-color: var(--bg-header);

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        & + input {
            margin-top: 1rem;
        }
    }
`