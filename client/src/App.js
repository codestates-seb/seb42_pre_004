import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Questions from './pages/Questions';
import View from './pages/View';
import Tags from './pages/Tags';
import Users from './pages/Users';
// import QButton from './components/QButton';
import Ask from './pages/Ask';
import ViewEdit from './pages/ViewEdit';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  //* 로그인 상태, 유저 정보 상태 관리
  // TODO 리덕스로 리팩터링 할 것
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  //* 로그인 후 유저 정보를 받아와 상태 변경
  const authHandler = () => {
    axios
      .get('/userinfo')
      .then((res) => {
        setIsLogin(true);
        setUserInfo(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data);
        }
      });
  };

  useEffect(() => {
    authHandler();
  }, []);

  return (
    <div className="App">
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/view">View</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/users">Users</Link>
        <Link to="/ask">{<QButton />}</Link>
      </div> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              setUserInfo={setUserInfo}
              userInfo={userInfo}
            />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="/login"
          element={<Login setIsLogin={setIsLogin} setUserInfo={setUserInfo} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/view" element={<View />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/view/ask" element={<Ask />} />
        <Route path="/view/edit" element={<ViewEdit />} />
      </Routes>
    </div>
  );
}

export default App;
