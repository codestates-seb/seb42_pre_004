import AskForm from '../components/AskForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

//* VIEW_02 질문 새로 입력하기
function Ask() {
  return (
    <div>
      <Header />
      <h1>Ask a public question</h1>
      <AskForm />
      <button>submit</button>
      <Footer />
    </div>
  );
}

export default Ask;
