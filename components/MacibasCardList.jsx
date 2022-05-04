import {MacibasCardListStyled} from "./styles/MacibasCardList.styled" 
import MacibasCard from './MacibasCard'

function MacibasCardList({ macibas }) {
  return (
      <MacibasCardListStyled>
        {macibas.map((maciba) => (
            <MacibasCard maciba={maciba} key={maciba.macibaNosaukums}/>
        ))}
      </MacibasCardListStyled>
  )
}

export default MacibasCardList