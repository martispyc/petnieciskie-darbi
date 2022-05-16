import styledComponents from "styled-components";

export const Button = styledComponents.button`
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: ${({size}) => size || '1.6'}rem;
  font-weight: 700;
  padding: 1.5rem 9rem;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  border: ${props => (props.borderColor && '3') || '0'}px  solid  ${props => props.borderColor || 'black'};
  width: ${({width}) => width+"rem" || 'auto'};
  
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`