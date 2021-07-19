import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
    --background: #f8f2f5;
    --red: #E52e54;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFAFA
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1024px) {
            font-size: 93.75%; //15px
        }
        @media(max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .reactModalOverlay {
        background-color: rgba(0, 0, 0, .5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .reactModalContent {
        width: 100%;
        max-width: 576px;

        background-color: var(--background);
        padding: 3rem;
        border-radius: 0.25rem;

        position: relative;
    }
`;
