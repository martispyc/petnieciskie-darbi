import Header from "../components/Header";
import MacibasCardList from "../components/MacibasCardList";
import { Container } from "../components/styles/Container.styled";
import { Flex } from "../components/styles/Flex.styled";
import { server } from "../config";
import isEmpty from "lodash.isempty";

export default function darbi({ macibas, error }) {
  return (
    <>
      <Header title="darbi"> </Header>{" "}
      <Container>
        <Flex>
          <p style={{ color: "red" }}>No data found!</p>
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          {/* {!isEmpty(macibas) && <MacibasCardList macibas={macibas} />} */}
        </Flex>{" "}
      </Container>{" "}
    </>
  );
}

export const getStaticProps = async () => {
  let macibas = [];
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
  } catch (err) {
    error = err.toString();
  }

  return {
    props: {
      macibas,
      error,
    },
  };
};
