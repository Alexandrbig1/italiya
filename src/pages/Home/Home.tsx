import About from "../../components/About/About";
import { Container } from "../../components/Layout";
import { HomeContainer } from "./Home.styled";

export default function Home() {
  return (
    <HomeContainer>
      <Container>
        <About />
      </Container>
    </HomeContainer>
  );
}
