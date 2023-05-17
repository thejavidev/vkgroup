import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../components/MultiLang';
import { useParams } from "react-router";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";



const ProjectsDetails = ({ layihe }) => {
  const Data = layihe;
  const [t] = useTranslation("translation");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { slug_az } = useParams();
  const currentPost = Data?.find((post) => post.slug_az === slug_az);
  const images = currentPost?.images;
  console.log(images)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="mt-32 mb-28">
        <Container>
          <Row>
            <Col lg={4} md={12}>
              <div className="">
                <h2 className="font-[700] text-[40px] text-[#272727] mb-3">{ml(currentPost?.title_az, currentPost?.title_ru, currentPost?.title_en)}</h2>
                <p className="font-[400] text-[16px] text-[#272727] text-justify pt-[20px] pb-[20px] pl-0 pr-0 m-0">{ml(currentPost?.intro_az, currentPost?.intro_ru, currentPost?.intro_en)}</p>
              </div>
            </Col>
            <Col lg={8} md={12}>
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 mb-2"
              >
                {
                  images && images?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <LazyLoadImage className="h-[400px] w-full" src={item?.src} />
                    </SwiperSlide>

                  ))
                }



              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mb-4"
              >
                <div className=" border-2 border-[#ff0000] w-full">

                  {
                    images && images?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <LazyLoadImage className="h-[88px] w-full" src={item?.src} />
                      </SwiperSlide>

                    ))
                  }
                </div>


              </Swiper>


            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProjectsDetails
