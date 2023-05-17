import React, { useEffect, useRef, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { getMultiLang as ml } from '../../components/MultiLang';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Mehsullar = ({ mehsullar }) => {
    const { slug_az } = useParams();
    const currentPost = mehsullar?.find((post) => post.slug_az === slug_az);
    const menu = currentPost?.sub_categories;

    // const yoxla = menu?.[0]?.products?.[0]?.src;

    return (
        <>
            <div className="min-h-[80vh]">


                <div className="p-[20px] mt-[70px] bg-[#F3F3F3] w-full flex items-center justify-center">
                    <h2 className='text-center font-[700] text-[25px] uppercase text-[#272727] '>{ml(currentPost?.name_az, currentPost?.name_ru, currentPost?.name_en)}</h2>
                </div>
                <Container>
                    <Tabs className='mt-5 '>
                        <TabList className='flex justify-around gap-5  bg-[#f3f3f3] transitions rounded-[42px]'>
                            {
                                menu && menu?.map((link, index) => (
                                    <Tab _selected={{ color: 'white', bg: 'red' }}
                                        className={`transitions pt-[10px] pb-[10px] pl-[20px] pr-[20px] rounded-[42px] `}
                                     
                                        key={index}>
                                        {ml(link?.name_az, link?.name_ru, link?.name_en)}
                                    </Tab>
                                ))
                            }
                        </TabList>
                        <TabPanels className='mt-3 mb-10 '>
                            {
                                menu && menu?.map((cur, index) => {
                                    const defaulImg = 'https://t4.ftcdn.net/jpg/04/72/65/73/360_F_472657366_6kV9ztFQ3OkIuBCkjjL8qPmqnuagktXU.jpg';
                                    const shortLink = cur?.products?.[0];
                                    const shortlinkSrc = shortLink?.src;
                                    const shortlinkALt = (ml(shortLink?.alt_az, shortLink?.alt_ru, shortLink?.alt_en))
                                    const shortLinkH2 = (ml(shortLink?.title_1_az, shortLink?.title_1_ru, shortLink?.title_1_en))
                                    const shortLinkDiv = (shortLink && ml(shortLink?.text_az, shortLink?.text_ru, shortLink?.text_en))
                                    return (
                                        <TabPanel key={index}>
                                            <Row className='justify-between items-center'>
                                                <Col lg={4} className=' p-[20px]'>
                                                    <LazyLoadImage id='img'  src={shortlinkSrc} className=' w-[400px] object-contain ' alt={shortlinkALt} />
                                                </Col>
                                                <Col lg={8} className=' h-full flex flex-col pl-[20px]'>
                                                    <h2 className='text-[25px] font-[700] text-[#272727] capitalize pb-[20px]'>{shortLinkH2}</h2>
                                                    <div className='text-[16px] text-justify tetx-[#272727]' dangerouslySetInnerHTML={{ __html: shortLinkDiv }}></div>
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