import Header from '../components/Header'
import MacibasCardList from '../components/MacibasCardList'
import {Container} from '../components/styles/Container.styled'
import {Flex} from '../components/styles/Flex.styled'
import {server} from '../config'

export default function darbi({macibas}) {
  return (
    <>
      <Header title="darbi"></Header>

      <Container>
        <Flex>
          <MacibasCardList macibas={macibas}/>
        </Flex>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/macibas`)
  const macibas = await res.json()

  return {
    props: {macibas}
  }
}