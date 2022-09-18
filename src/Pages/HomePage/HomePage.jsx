import { BaseContainer, ContentContainer } from "./HomePage.styled"
import { Outlet } from "react-router-dom"
import { Header } from "components/Header/Header"
export const HomePage = () => {
    return (
        <BaseContainer>
        <ContentContainer>
          <Header />
          <main>
            <Outlet/>
          </main>          
        </ContentContainer>
      </BaseContainer>
    )
}