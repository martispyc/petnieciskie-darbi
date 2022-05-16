import styledComponents from "styled-components"

export const AuthorBox = styledComponents.div`
    width: 100vw;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Author = styledComponents.h3`
    font-size: 5.7rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.secondary};
`

export const MainHeading = styledComponents.h1`
    font-size: 17rem;
    color: black;
    font-weight: 700;
    text-align: center;
    margin: 0 0 10rem 0;
`


export const MainContainer = styledComponents.div`
    display: flex;
    position: relative;

    width: 100vw;
    max-width: 100vw;

    height: 100vh;
    max-height: 100vh;

    overflow: hidden;

    flex-direction: column;
    align-items: center;
    
    // @media (max-width: 1768px) {
    //     h1 {
    //         font-size: 10rem;
    //     }
    //     h3 {
    //         font-size: 3rem;
    //     }
    //     Button {
    //         font-size: 4rem;
    //     }
    // }

    // @media (max-width: 934px) {
    //     h1 {
    //         font-size: 7rem;
    //     }
    //     Button {
    //         font-size: 3rem;
    //     }
    // }
`
