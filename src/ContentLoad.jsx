import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Gifts from './components/Gifts';
import Home from './components/Home';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Rsvp from './components/Rsvp';
import Story from './components/Story';

export default function ContentLoad() {
  return (
    <>
      <Navbar />
      <Home />
      <Info />
      <Story />
      <Gallery />
      <Rsvp />
      <Gifts />
      <Footer />
    </>
  );
}
