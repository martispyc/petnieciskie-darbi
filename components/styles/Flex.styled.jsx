import styledComponents from "styled-components";

export const Flex = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    flex-direction: ${props => props.direction || "row"};

    height: 100%;
    width: 100%;
`