import "./App.css";

import HeroSection from "./pages/HeroSection";
// import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Card from "./pages/Card";

// import Service from "./Service";
import Footer from "./components/Footer";
// import { Services } from "./constants/index";


function App() {
  // const [isModalOpen, setModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <div className="container mx-auto mt-8">
        <button
          className="bg-theme1 text-white px-4 py-2 rounded hover:bg-theme1h"
          onClick={handleOpenModal}
        >
          Open Modal
        </button>
      </div> */}

      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      <Card />
      {/* <Service service={Services } /> */}
      <Footer />
    </>
  );
}

export default App;
