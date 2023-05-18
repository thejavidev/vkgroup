import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getMultiLang as ml } from '../components/MultiLang';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Import Swiper styles

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useTranslation } from 'react-i18next';


const PhotoDetails = ({foto}) => {
  const [t] = useTranslation("translation");
  const Data = foto;
  const { id } = useParams();
  const url ='https://vkgroup.az/files/fotos/';
  const productId = parseInt(id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const currentPost = Data?.find((post) => post.id === productId);
  const images = currentPost?.cover1;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 console.log(images)

  return (
    < >

      {/* <LazyLoadImage  src={currentPost?.src} /> */}
      <div className="mt-32 mb-28">
        <Container>
          <Row>
            
            <Col lg={12} md={12}>
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
                      <LazyLoadImage className="h-[400px] w-full" src={`${url}${item?.src}`} />
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
                        <LazyLoadImage className="h-[88px] w-full" src={`${url}${item?.src}`} />
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

export default PhotoDetails
