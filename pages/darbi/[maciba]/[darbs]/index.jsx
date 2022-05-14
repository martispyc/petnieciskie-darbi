import ComponentList from "../../../../components/ComponentList";
import ProgressBar from "../../../../components/ProgressBar";
import Header from "../../../../components/Header";
import { Page } from "../../../../components/styles/Page";
import { server } from "../../../../config";
import { Container } from "../../../../components/styles/Container.styled";
import isEmpty from "lodash.isempty";

function Darbs({ darbs, error }) {
  return (
    <Container width="100vw" height="100vh">
      <Header position="sticky" back="/darbi" shadowSize={1} title={darbs.nosaukums}>
        <ProgressBar/>
      </Header>
      <Page>
        {" "}
        {error && (
          <p
            style={{
              color: "red",
            }}
          >
            {" "}
            {error}{" "}
          </p>
        )}{" "}
        {!isEmpty(darbs.components) && (
          <ComponentList components={darbs.components} />
        )}{" "}
      </Page>{" "}
    </Container>
  );
}

export const getStaticProps = async (context) => {
  let darbs = [];
  let error = "";
  try {
    const res = await fetch(
      `${server}/api/macibas/${context.params.maciba}/${context.params.darbs}`,
      {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
          Accept: "application/json; charset=UTF-8",
        },
      }
    );

    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);

    darbs = await res.json();

    if (isEmpty(darbs)) throw String("No data was found!");

    darbs = JSON.parse(JSON.stringify(darbs));
  } catch (err) {
    error = err.toString();
  }

  return {
    props: {
      darbs,
      error,
    },
  };
};

export const getStaticPaths = async () => {
  let macibas = [];
  let paths = [];
  let error = "";
  try {
    const res = await fetch(`${server}/api/macibas`, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });

    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);

    macibas = await res.json();

    if (isEmpty(macibas)) throw String("No data was found!");

    macibas = JSON.parse(JSON.stringify(macibas));

    for (let maciba of macibas) {
      for (let darbs of maciba.darbi)
        paths.push({
          params: {
            maciba: maciba.macibasNosaukums,
            darbs: darbs.nosaukums,
          },
        });
    }
  } catch (err) {
    error = err.toString();
  }

  return {
    paths,
    fallback: false,
  };
};
export default Darbs;
