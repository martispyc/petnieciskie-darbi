import styledComponents from "styled-components";

export const MacibasCardStyled = styledComponents.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 60rem;
    height: 70vh;

    margin: 10rem 0;
    padding: 0 2rem;
    border-radius: 20px;
    box-shadow: 0 0 2px 2px;

    Button {
        margin: 1rem 0;
    }

    background-color: ${({theme})=> theme.colors.gray}
`

export const CardHeader = styledComponents.h2`
    font-size: 10rem;
`