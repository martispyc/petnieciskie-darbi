import styledComponents from "styled-components";

export const TextStyled = styledComponents.div`
    font-size: 3rem;
    margin-left: 5rem;
    span {
        margin-bottom: 2rem;
    }

    a {
        color: blue;
        transition: all 2s;
        &:hover {
            text-decoration: underline;
        }
    }
`