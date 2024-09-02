import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/header";
import { Hero } from "./Components/Hero";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
