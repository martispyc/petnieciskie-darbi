import styledComponents from "styled-components";

export const TableStyled = styledComponents.table`
    font-size: 3rem;
    border-collapse: collapse;
    border: 2px solid #111;
    width: 100%;
    
    span {
        border-top: 2px solid #111;
        &:first-child {
            border-top: none;
        }
        display: block;
    }

    tr:first-child {
        background-color: ${props => props.theme.colors.gray};
        font-weight: 500;
    }
    
    td {
        border-left: 2px solid #111;
        border-top: 2px solid #111;
        &:first-child {
            border-left: none;
        }
        text-align: center;
    }
`