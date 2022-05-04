import { AuthorBox, Author, MainHeading, MainContainer } from "../components/styles/MainPage.styled"
import { Circle } from "../components/styles/Shapes.styled"
import { Button } from "../components/styles/Button.styled"
import Link from "next/link"
import {useTheme} from 'styled-components'

export default function Home() {
  const theme = useTheme()

  return (
    <>
      <MainContainer>
        <AuthorBox>
          <Author>Matīss Burmists</Author>
        </AuthorBox>

        <MainHeading>PĒTNIECISKIE DARBI</MainHeading>

          <Link href="/darbi"><a>
            <Button borderColor={theme.colors.tertiary} bg={theme.colors.tertiaryHalf} color={theme.colors.tertiary} size={6} >Apskatīt visus.</Button>
          </a></Link>

        <Circle bg={theme.colors.secondaryHalf} borderColor={theme.colors.secondary} size={40} style={{bottom: '-15vw', left: '-15vw'}}/>
        <Circle bg={theme.colors.tertiaryHalf} borderColor={theme.colors.tertiary} size={20} style={{bottom: '-5vw', right: '-5vw'}}/>
      </MainContainer>
    </>
  )
}
