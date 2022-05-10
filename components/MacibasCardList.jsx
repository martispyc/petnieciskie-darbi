import MacibasCard from './MacibasCard'

function MacibasCardList({ macibas }) {
  return (
      <div>
        {macibas.map((maciba) => (
            <MacibasCard maciba={maciba} key={maciba.macibaNosaukums}/>
        ))}
      </div>
  )
}

export default MacibasCardList