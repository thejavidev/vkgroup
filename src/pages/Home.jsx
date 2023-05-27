import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation, Mousewheel } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Card, Heading, CardBody, Stack } from '@chakra-ui/react'
import { getMultiLang as ml } from '../components/MultiLang';
import Contact from "./Contact";
import { useContext, useEffect, useMemo, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from 'react-icons/Bs';
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const Home = React.memo(({ banner, roundedmenu, option, avadanlig, layihe, brend }) => {
  const [t] = useTranslation("translation");
  AOS.init({ once: true, });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])





  return (
    <>
      <section className="home" >


        <Swiper
          spaceBetween={0}
          effect={"fade"}
          navigation={true}

          modules={[EffectFade, Navigation]}
          className="mySwiper"
        >
          {
            banner && banner?.map((item, index) => (
              <SwiperSlide key={index} className="relative after">
                <LazyLoadImage className="w-full h-[650px] lg:h-full md:h-[190px] " src={item?.src} alt={item?.alt_az} />
                <div className="sliderText absolute top-[50%] left-[50%] z-30 text-center text-black">
                  <div className="flex items-center justify-center w-full h-full flex-col text-center">
                    <h5 className="bigtext text-[70px] lg:text-[40px] md:text-[25px] text-white capitalize">{ml(item?.title_1_az, item?.title_1_ru, item?.title_1_en)}</h5>
                    <p className="font-[400] text-[19px] pt-[30px] text-center text-white">{ml(item?.title_2_az, item?.title_2_ru, item?.title_2_en)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

        <div className="p-0 mt-[-25px] md:mt-0 relative" >
          <Container>
            <Row>
              <Swiper
                slidesPerView={5}
                centeredSlides
                centeredSlidesBounds={true}
                roundLengths={true}

                speed={1200}
                breakpoints={{
                  40: {
                    slidesPerView: 2,

                  },
                  340: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 2,

                  },
                  768: {
                    slidesPerView: 3,

                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1299: {
                    slidesPerView: 5,
                  },
                }}

                className="relative w-full"
              >
                {
                  useMemo(() => (
                    roundedmenu && shuffle(Array.from(roundedmenu))?.map((item, index) => (
                      <SwiperSlide className="relative w-full" key={index} data-aos="fade-up" data-aos-offset="200">
                        <Link to={`xidmetler/mexaniki/${item?.slug_az}`} className="scale1 flex 
                        items-center justify-center transitions cursor-pointer font-bold text-white bg-[#124395] 
                        w-[280px] h-[280px] md:w-[180px] md:h-[180px]  overflow-hidden rounded-full z-50 border25 relative scale-[0.65]">
                          <div className="">
                            <h1 className="text-[18px] md:text-[15px] uppercase text-center border-none" dangerouslySetInnerHTML={{ __html: item && ml(item?.name_az, item?.name_ru, item?.name_en) }}></h1>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))
                  ), [roundedmenu])
                }

              </Swiper>
            </Row>
          </Container>

        </div>

        <div className="bg-[#F3F3F3] relative mt-4 w-full pt-[30px] pb-[30px] pl-0 pr-0" >
          <Container >
            <Row className="items-center md:p-[10px]">

              <Col lg={8} md={12} data-aos="fade-right"
                  data-aos-offset="300" >
                <p className="font-[400] text-[30px] text-[#272727] lg:mt-6">{t("whowe")}</p>
                <div className="font-[400] pt-[20px] text-justify line-clamp-3 " dangerouslySetInnerHTML={{ __html: option && ml(option?.biz_text_az, option?.biz_text_ru, option?.biz_text_en) }}>
                </div>
                <Link to="about">
                  <Button className="mt-[30px] bg-[#E10632] text-white border-none outline-none rounded-none pl-[20px] pr-[20px] capitalize text-[17px]">{t("more")}</Button>
                </Link>
              </Col>
              <Col lg={4} md={12} className="lg:order-[-1]" >
                <LazyLoadImage data-aos="fade-left"
                  data-aos-offset="300" className="p-[20px] lg:p-0 lg:mt-5  w-full" src={option?.biz_img} />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="relative equi bg-[#E10632] p-[20px]" >
          <Container>
            <Row>
              <div className="flex justify-between mb-4 items-center">
                <div className="font-[400] text-[30px] text-white pt-[10px] pl-0 pr-0 pb-[20px] capitalize w-full">{t("avadanliq")}</div>
                <div className=" flex justify-end ">
                  <Button className="next border-none outline-none shadow-none">
                    <BsArrowLeft className='text-[25px] mr-4 text-[#fff]' />
                  </Button>
                  <Button className="prev border-none outline-none shadow-none">
                    <BsArrowRight className='text-[25px] text-[#fff]' />
                  </Button>
                </div>
              </div>
              <Swiper
                slidesPerView={5}
                loop={true}
                spaceBetween={20}
                modules={[Mousewheel, Navigation]}
                navigation={{
                  nextEl: ".prev",
                  prevEl: ".next"
                }}
                breakpoints={{
                  240: {
                    slidesPerView: 2,

                  },
                  640: {
                    slidesPerView: 2,

                  },
                  768: {
                    slidesPerView: 3,

                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1299: {
                    slidesPerView: 5,
                  },
                }}
              >
                {
                  useMemo(() => (
                    avadanlig && shuffle(Array?.from(avadanlig))?.map((item, index) => (
                      <SwiperSlide key={index} >
                        <Card maxW='sm'>
                          <CardBody data-aos="fade-up" data-aos-offset={(220 * index) / 2}>
                            <LazyLoadImage
                              src={item?.src}
                              alt={item?.alt_az}
                              className="w-full"
                            />
                            <Stack mt='6' >
                              <Heading className="pt-[10px] font-[600] capitalize text-[14px] text-white" size='md'>{ml(item?.name_az, item?.name_ru, item?.name_en)}</Heading>
                            </Stack>
                          </CardBody>
                        </Card>
                      </SwiperSlide>
                    ))
                  ), [avadanlig])
                }

              </Swiper>
              <Link to={`avadanliqlar`}>
                <Button className="bg-[#fff] border-none outline-none shadow1 mt-[40px] mr-0 mb-[10px] ml-0 rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
                  {t("more2")}
                </Button>
              </Link>
            </Row>
          </Container>

        </div>

        <div className="relative bg-[#F3F3F3] p-[20px]" >
          <Container>
            <p className="font-[400] text-[30px] md:text-[20px] text-[#272727] pt-[10px] pl-0 pr-0 pb-[20px]">{t("projects")}</p>
            <Row className="">
              {
                useMemo(() => (
                  layihe && shuffle(Array.from(layihe))?.slice(0, 4).map((item, index) => (
                    <Col className="imageP relative p-0 m-0 cursor-pointer" key={index} lg={3} md={4} xs={6} data-aos="fade-up" data-aos-offset={(220 * index) / 2}>
                      <Link to={`layihelerimiz/${item?.slug_az}`}>
                        <LazyLoadImage src={item?.cover} alt={item?.cover_alt_az} />
                      </Link>
                    </Col>
                  ))
                ), [layihe])
              }
              <Link to={`layihelerimiz`} className="p-0 m-0">
                <Button className="bg-[#fff] border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] ml-0 rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
                  {t("more2")}
                </Button>
              </Link>
            </Row>
          </Container>
        </div>

        <div className="bg-[#fff] relative p-[20px] mt-4" >
          <Container>
            <Row>
              <Swiper
                slidesPerView={6}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  240: {
                    slidesPerView: 2,

                  },
                  640: {
                    slidesPerView: 2,

                  },
                  768: {
                    slidesPerView: 3,

                  },
                  1124: {
                    slidesPerView: 4,
                  },
                  1299: {
                    slidesPerView: 5,
                  },
                }}
              >
                {
                  useMemo(() => (
                    brend && brend?.map((item, index) => (
                      <SwiperSlide key={index} >
                        <div className="rounded-full imageB bg-[#E10632] flex w-[180px] h-[180px] md:w-[130px] md:h-[130px] items-center justify-center transitions cursor-pointer hover:bg-[#f3f3f3]">
                          <LazyLoadImage className="w-[100px]" src={item?.src} alt={item?.alt_az} />
                          <LazyLoadImage className="w-[100px] hidden" src={item?.grey_src} alt={item?.alt_grey_az} />
                        </div>
                      </SwiperSlide>
                    ))
                  ), [brend])
                }


              </Swiper>
            </Row>
          </Container>
        </div>

        <div className="mb-10 mt-10" >
          <Contact option={option} />
        </div>

      </section>

    </>

  )
})

export default Home
