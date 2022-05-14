import { MacibasCardStyled, CardHeader } from "./styles/MacibasCard.styled";
import { Button } from "./styles/Button.styled";
import Link from "next/link";

function MacibasCard({ maciba }) {
  return (
    <MacibasCardStyled>
      <CardHeader>{maciba.macibasNosaukums}</CardHeader>

      {maciba.darbi.map((darbs) => (
        <Link
          key={darbs.nosaukums}
          href="/darbi/[maciba]/[id]"
          as={`/darbi/${maciba.macibasNosaukums}/${darbs.nosaukums}`}
        >
          <a>
            <Button size={2}>{darbs.nosaukums}</Button>
          </a>
        </Link>
      ))}
    </MacibasCardStyled>
  );
}

export default MacibasCard;