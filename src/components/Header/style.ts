import styled from "styled-components"

export const Container = styled.header`
    width: 100%;
    height: 10vh;
    min-height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.2);
    `

export const Content = styled.div`

    display: flex;
    justify-content: space-between;

    height: 60%;
    width: 90%;

    div {
        background: #000;
        width: 60%;
        color: #fff;
    }

`