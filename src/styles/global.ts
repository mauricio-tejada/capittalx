import { createGlobalStyle } from "styled-components"

import backgroundMainImg from "../assets/background.svg"

export const GlobalStyle = createGlobalStyle`

    :root {
        --bg-header: rgba(255, 255, 255, 0.2);
        --bg-quotes: rgba(15,21,63,0.9);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: "poppins", sans-serif;
    
        @media (max-width: 1080px) {
            font-size: 93.75%; 
        }

        @media (max-width: 720px) {
            font-size: 87.5%; 
        }
    }

    body {

        height: 100vh;
        width: 100%;

        background-image: url(${backgroundMainImg});
        background-repeat: no-repeat;
        background-size: cover;
    }

    button {
        cursor: pointer;
    }


`