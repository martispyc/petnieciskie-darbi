import React from 'react'
import {OListStyled} from './styles/Lists.styled'

function OList({data}) {
  return (
      <OListStyled>
        {data.map((item, i) => (<li key={i}>{item}</li>))}
      </OListStyled>
  )
}

export default OList