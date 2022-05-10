import ComponentList from "../../../../components/ComponentList";
import Header from "../../../../components/Header";
import {Page} from "../../../../components/styles/Page";
import {server} from "../../../../config";
import {Container} from "../../../../components/styles/Container.styled"

function Darbs({ darbs }) {
  return (
    <Container width="100vw" height="100vh">
      <Header position='sticky' back="/darbi" title={darbs.nosaukums} />
      <Page>
        <ComponentList components={darbs.components}/>
      </Page>
    </Container>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/macibas/${context.params.maciba}/${context.params.darbs}`
  );

  const darbs = await res.json();
  return {
    props: { darbs },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/macibas`);
  const macibas = await res.json();

  let paths = []; 
  for (let maciba of macibas) {
    for (let darbs of maciba.darbi) paths.push({ params: {maciba: maciba.macibasNosaukums, darbs: darbs.nosaukums}})
  }
  
  return { paths, fallback: false };
};

export default Darbs;
