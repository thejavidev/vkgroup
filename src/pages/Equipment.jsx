import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getMultiLang as ml } from '../components/MultiLang';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AspectRatio } from '@chakra-ui/react'
import LoaderContent from '../components/loader/LoaderContent';
import LoaderText from '../components/loader/LoaderText';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { noPhoto, noVideo } from '../assets';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper";
import { BsArrowLeft, BsArrowRight } from 'react-icons/Bs';

const Equipment = ({ avadanlig }) => {
    const [t] = useTranslation("translation");
    const [loading, setLoading] = useState(false);
    const { slug_en } = useParams();
   
    //     const currentPost = avadanlig?.find((post) => post.slug_en === slug_en);
    //    console.log(currentPost)
    useEffect(() => {
        const iframe =document?.getElementsByTagName('iframe')[1]?.contentDocument?.body?.children?.img;
        iframe?.classList?.add('image')
        window.scrollTo(0, 0)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);
    return (
        <>
            <div className="p-[20px] mt-[70px] md:mt-[55px] bg-[#F3F3F3] w-full flex items-center justify-center ">
                <h2 className='text-center font-[700] text-[25px] md:text-[16px] uppercase text-[#272727] '>{t("avadanliq")}</h2>
            </div>
            <div className="min-h-[75vh]">
                <Container>
                <div className=" flex justify-end mt-10">
                        <Button className="next">
                            <BsArrowLeft className='text-[25px] mr-4 text-[#ff0000]' />
                        </Button>
                        <Button className="prev">
                            <BsArrowRight className='text-[25px] text-[#ff0000]' />
                        </Button>
                    </div>
                    <Tabs className='mt-5'>
                        <TabList className='flex justify-around gap-5 m-0 p-0  bg-[#f3f3f3] transitions rounded-[42px]'>
                            <Swiper
                                className='flex w-full'
                                slidesPerView={5}
                                spaceBetween={0}
                                mousewheel={true}
                                modules={[Mousewheel, Navigation]}
                                navigation={{
                                    nextEl: ".prev",
                                    prevEl: ".next"
                                }}
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
                            >
                                {
                                    avadanlig && avadanlig?.map((cur, index) => (
                                        <SwiperSlide key={index} className='flex items-center justify-center'>
                                            <Tab  _selected={{ color: 'white', bg: 'red' }} 
                                            className={`transitions capitalize pt-[10px] pb-[10px] pl-[20px] pr-[20px] md:pl-[10px] md:pr-[10px] rounded-[42px] `}>
                                                {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                                            </Tab>
                                        </SwiperSlide>

                                    ))
                                }
                            </Swiper>

                        </TabList>
                        <TabPanels className='mt-3 mb-10 '>
                            {
                                avadanlig && avadanlig?.map((cur, index) => (
                                    <TabPanel key={index}>
                                        {
                                            loading ? <LoaderText /> :
                                                <h2 className='text-[25px] font-[700] mb-4 mt-[40px] text-[#272727] capitalize pb-[20px]'>{ml(cur?.name_az, cur?.name_ru, cur?.name_en)}</h2>
                                        }
                                        <Row className='justify-between items-center'>
                                            <Col lg={6} md={12} xs={12}>
                                                {
                                                    loading ? <LoaderContent /> :
                                                        <LazyLoadImage src={cur?.src ? cur?.src : noPhoto} alt='' className='w-[400px] object-contain' />
                                                }
                                            </Col>
                                            <Col lg={6} md={12} xs={12}>
                                                <AspectRatio maxW='560px' ratio={16 / 9}>
                                                    {
                                                        loading ? <LoaderContent /> :
                                                            <iframe
                                                                className='w-full'
                                                                src={cur?.video_link}
                                                                allowFullScreen
                                                            />
                                                    }
                                                </AspectRatio>
                                            </Col>
                                        </Row>
                                    </TabPanel>
                                ))
                            }
                        </TabPanels>
                    </Tabs>
                </Container>
            </div>
        </>
    )
}

export default Equipment
