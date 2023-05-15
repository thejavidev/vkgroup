import React from 'react'
import { useTranslation } from 'react-i18next';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { getMultiLang as ml } from '../../../components/MultiLang';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FiltrItem from './FiltrItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Filtr = ({ filtr, filtrdata }) => {
    const [t] = useTranslation("translation");
   


    return (
        <>
            <div className="p-[20px] mt-[70px] bg-[#F3F3F3] w-full flex items-center justify-center ">
                <h2 className='text-center font-[700] text-[25px] uppercase text-[#272727] '>{t("filtr")}</h2>
            </div>
            <Container >


                <div className="mb-[60px] min-h-[65vh]">


                    <Tabs >
                        <TabList className=' items-center justify-around gap-5 bg-[#f3f3f3] mt-4 text-center rounded-[42px]'>

                            {filtr && filtr?.map((item, i) => (
                                <Tab key={i} _selected={{ color: 'white', bg:'red' ,transition:"all .2s",borderRadius:"42px" }}>
                                     <FiltrItem filtrdata={filtrdata} text={ml(item?.name_az, item?.name_ru, item?.name_en)} slug={item?.slug_az} />
                                    

                                </Tab>
                            ))}



                        </TabList>

                        <TabPanels className='mt-[100px]'>

                            {
                                filtrdata && filtrdata?.map((item, i) => (
                                    <TabPanel key={i}>
                                        <Row>
                                            <Col lg={6} md={12}>
                                                <LazyLoadImage src={item?.src} className='w-[400px]' />
                                            </Col>
                                            <Col lg={6} md={12} className='flex justify-center flex-col'>
                                                <h2 className='font-[700] text-[35px] text-[#272727] capitalize pb-[20px]'>{ml(item?.title_1_az, item?.title_1_ru, item?.title_1_en)}</h2>
                                                <div className='text-[16px] text-justify text-[#272727]' dangerouslySetInnerHTML={{ __html: item && ml(item?.text_az, item?.text_ru, item?.text_en) }}></div>
                                            </Col>
                                        </Row>
                                      
                                        
                                    </TabPanel>
                                ))
                            }
                        </TabPanels>
                    </Tabs>



                </div>
            </Container>
        </>
    )
}

export default Filtr
