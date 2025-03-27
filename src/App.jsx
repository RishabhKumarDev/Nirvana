
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstPage from './pages/FirstPage';
import InputPage from './pages/InputPage';
import HistoryPage from './pages/HistoryPage';
import Playground from './components/Notification/playground';
import Notification from './components/Notification/Notification';
function App() {
  return (
    <>
         <Navbar/>
      <div className="content">
        <Routes>
        <Route path='/' element={ <FirstPage />} />
        <Route path='/input' element={ <InputPage />} />
        <Route path='/history' element={ <HistoryPage />} />
        <Route path='/playground' element={ <Playground/>} />

        
        </Routes>
        <Notification/>
      </div>
      </>
  );
}


export default App;
