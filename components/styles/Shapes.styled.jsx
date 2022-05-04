import styledComponents from "styled-components";

export const Circle = styledComponents.span`
    position: absolute;
    border-radius: 50%;


    overflow: hidden;


    // size
    width: ${props => props.size || 10}vw;
    height: ${props => props.size || 10}vw;


    // color
    background-color: ${props => props.bg || 'black'};
    border: ${props => (props.borderColor && '3') || '0'}px  solid  ${props => props.borderColor || 'black'};
`