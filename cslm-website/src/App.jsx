import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Ministries from './pages/public/Ministries';
import Services from './pages/public/Services';
import Leadership from './pages/public/Leadership';
import Events from './pages/public/Events';
import Gallery from './pages/public/Gallery';
import PrayerRequests from './pages/public/PrayerRequests';
import Testimonials from './pages/public/Testimonials';
import Contact from './pages/public/Contact';
import Donate from './pages/public/Donate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="services" element={<Services />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="prayers" element={<PrayerRequests />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
