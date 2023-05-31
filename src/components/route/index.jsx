import { useDispatch, useSelector } from "react-redux"
import About from "../../pages/About"
import Blog from "../../pages/Blog"
import BlogDetail from "../../pages/BlogDetail"
import Certificats from "../../pages/Certificats"
import Contact from "../../pages/Contact"
import Equipment from "../../pages/Equipment"
import NotFound from "../../pages/NotFound"
import Photo from "../../pages/Photo"
import PhotoDetails from "../../pages/PhotoDetails"
import Projects from "../../pages/Projects"
import ProjectsDetails from "../../pages/ProjectsDetails"
import ServiceAbout from "../../pages/ServiceAbout"
import Video from "../../pages/Video"
import VideoDetails from "../../pages/VideoDetails"
import Mexaniki from "../../pages/mexaniki/Mexaniki"
import Mehsullar from "../../pages/products/Mehsullar"
import Products from "../../pages/xidmet/Products"
import { useCallback, useEffect } from "react"
import { loadposts } from "../store/posts"
import { useRoutes } from "react-router"
import Home from "../../pages/Home"
import { getMultiLang as ml } from "../MultiLang"
import { useTranslation } from "react-i18next"



const Router = () => {
    const [t] = useTranslation("translation");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.list)
    const urlX0 = data?.xidmets?.[0]?.slug_az
    const urlX1 = data?.xidmets?.[1]?.slug_az
    useEffect(useCallback(() => {
        dispatch(loadposts())
    }, [dispatch]), [])


    const mainrouter = [
        {
            path: '/',
            element: <Home roundedmenu={data?.xidmets?.[1]?.sub_categories_1} banner={data?.banner} option={data?.options} avadanlig={data?.avadanlig} layihe={data?.layihe} brend={data?.brend} />,
            exact: true,
        },
        {
            path: "/about",
            element: <About option={data?.options} />,
        },
        
        {
            path: "/mehsullar/:slug_az",
            element: <Mehsullar mehsullar={data?.mehsullar} />,
        },
        {
            path: `/xidmetler/${urlX0}/:slug_az`,
            element: <Products products={data?.xidmets} />,
        },
        {
            path: `/xidmetler/${urlX1}/:slug_az`,
            element: <Mexaniki products={data?.xidmets} />,
        },
        {
            path: "/avadanliqlar",
            element: <Equipment avadanlig={data?.avadanlig} />,
        },
        {
            path: "/layihelerimiz",
            element: <Projects layihe={data?.layihe} />,
        },
        {
            path: "/layihelerimiz/:slug_az",
            element: <ProjectsDetails layihe={data?.layihe} />,
        },
        {
            path: "/media/foto",
            element: <Photo photo={data?.foto} />,
        },
        {
            path: "/media/foto/:id",
            element: <PhotoDetails photo={data?.foto} />,
        },
        {
            path: "/media/video",
            element: <Video video={data?.video} />,
        },
        {
            path: "/media/video/:slug_az",
            element: <VideoDetails video={data?.video} />,
        },
        {
            path: "/media/blog",
            element: <Blog blog={data?.blog} />,
        },
        {
            path: "/media/blog/:slug_az",
            element: <BlogDetail blog={data?.blog} />,
        },
        {
            path: "sertifikat",
            element: <Certificats certificats={data?.certificats} />,
        },
        {
            path: "servis",
            element: <ServiceAbout option={data?.options} service1={data?.services1} service2={data?.services2} />,
        },
        {
            path: "elaqe",
            element: <Contact option={data?.options} />,
        },
        {
            path: "*",
            element: <w />,
        },
    ]
    const route = useRoutes(mainrouter);
    return <>{route}</>
}

export default Router