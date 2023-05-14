import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Card, Heading, CardBody, Stack, CardFooter } from '@chakra-ui/react'
import { getMultiLang as ml } from '../components/MultiLang';
import Contact from "./Contact";


const Home = ({ slider, section2, about, avadanliq, project, brend }) => {
  const [t] = useTranslation("translation");

  return (
    <>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}

        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        {
          slider && slider?.map((item, index) => (
            <SwiperSlide key={index} className="relative after">
              <LazyLoadImage className="w-full h-[650px] md:h-full" src={item?.src} alt={item?.alt_az} />
              <div className="sliderText absolute top-[50%] left-[50%] z-30 text-center text-black">
                <div className="flex items-center justify-center w-full h-full flex-col text-center">
                  <h5 className="text-[70px] text-white capitalize">{ml(item?.title_1_az,item?.title_1_ru,item?.title_1_en)}</h5>
                  <p className="font-[400] text-[19px] pt-[30px] text-center text-white">{ml(item?.title_2_az,item?.title_2_ru,item?.title_2_en)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="p-0 mt-[-25px] relative">
        <Container>
          <Row>
            <Swiper
              slidesPerView={5}
              centeredSlides
              roundLengths={true}
              loop={true}
              speed={1200}
              spaceBetween={0}
              className="relative w-full"
            >
              {
                section2 && section2?.map((item, index) => (
                  <SwiperSlide className="relative w-full" key={index}>
                    <Link to={`xidmetler/mexaniki/${item.slug_az}`} className="scale1 flex items-center justify-center transitions cursor-pointer font-bold text-white bg-[#124395] w-[280px] h-[280px] overflow-hidden rounded-full z-50 border25 relative scale-[0.65]">
                      <div className="">
                        <h1 className="text-[18px] uppercase text-center border-none" dangerouslySetInnerHTML={{ __html: item && ml(item.name_az, item.name_ru, item.name_en) }}></h1>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </Row>
        </Container>
      </div>

      <div className="bg-[#F3F3F3] relative mt-4 w-full pt-[30px] pb-[30px] pl-0 pr-0">
        <Container>
          <Row className="items-center">

            <Col lg={8} md={12}>
              <p className="font-[400] text-[30px] text-[#272727]">{t("whowe")}</p>
              <div className="font-[400] pt-[20px] text-justify line-clamp-3 " dangerouslySetInnerHTML={{ __html: about && ml(about?.biz_text_az, about?.biz_text_ru, about?.biz_text_en) }}>
              </div>
              <Link to="about">
                <Button className="mt-[30px] bg-[#E10632] text-white border-none outline-none rounded-none pl-[20px] pr-[20px] capitalize text-[17px]">{t("more")}</Button>
              </Link>
            </Col>
            <Col lg={4} md={12}>
              <LazyLoadImage className="p-[20px]" src={about?.biz_img} />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="relative equi bg-[#E10632] p-[20px]">
        <Container>
          <Row>
            <div className="flex">
              <p className="font-[400] text-[30px] text-white pt-[10px] pl-0 pr-0 pb-[20px] capitalize w-full">{t("avadanliq")}</p>
            </div>
            <Swiper
              slidesPerView={5}
              loop={true}
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
            >
              {
                avadanliq && avadanliq?.map((item, index) => (
                  <SwiperSlide key={index} >
                    <Card maxW='sm'>
                      <CardBody>
                        <LazyLoadImage
                          src={item.src}
                          alt={item.alt_az}
                          className="w-full"
                        />
                        <Stack mt='6' >
                          <Heading className="pt-[10px] font-[600] text-[14px] text-white" size='md'>{ml(item?.name_az, item?.name_ru, item?.name_en)}</Heading>

                        </Stack>
                      </CardBody>

                      <CardFooter>
                        <Link to={`avadanliqlar/${item?.slug_az}`}>
                          <Button className="bg-[#E10632] border-none outline-none shadow1 mt-[20px] mr-0 mb-[10px] ml-0 rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-white text-[17px] ">
                            {t("etrafli")}
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </Row>
        </Container>

      </div>

      <div className="relative bg-[#F3F3F3] p-[20px]">
        <Container>
          <p className="font-[400] text-[30px] text-[#272727] pt-[10px] pl-0 pr-0 pb-[20px]">{t("projects")}</p>
          <Row className="">
            {
              project && project?.slice(0, 4).map((item, index) => (
                <Col className="imageP relative p-0 m-0 cursor-pointer" key={index} lg={3} md={4}>
                  <Link to={`layihelerimiz/${item?.slug_az}`}>
                    <LazyLoadImage src={item?.cover} alt={item?.cover_alt_az} />
                  </Link>
                </Col>
              ))
            }
            <Link to={`layihelerimiz`} className="p-0 m-0">
              <Button className="bg-[#fff] border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] ml-0 rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
                {t("more")}
              </Button>
            </Link>
          </Row>
        </Container>
      </div>

      <div className="bg-[#fff] relative p-[20px] mt-4">
        <Container>
          <Row>
            <Swiper
              slidesPerView={6}
              loop={true}
              spaceBetween={20}
            >
              {
                brend && brend?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-full imageB bg-[#E10632] flex w-[180px] h-[180px] items-center justify-center transitions cursor-pointer hover:bg-[#f3f3f3]">
                      <LazyLoadImage className="w-[100px]" src={item.src} alt={item.alt_az} />
                      <LazyLoadImage className="w-[100px] hidden" src={item.grey_src} alt={item.alt_grey_az} />
                    </div>
                  </SwiperSlide>
                ))
              }


            </Swiper>
          </Row>
        </Container>
      </div>

      <div className="mb-10 mt-10">
        <Contact about={about} />
      </div>

    </>
  )
}

export default Home
