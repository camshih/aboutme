import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <div className='py-4 px-12 lg:px-48 lg:py-16 relative'>
      <div className='text-2xl sm:text-4xl'>
        Cameron Shih
      </div>
      <div className='py-2'>
      I am currently a Computer Science Student at Toronto Metropolitan University. I have a passion for trying new things in and out of the tech world. During my personal time, you can find me at the gym playing volleyball or basketball, weightlifting, hanging out around the city or at home watching shows. 
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;