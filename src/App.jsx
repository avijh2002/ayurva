import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import footerBanner from "./assets/footerBanner.png"; 

const App = () => {
  return (
    <div>
      <Navbar/>
      <Footer bannerImage={footerBanner} bgColor="#283618" />
    </div>
  );
};

export default App;
