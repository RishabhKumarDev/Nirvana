
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstPage from './pages/FirstPage';
import InputPage from './pages/InputPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <>
         <Navbar/>
      <div className="content">
        <Routes>
        <Route path='/' element={ <FirstPage />} />
        <Route path='/input' element={ <InputPage />} />
        <Route path='/history' element={ <HistoryPage />} />

        </Routes>
      </div>
      </>
  );
}


export default App;
