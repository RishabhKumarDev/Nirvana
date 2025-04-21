
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstPage from './pages/FirstPage';
import InputPage from './pages/InputPage';
import HistoryPage from './pages/HistoryPage';
import Playground from './components/Notification/playground';
import Notification from './components/Notification/Notification';
import DirectTo from './pages/DirectTo';
// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';
import AuthPageContainer from './components/AuthPageContainer';
function App() {
  const location = useLocation();
  const hideNavPaths = ["/direct","/signin","/signup","/authpage"];
  return (
    <>
        {!hideNavPaths.includes(location.pathname) &&  <Navbar/>}
      <div className="content">
        <Routes>
        <Route path='/' element={ <FirstPage />} />
        <Route path='/input' element={ <InputPage />} />
        <Route path='/history' element={ <HistoryPage />} />
        <Route path='/playground' element={ <Playground/>} />
        <Route path='/direct' element={ <DirectTo/>} />
        {/* <Route path='/signin' element={ <SignIn/>} />
        <Route path='/signup' element={ <SignUp/>} /> */}
        <Route path='/authpage' element={ <AuthPageContainer/>} />


        
        </Routes>
        <Notification/>
      </div>
      </>
  );
}


export default App;
