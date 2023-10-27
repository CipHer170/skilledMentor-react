import "./App.scss";
import Header from "./pages/Header/Header";
import HeroPage from "./pages/HeroPage/HeroPage";
import "./App.scss";
import Footer from "./pages/Footer/Footer";
import Courses from "./pages/Courses/Courses";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <Courses />
      <Footer />
    </div>
  );
}
export default App;
