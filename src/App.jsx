import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Construction from "./pages/Construction";
import Projects from "./pages/Projects";
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
import ProjectsDetails from './pages/ProjectsDetails';
import Loader from './components/loader/Loader';
import VideoDetails from './pages/VideoDetails';

import Mehsullar from './pages/products/Mehsullar';
import Equipment from './pages/Equipment';




function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list);

  const [loading, setLoading] = useState(false)


  

// console.log(allmehsuldata[0].store)

  useEffect(useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200);
    dispatch(loadposts());
  
  }, [dispatch]), [])



  return (
    <>
      {
        loading ? <Loader /> :
          <Layout option={data?.options} xidmet={data?.xidmets} mehsullar={data?.mehsullar} avadanlig={data?.avadanlig}>
            <Routes>
              <Route path="/" exact element={<Home banner={data?.banner} option={data?.options} avadanlig={data?.avadanlig} layihe={data?.layihe} brend={data?.brend} />} ></Route>
              <Route path="/about" element={<About option={data?.options}  />} ></Route>
              <Route path="/mehsullar/:slug_az" element={<Mehsullar mehsullar={data?.mehsullar} />} ></Route>
              <Route path="/avadanliqlar/:slug_az" element={<Equipment avadanlig={data?.avadanlig} />} ></Route>
              <Route path="/layihelerimiz" element={<Projects layihe={data?.layihe}  />} ></Route>
              <Route path="/layihelerimiz/:slug_az" element={<ProjectsDetails  layihe={data?.layihe} />} ></Route>
              <Route path="/foto" element={<Photo photo={data?.foto} />} ></Route>
              <Route path="/foto/:id" element={<PhotoDetails />} ></Route>
              <Route path="/video" element={<Video video={data?.video} />} ></Route>
              <Route path="/video/:slug_az" element={<VideoDetails video={data?.video} />} ></Route>
              <Route path="/blog" element={<Blog blog={data?.blog} />} ></Route>
              <Route path="/blog/:slug_az" element={<BlogDetail blog={data?.blog} />} ></Route>
              <Route path="/sertifikat" element={<Certificats certificats={data?.certificats} />} ></Route>
              <Route path="/servis" element={<ServiceAbout option={data?.options} service1={data?.services1} service2={data?.services2} />} ></Route>
              <Route path="/rey-sorgusu" element={<Comments />} ></Route>
              <Route path="/elaqe" element={<Contact option={data?.options} />} ></Route>
            </Routes>
          </Layout>
      }


    </>
  )
}

export default App
