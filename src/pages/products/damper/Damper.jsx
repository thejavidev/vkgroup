import React from 'react'
import { useTranslation } from 'react-i18next';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { getMultiLang as ml } from '../../../components/MultiLang';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DamperItem from './DamperItem';

const Damper = ({ filtr, filtrdata }) => {
    const [t] = useTranslation("translation");
    return (
        <>
            <div className="p-[20px] mt-[70px] bg-[#F3F3F3] w-full flex items-center justify-center ">
                <h2 className='text-center font-[700] text-[25px] uppercase text-[#272727] '>{t("damper2")}</h2>
            </div>
            <Container >


                <div className="mb-[60px] min-h-[65vh]">


                    <Tabs >
                        <TabList className=' items-center justify-around gap-5 bg-[#f3f3f3] mt-4 text-center rounded-[42px]'>

                            {filtr && filtr?.map((item, i) => (
                                <Tab key={i} _selected={{ color: 'white', bg: 'red', transition: "all .2s", borderRadius: "42px" }}>

                                    <div className="w-full-h-full block pt-[8px] pb-[8px] pl-[20px] pr-[20px] text-[20px]  hover:text-[#000]">
                                        {ml(item?.name_az, item?.name_ru, item?.name_en)}
                                    </div>

                                </Tab>
                            ))}



                        </TabList>

                        <TabPanels className='mt-[100px]'>

                            {
                                filtrdata && filtrdata?.map((item, i) => (
                                    <DamperItem filtrdata={filtrdata} parentId={item?.parent_id} key={i} image={item?.src} h2text={ml(item?.title_1_az, item?.title_1_ru, item?.title_1_en)} divtext={{ __html: item && ml(item?.text_az, item?.text_ru, item?.text_en) }} />
                                ))
                            }
                        </TabPanels>
                    </Tabs>



                </div>
            </Container>
        </>
    )
}

export default Damper
