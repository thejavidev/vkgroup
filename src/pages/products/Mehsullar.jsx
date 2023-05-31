import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import { getMultiLang as ml } from '../../components/MultiLang';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoaderContent from '../../components/loader/LoaderContent';
import LoaderText from '../../components/loader/LoaderText';
import { useTranslation } from 'react-i18next';
import { noPhoto } from '../../assets';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel,Navigation } from "swiper";
import { BsArrowLeft,BsArrowRight } from 'react-icons/Bs';


const Mehsullar = ({ mehsullar }) => {
    const { slug_az } = useParams();
    const currentPost = mehsullar?.find((post) => post?.slug_az === slug_az);
    const menu = currentPost?.sub_categories;
    const [loading, setLoading] = useState(false);
    const [t] = useTranslation("translation");


    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    return (
        <>
            <div className="min-h-[80vh] bg-[--bg]">
                <div className="p-[20px] mt-[67px] md:mt-[50px] bg-[--bg3] w-full flex items-center justify-center">
                    <h2 className='text-center font-[700] text-[25px] md:text-[20px] uppercase text-[--text] '>{ml(currentPost?.name_az, currentPost?.name_ru, currentPost?.name_en)}</h2>
                </div>
                <Container>
                    <div className=" flex justify-end mt-10">
                        <Button className="next">
                            <BsArrowLeft className='text-[25px] mr-4 text-[#ff0000]' />
                        </Button>
                        <Button className="prev">
                            <BsArrowRight className='text-[25px] text-[#ff0000]' />
                        </Button>
                    </div>
                    <Tabs className='mt-2 '>
                        <TabList className='flex  gap-5  bg-[--bg2] transitions rounded-[42px]'>
                            <Swiper
                                className='flex w-full'
                                slidesPerView={5}
                                spaceBetween={0}
                                mousewheel={true}
                                modules={[Mousewheel,Navigation]}
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
                                    menu && menu?.map((link, index) => (
                                        <SwiperSlide key={index} className='flex items-center justify-center'>
                                            <Tab _selected={{ color: 'white', bg: 'red' }}
                                                className={`transitions pt-[10px] pb-[10px] pl-[20px] pr-[20px] md:pl-[10px] md:pr-[10px] md:text-[13px] text-[--text] rounded-[42px] `}

                                            >
                                                {ml(link?.name_az, link?.name_ru, link?.name_en)}
                                            </Tab>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                        </TabList>
                        <TabPanels className='mt-3 mb-10 '>
                            {
                                menu && menu?.map((cur, index) => {
                                    const defaulImg = noPhoto;
                                    const shortLink = cur?.products?.[0];
                                    const shortlinkSrc = shortLink?.src;
                                    const shortlinkALt = (ml(shortLink?.alt_az, shortLink?.alt_ru, shortLink?.alt_en))
                                    const shortLinkH2 = (ml(shortLink?.title_1_az, shortLink?.title_1_ru, shortLink?.title_1_en))
                                    const shortLinkDiv = (shortLink && ml(shortLink?.text_az, shortLink?.text_ru, shortLink?.text_en))
                                    return (
                                        <TabPanel key={index}>
                                            <Row className='justify-between items-center'>
                                                <Col lg={4} className=' p-[20px]'>
                                                    {
                                                        loading ? <LoaderContent /> :
                                                            <LazyLoadImage id='img' src={shortlinkSrc ? shortlinkSrc : defaulImg} className=' w-[400px] object-contain  md:w-full md:mb-10 md:h-[250px]' alt={shortlinkALt} />
                                                    }
                                                </Col>
                                                <Col lg={8} className=' h-full flex flex-col pl-[20px]'>
                                                    {
                                                        loading ? <LoaderText /> :
                                                            <h2 className='text-[25px] font-[700] text-[--text] capitalize pb-[20px]'>{shortLinkH2}</h2>
                                                    }
                                                    {
                                                        loading ? <LoaderText /> :
                                                            <div className='text-[16px] text-justify text-[--text] mehsulspan' dangerouslySetInnerHTML={{ __html: shortLinkDiv }}></div>
                                                    }
                                                </Col>

                                            </Row>

                                        </TabPanel>
                                    )
                                })
                            }
                        </TabPanels>
                    </Tabs>
                </Container>
            </div>
        </>
    )
}

export default Mehsullar
