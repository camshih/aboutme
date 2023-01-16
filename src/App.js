import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <div className='h-screen'>
      <div className='pt-48 grid grid-cols-1 content-center place-items-center'>
        <Navbar />
        <div className='mt-8 grid grid-cols-2'>
          <div>
            left
          </div>
          <div>
            right
          </div>
        </div>
      </div>
    </div>

    </BrowserRouter>
  );
}

export default App;
