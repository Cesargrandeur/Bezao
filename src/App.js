import Navbar from "./components/Navbar";
import MainTop from "./components/MainTop"
import Products from "./components/Products";
import Comment from "./components/Comment";
import Blog from "./components/Blog";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="box-border overflow-hidden">
      <div className="flex flex-col"></div>
        <Navbar/>
        <MainTop/>
        <Products/>
        <Comment/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
