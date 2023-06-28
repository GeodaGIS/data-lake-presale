import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import { AppHeader } from './components/AppHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadStreams } from './store/actions/streamActions.js';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStreams());
  }, []);

  return (
    // <BrowserRouter basename='bank-international-presale'>
    <BrowserRouter>
      <main className='app-main-container'>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App




