import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
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
import Comments from "./pages/Comments";
import Contact from "./pages/Contact";
import { loadposts } from './components/store/posts';
import Mechanical from './pages/Mechanical';
import ProjectsDetails from './pages/ProjectsDetails';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list);

  const api = [
    {
      id:0,
      store: data?.banner
    },
    {
      id:1,
      store: data?.options
    },
    {
      id:2,
      store: data?.subOneXidmets,
      store2: data?.products
    },
    {
      id:3,
      store: data?.subTwoXidmets,
      store2: data?.products
    },
    {
      id:4,
      store: data?.hkategoriya,
      store2: data?.hproducts
    },
    {
      id:5,
      store: data?.layihe
    },
    {
      id:6,
      store:data?.avadanlig
    },
    {
      id:7,
      store:data?.brend
    },
    {
      id:8,
      store:data?.xidmets
    }
  ]

  useEffect(useCallback(() => {
    dispatch(loadposts());
  }, [dispatch]), [])

  return (
    <>
      <Layout options={api[1].store} subone={api[2].store} xidmet={api[8].store}>
        <Routes>
          <Route path="/" exact element={<Home slider={api[0].store} section2={api[3].store} about={api[1].store} avadanliq={api[6].store} project={api[5].store} brend={api[7].store} />} ></Route>
          <Route path="/about" element={<About about={api[1].store} />} ></Route>
          <Route path="/xidmetler/insaat" element={<ProductsDetail productLinks={api[2].store} productData={api[[2].store2]} />} ></Route>
          <Route path="/xidmetler/insaat/:name" element={<ProductsDetail productLinks={api[2].store} productData={api[[2].store2]} />} ></Route>
          <Route path="/xidmetler/insaat/:name/:slug" element={<ProductsDetail productLinks={api[2].store} productData={api[[2].store2]} />} ></Route>
          <Route path="/xidmetler/mexaniki/" element={<Mechanical productLinks={api[3].store} productData={api[[3].store2]} />} ></Route>
          <Route path="/xidmetler/mexaniki/:slug" element={<Mechanical productLinks={api[3].store} productData={api[[3].store2]} />} ></Route>
          <Route path="/xidmetler/mexaniki/:name" element={<Mechanical productLinks={api[3].store} productData={api[[3].store2]} />} ></Route>
          <Route path="/xidmetler/mehsullar/:name/:slug" element={<Construction mehsulLink={api[4].store} mehsulData={api[4].store2} />} ></Route>
          <Route path="/layihelerimiz" element={<Projects project={api[5].store} />} ></Route>
          <Route path="/layihelerimiz/:slug_az" element={<ProjectsDetails project={api[5].store} />} ></Route>
          <Route path="/avadanliqlar" element={<Equipment />} ></Route>
          <Route path="/avadanliqlar/:slug" element={<Equipment />} ></Route>
          <Route path="/foto" element={<Photo />} ></Route>
          <Route path="/foto/:id" element={<PhotoDetails />} ></Route>
          <Route path="/video" element={<Video />} ></Route>
          <Route path="/blog" element={<Blog />} ></Route>
          <Route path="/blog/:slug" element={<BlogDetail />} ></Route>
          <Route path="/sertifikat" element={<Certificats />} ></Route>
          <Route path="/servis" element={<ServiceAbout />} ></Route>
          <Route path="/rey-sorgusu" element={<Comments />} ></Route>
          <Route path="/elaqe" element={<Contact about={api[1].store} />} ></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
