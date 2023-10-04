import './App.css';
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Components/HomePage';
import { BookingPage } from './Components/BookingPage'
import { Hero } from './Components/Hero'
import { About } from './Components/About'
import { Specials } from './Components/Specials'
import { Nav } from './Components/Nav'
import { Footer } from './Components/Footer'
import { Testimonials } from './Components/Testimonials'


function App() {
  return (
    <>
       <Routes>
             <Route path="/" element={<HomePage />}></Route>
             <Route path="/nav" element={<Nav />}></Route>
             <Route path="/booking" element={<BookingPage />}></Route>
             <Route path="/hero" element={<Hero />}></Route>
             <Route path="/about" element={<About />}></Route>
             <Route path="/specials" element={<Specials />}></Route>
             <Route path="/footer" element={<Footer />}></Route>
             <Route path="/testimonials" element={<Testimonials />}></Route>
        </Routes>
    </>
  );
}

export default App;
