import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import LowerHeader from "./Components/LowerHeader";
import Navigation from "./Components/Navigation";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import NewProducts from "./Components/NewProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <LowerHeader />
      <Navigation />
      <Body />
      <NewProducts />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
