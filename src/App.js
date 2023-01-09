
import { Routes, Route, Outlet } from 'react-router';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="about" element={<About/>} />
        <Route path ="contact" element= {<Contact/>}>
            <Route path ="us" element= {<ContactUs/>}/>
            <Route path ="pl" element= {<ContactPl/>}/>
            <Route path ="de" element= {<ContactDe/>}/> 
        </Route>
        <Route path ="services" element= {<Services/>}/>
        <Route path="*" element={<NotFound404/>}/>
      </Routes>
      
    </div>
  );
}
export function About() {
  return (
      <div>
          <h1>About</h1>
      </div>
  );
}
export function Services() {
  return (
      <div>
          <h1>services</h1>
      </div>
  );
}
export function ContactUs() {
  return (
      <div>
          <h1>contact/us</h1>
        
      </div>
  );
}
export function ContactPl() {
  return (
      <div>
          <h1>contact/pl</h1>
      </div>
  );
}
export function ContactDe() {
  return (
      <div>
          <h1>contact/de</h1>
      </div>
  );
}
export function Contact() {
  return (
      <div>
          <h1>contact</h1>
          <Outlet/>
      </div>
  );
}
export function NotFound404() {
  return (
      <div>
          <h1>Resource not found</h1>
      </div>
  );
}

export default App;
