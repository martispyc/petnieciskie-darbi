import styledComponents from 'styled-components'

export const Container = styledComponents.div`
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  width: ${props => props.width || '100rem'}
  height: ${props => props.height || '100%'}
`