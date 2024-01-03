import HeroSection from "./pages/HeroSection";
import Navbar from "./components/Navbar";
import Card from "./pages/Card";
import Footer from "./components/Footer";
import { Services } from "./constants/index";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Card />
      <Service service={Services} />
      <Footer />
    </>
  );
}

export default App;
