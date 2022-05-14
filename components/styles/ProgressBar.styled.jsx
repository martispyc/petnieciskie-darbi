import styledComponents from "styled-components";

export const ProgressBarStyled = styledComponents.div`
    height: 100%;
    width: ${({width}) => width || 0}%;
    background-color: ${({theme}) => theme.colors.secondary};
`

export const ProgressBarWrapper = styledComponents.div`
    background-color: ${({theme}) => theme.colors.secondaryHalf};
    position: sticky;
    height: 15px;
    width: 100%;
    top:0;
    left:0;
    z-index: 1;
`