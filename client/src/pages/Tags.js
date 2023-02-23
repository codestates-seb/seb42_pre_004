// import Tag from '../components/Tag'; <Tag />
import styled from 'styled-components';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { BsSearch } from 'react-icons/bs';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import getTagsSLice from '../redux/slice/getTags';
import Tagtitle from '../components/Tagtitle';
import TagContent from '../components/TagContent';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const Container = styled.div`
  flex-wrap: nowrap;
  display: flex;
  justify-content: center;
  text-align: left;
  .main-wrap {
    max-width: 1100px;
    width: calc(100% - 164px);
    display: flex;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1088px;
  padding: 24px;
`;
const TagHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  color: #232639;
  line-height: 1.4;
  p {
    width: 640px;
    font-size: 15px;
    margin: 0 0 16px;
    line-height: 18.7px;
    vertical-align: baseline;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  margin: 0 0 25px;
`;

const ShowSynonyms = styled.a`
  text-decoration: none;
  color: #0074cc;
  cursor: pointer;
  margin-bottom: 24px;
  :visited {
    text-decoration: none;
  }
  &:hover {
    color: #0a95ff;
  }
`;
const FormButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Form = styled.form`
  display: flex;
  width: 188px;
  height: 37px;
  max-width: 100%;
  align-items: center;
  position: relative;
  .searchIcon {
    position: absolute;
    left: 0px;
    opacity: 0.5;
    margin: 0 0.5rem;
  }
`;
const InPut = styled.input`
  padding: 1rem 1rem 1rem 2rem;
  width: 100%;
  height: 2.3rem;
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;
  &:focus {
    outline: none;
    border-color: hsl(206deg 90% 70%);
    box-shadow: 0px 0px 0px 5px #e1ecf4;
  }
  &::placeholder {
    color: rgb(190, 192, 195);
  }
`;
const FilterButtons = styled.div`
  vertical-align: baseline;
  border: 1px solid rgb(148, 156, 163);
  border-radius: 5px;
`;
const FilterButton = styled.button`
  width: 63px;
  height: 35px;
  color: #6a737c;
  background-color: white;
  border: none;
  font-size: 12px;
  &.popular {
    border-top-left-radius: 5px 5px;
    border-bottom-left-radius: 5px 5px;
    border-right: 1px solid rgb(148, 156, 163);
  }
  &.name {
    border-right: 1px solid rgb(148, 156, 163);
  }
  &.new {
    border-top-right-radius: 5px 5px;
    border-bottom-right-radius: 5px 5px;
  }
  &:hover {
    background-color: rgb(247, 247, 247);
    color: #525960;
  }
`;
const TagGridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  width: 100%;
  @media screen and (max-width: 1345px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 1028px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 711px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

function Tags() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.getTags.tags;
  });
  useEffect(() => {
    const getTagsData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/tags');
        dispatch(getTagsSLice.actions.get(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    getTagsData();
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        <Container>
          <NavBar />
          <div className="main-wrap">
            <TagContainer>
              <TagHeader>
                <Title>Tags</Title>
                <p>
                  A tag is a keyword or label that categorizes your question
                  with other, similar questions. Using the right tags makes it
                  easier for others to find and answer your question.
                </p>
                <ShowSynonyms>Show all tag synonyms</ShowSynonyms>
                <FormButtonContent>
                  <Form>
                    <BsSearch className="searchIcon" />
                    <InPut type="text" placeholder="Filter by tag name"></InPut>
                  </Form>
                  <FilterButtons>
                    <FilterButton className="popular">Popular</FilterButton>
                    <FilterButton className="name">Name</FilterButton>
                    <FilterButton className="new">New</FilterButton>
                  </FilterButtons>
                </FormButtonContent>
              </TagHeader>
              <TagGridContainer>
                <Tagtitle data={data} />
                <TagContent data={data} />
              </TagGridContainer>
            </TagContainer>
          </div>
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

export default Tags;
