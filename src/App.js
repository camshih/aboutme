import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <div className='p-4 relative'>
      <div className='pt-48 px-72 grid grid-cols-1 content-center place-items-center'>
        <Navbar />
        <div className='w-full mt-8'>
          I am currently a Computer Science Student at Toronto Metropolitan University. I have a passion for trying new things in and out of the tech world. During my personal time, you can find me at the gym playing volleyball or basketball, weightlifting, hanging out around the city or at home watching shows. 
        </div>
        <div className='w-full'>
          aaa
        </div>
        <div className='w-full border-t-2 border-slate-300 text-left grid grid-cols-2 place-items-start content-start'>
          <div className=''>
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
