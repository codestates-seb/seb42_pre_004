import Header from '../components/Header';
import QButton from '../components/QButton';
import TopQLists from '../components/TopQLists';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  .mainside-wrap__div {
    max-width: 1100px;
    width: calc(100% - 164px);
    display: flex;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: calc(100% - 276px);
`;

const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: 400;
  }
`;

//* HOME_001
function Home() {
  return (
    <div>
      <Container>
        <Header />
        <MainContainer>
          <NavBar />
          <div className="mainside-wrap__div">
            <ContentContainer>
              <MainTop>
                <h1>Top Questions</h1>
                <QButton />
              </MainTop>
              <TopQLists />
            </ContentContainer>
            <Sidebar />
          </div>
        </MainContainer>
        <Footer />
      </Container>
    </div>
  );
}

export default Home;
