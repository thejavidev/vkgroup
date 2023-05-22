import React, { useEffect, useState, useCallback } from 'react';

import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useTranslation } from 'react-i18next';
import LoaderImg from '../components/loader/LoaderImg';
import LoaderSmallImng from '../components/loader/LoaderSmallImng';


const PhotoDetails = ({ photo }) => {
  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const { id } = useParams();
  const productId = parseInt(id);
  const currentPost = photo?.find((post) => post?.id == productId);
  const images = currentPost?.images;
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 700);
  }, [])
  return (
    <React.Fragment>
      <div className="p-[20px] mt-[65px] bg-[#F3F3F3] md:mt-[50px] w-full flex items-center justify-center">
        <h2 className='text-center font-[700] text-[25px] uppercase md:text-[20px] text-[#272727] '>{t("photo")}</h2>
      </div>
      <div className="mt-4 mb-10">
        <Container>
          <Row>

            <Col lg={9} md={12}>
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
                      {
                        loading ? <LoaderImg /> :
                        <LazyLoadImage className="h-[540px] lg:h-[250px] w-full" src={item?.banner} />
                      }
                    </SwiperSlide>

                  ))
                }
              </Swiper>
            </Col>
            <Col lg={3} md={12}>
              <div className="flex  h-[540px] lg:h-[120px]">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={30}
                  slidesPerView={4}
                  freeMode={true}
                  direction="vertical"
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  breakpoints={{
                    0: {
                      direction: "horizontal",
                      slidesPerView: 2,
                    },
                    991: {
                      direction: "vertical",
                    }
                  }}
                  className="mySwiper mb-4 w-full h-full "
                >
                  <div className=" w-full h-full ">

                    {
                      images && images?.map((item, index) => (
                        <SwiperSlide key={index} className=''>
                          {
                            loading ? <LoaderSmallImng /> :
                            <LazyLoadImage className="h-[120px] w-full cursor-pointer" src={item?.banner} />
                          }
                        </SwiperSlide>

                      ))
                    }
                  </div>


                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default PhotoDetails
