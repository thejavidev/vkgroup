import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getMultiLang as ml } from '../components/MultiLang';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AspectRatio } from '@chakra-ui/react'
import LoaderContent from '../components/loader/LoaderContent';
import LoaderText from '../components/loader/LoaderText';
import { useParams } from 'react-router';

const Equipment = ({ avadanlig }) => {
    const [t] = useTranslation("translation");
    const [loading, setLoading] = useState(false);
    const { slug_az } = useParams();
    const currentPost = avadanlig?.find((post) => post.slug_az === slug_az);
    console.log(currentPost)
    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);
    return (
        <>
            <div className="p-[20px] mt-[70px] bg-[#F3F3F3] w-full flex items-center justify-center">
                <h2 className='text-center font-[700] text-[25px] uppercase text-[#272727] '>{t("avadanliq")}</h2>
            </div>
            <div className="min-h-[65vh]">


                <Container>
                    <Tabs className='mt-5'>
                        <TabList className='flex justify-around gap-5  bg-[#f3f3f3] transitions rounded-[42px]'>
                            {
                                avadanlig && avadanlig?.map((cur, index) => (
                                    <Tab key={index} _selected={{ color: 'white', bg: 'red' }} className={`transitions capitalize pt-[10px] pb-[10px] pl-[20px] pr-[20px] rounded-[42px] `}>
                                        {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                                    </Tab>
                                ))
                            }


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
                                            <Col lg={6}>
                                                {
                                                    loading ? <LoaderContent /> :
                                                        <LazyLoadImage src={cur?.src} alt='' className='w-[400px] object-contain' />
                                                }
                                            </Col>
                                            <Col lg={6}>
                                                <AspectRatio maxW='560px' ratio={16 / 9}>
                                                    {
                                                        loading ? <LoaderContent /> :
                                                            <iframe

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
