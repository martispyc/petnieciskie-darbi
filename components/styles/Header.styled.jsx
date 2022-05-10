import styledComponents from "styled-components";

export const HeaderStyled = styledComponents.header`
    width: 100%;
    height: 8rem;

    background-color: ${({theme}) => theme.colors.gray};

    padding: 0 0;
    box-shadow: 0 0 2px 2px;

    position: sticky;
    top: 0px;
`

export const Title = styledComponents.h1`
    font-size: 5rem;
`

export const Author = styledComponents.h2`
    font-size: 3rem;
    color: ${({theme})=>theme.colors.secondary}
`