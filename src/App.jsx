import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import Construction from "./pages/Construction";
import Projects from "./pages/Projects";
// import Equipment from "./pages/Equipment";
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
import Loader from './components/loader/Loader';
import VideoDetails from './pages/VideoDetails';
import Filtr from './pages/products/FiltrPages/Filtr';
import Damper from './pages/products/damper/Damper';
// import NavTabs from './components/UI/NavTabs';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list);
  const [loading, setLoading] = useState(false)

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
      store1: data?.hproducts,
      kategoriya1: data?.hkategoriya,
      kategoriya2: data?.hkategoriya2,
      kategoriya3: data?.hkategoriya3,
      kategoriya4: data?.hkategoriya4
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
    },
    {
      id:9,
      store:data?.hkategoriyaName
    },
    {
      id:10,
      store:data?.blog
    },
    {
      id:11,
      store:data?.foto
    },
    {
      id:12,
      store:data?.certificats
    },
    {
      id:13,
      store:data?.video
    },
    {
      id:14,
      store:data?.qurums,
      store2:data?.xidmetSaheleri
    }
  ]

  useEffect(useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200);
    dispatch(loadposts());
  }, [dispatch]), [])

  return (
    <>
    {
      loading ? <Loader /> :
      <Layout options={api[1].store} subone={api[2].store} xidmet={api[8].store} fourmenu={api[9].store}>
      <Routes>
        <Route path="/" exact element={<Home slider={api[0].store} section2={api[3].store} about={api[1].store} avadanliq={api[6].store} project={api[5].store} brend={api[7].store} />} ></Route>
        <Route path="/about" element={<About about={api[1].store} />} ></Route>
        <Route path="/mehsullar/filtir" element={<Filtr filtr={api[4].kategoriya4} filtrdata={api[4].store1} />} ></Route>
        <Route path="/mehsullar/damperler" element={<Damper filtr={api[4].kategoriya3} filtrdata={api[4].store1} />} ></Route>



        <Route path="/mehsullar" element={<Construction  mehsulData={api[4].store1} mehsullink1={api[4].kategoriya1} mehsullink2={api[4].kategoriya2} mehsullink3={api[4].kategoriya3} mehsullink4={api[4].kategoriya4} />} ></Route>
        <Route path="/mehsullar/:name" element={<Construction mehsulLink={api[4].store} mehsulData={api[4].store2} />} ></Route>
        <Route path="/mehsullar/:name/:slug_az" element={<Construction mehsulLink={api[4].store} mehsulData={api[4].store2} />} ></Route>
        <Route path="/layihelerimiz" element={<Projects project={api[5].store} />} ></Route>
        <Route path="/layihelerimiz/:slug_az" element={<ProjectsDetails project={api[5].store} />} ></Route>
        {/* <Route path="/avadanliqlar" element={<Equipment avadanlig={api[6].store} avadanliglar={api[6].store} />} ></Route> */}
        <Route path="/foto" element={<Photo foto={api[11].store} />} ></Route>
        <Route path="/foto/:id" element={<PhotoDetails foto={api[11].store}  />} ></Route>
        <Route path="/video" element={<Video video={api[13].store} />} ></Route>
        <Route path="/video/:slug_az" element={<VideoDetails video={api[13].store} />} ></Route>
        <Route path="/blog" element={<Blog store={api[10].store}   />} ></Route>
        <Route path="/blog/:slug_az" element={<BlogDetail store={api[10].store}   />} ></Route>
        <Route path="/sertifikat" element={<Certificats certfkat={api[12].store} />} ></Route>
        <Route path="/servis" element={<ServiceAbout options={api[1].store} service1={api[14].store} service2={api[14].store2}  />} ></Route>
        <Route path="/rey-sorgusu" element={<Comments />} ></Route>
        <Route path="/elaqe" element={<Contact about={api[1].store} />} ></Route>
      </Routes>
    </Layout>
    }

     
    </>
  )
}

export default App
