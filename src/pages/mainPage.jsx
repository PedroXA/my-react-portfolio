import Navbar from "../components/Navbar/navbar.jsx";
import Header from "../components/AboutMe/aboutme.jsx";
import "./mainPage.css";

const mainPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
    </div>
  );
};

export default mainPage;
