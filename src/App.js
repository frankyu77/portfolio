import Navbar from "./components/NavigationBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
