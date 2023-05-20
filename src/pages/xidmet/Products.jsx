import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { getMultiLang as ml } from '../../components/MultiLang';
import { useParams } from 'react-router';
import { Link ,NavLink} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { noPhoto } from '../../assets';
import { useEffect, useState } from 'react';
import LoaderContent from '../../components/loader/LoaderContent';
import LoaderText from '../../components/loader/LoaderText';

const Products = ({ products }) => {
    const [t] = useTranslation("translation");
    const [loading, setLoading] = useState(false)
    const { slug_az } = useParams();
    const subCategories1 = products?.[0]?.sub_categories_1
    const currentPost = subCategories1?.find((post) => post.slug_az === slug_az);
    const sub2 = currentPost?.sub_categories_2;
    // const [cur_section, setCurSection] = useState('')
    // onClick={() => setCurSection(cur)}
    // ${cur === cur_section ? "activeRounded": ""}
    const urlname='xidmetler/';
    const url= urlname+products?.[0]?.slug_az;
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 500);
      }, [])
    return (
        <div className='min-h-[80vh] pt-[40px] pb-40px] pl-[100px] pr-[100px]'>
            <Swiper
                slidesPerView={8}
                spaceBetween={30}
            >
                <SwiperSlide className='flex gap-5'>
                    {
                        subCategories1 && subCategories1?.map((cur, index) => {

                            return (
                                <div className="flex insaat" key={index}>
                                    <NavLink to={`/${url}/${cur?.slug_az}`}
                                   
                                    className={`bg-[#124395] text-[#fff]  
                                   font-[700] uppercase
                                    flex w-[170px] h-[170px] items-center justify-center  transitions  hover:bg-[#f3f3f3] hover:text-[#124395]
                                    text-center rounded-full cursor-pointer`}>
                                        {ml(cur?.name_az, cur?.name_ru, cur?.name_en)}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </SwiperSlide>
            </Swiper>

            <Tabs>
                <TabList className='flex mt-14 bg-[#f3f3f3] rounded-[42px] justify-between w-max gap-4 items-center'>

                    {
                        sub2 && sub2?.map((item, i) => (
                            <Tab _selected={{ color: 'white', bg: 'red' }} key={i} className='flex border-none capitalize outline-none shadow-none items-center justify-center rounded-[42px] transitions    font-[600] text-[#000] p-[15px]'>
                                {ml(item?.name_az,item?.name_ru,item?.name_en)}

                            </Tab>
                        ))
                    }

                </TabList>

                <TabPanels className='mt-5'>
                    {
                        sub2 && sub2?.map((item, i) => {
                            const defaulImg = noPhoto;
                            const shortlink = item?.products?.[0]
                            const image = shortlink?.src;
                            const altTeg = shortlink?.alt_az;
                            const text1 = ml(shortlink?.title_1_az, shortlink?.title_1_ru, shortlink?.title_1_en)
                            const text2 = ml(shortlink?.title_2_az, shortlink?.title_2_ru, shortlink?.title_2_en)
                            const text3 = ml(shortlink?.text_az, shortlink?.text_ru, shortlink?.text_en)

                            return (
                                <TabPanel key={i}>
                                    <Row className='items-center'>
                                        <Col lg={3} className=''>
                                            {
                                                loading ? <LoaderContent /> :
                                                <LazyLoadImage id='img' src={image ? image : defaulImg} className=' w-full h-[250px]  object-contain ' alt={altTeg} />
                                            }
                                        </Col>
                                        <Col lg={9}>
                                            {
                                                loading ? <LoaderText /> :
                                                <h2 className='capitalize font-[700] text-[40px] tetx-[#272727] m-0 pb-[10px]'>{text1}</h2>
                                            }
                                            {
                                                loading ? <LoaderText /> :
                                                <h5 className='text-[25px] font-[600] capitalize text-[#272727] m-0 pb-[10px]'>{text2}</h5>
                                            }
                                            {
                                                loading ? <LoaderText /> :
                                                <div className='text-[#272727] text-[16px] text-justify m-0' dangerouslySetInnerHTML={{ __html: text3 && text3 }}></div>
                                            }
                                        </Col>
                                    </Row>
                                </TabPanel>
                            )
                        })
                    }


                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Products
