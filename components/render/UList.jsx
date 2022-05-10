import React from 'react'
import {UListStyled, OListStyled} from './styles/Lists.styled'

function UList({data}) {
  return (
      <UListStyled>
        {data.map((item, i) => (<li key={i}>{item}</li>))}
      </UListStyled>
  )
}

function OList({data}) {
}

export default UList