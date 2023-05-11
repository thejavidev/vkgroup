import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import Construction from "./pages/Construction";
import Projects from "./pages/Projects";
import Equipment from "./pages/Equipment";
import Photo from "./pages/Photo";
import PhotoDetails from "./pages/PhotoDetails";
import Video from "./pages/Video";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Certificats from "./pages/Certificats";
import ServiceAbout from "./pages/ServiceAbout";

function App() {


  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/insaat/:name/:slug" element={<ProductsDetail />} ></Route>
            <Route path="/mexaniki/:name/:slug" element={<Construction />} ></Route>
            <Route path="/mehsullar/:name/" element={<Construction />} ></Route>
            <Route path="/mehsullar/:name/:slug" element={<Construction />} ></Route>
            <Route path="/layihelerimiz" element={<Projects />} ></Route>
            <Route path="/avadanliqlar/:slug" element={<Equipment />} ></Route>
            <Route path="/foto" element={<Photo />} ></Route>
            <Route path="/foto/:id" element={<PhotoDetails />} ></Route>
            <Route path="/video" element={<Video />} ></Route>
            <Route path="/blog" element={<Blog />} ></Route>
            <Route path="/blog/:slug" element={<BlogDetail />} ></Route>
            <Route path="/sertifikat" element={<Certificats />} ></Route>
            <Route path="/servis" element={<ServiceAbout />} ></Route>
            <Route path="/servis" element={<ServiceAbout />} ></Route>
          </Routes>
        </Router>

      </Layout>
    </>
  )
}

export default App
