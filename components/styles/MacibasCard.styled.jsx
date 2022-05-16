import styledComponents from "styled-components";

export const MacibasCardStyled = styledComponents.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 60rem;
    height: 100%;

    margin: 10rem 0;
    padding: 1rem 2rem;
    border-radius: 20px;
    box-shadow: 0 0 2px 2px;

    Button {
        margin: 1rem 0;
    }
    
    // @media (max-width: 1768px) {
    //     margin-top: 5rem;
    //     Button {
    //         font-size: 2rem;
    //     }
    // }    

    background-color: ${({theme})=> theme.colors.gray}
`
    
export const CardHeader = styledComponents.h2`
    // @media (max-width: 1768px) {
    //     font-size: 5rem;
    // }
    font-size: 10rem;
`