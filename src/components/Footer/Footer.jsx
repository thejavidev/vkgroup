import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getMultiLang as ml } from '../MultiLang';
import { Link } from 'react-router-dom';
import React from 'react';
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { AiFillYoutube, AiOutlineInstagram, AiFillFacebook } from 'react-icons/Ai';
import { Tb360View } from 'react-icons/Tb';
import {  cornlogo, headerLogo } from '../../assets';





const Footer = React.memo(({ option, xidmet }) => {
  const year = new Date().getFullYear();
  const [t] = useTranslation("translation");
  const url = `xidmetler`
  return (
    <>
      <footer className='bg-[--bgf] w-full relative '>
        <Container fluid className=''>
          <Row className='justify-between h-full'>
            <Col lg={12} md={12} className='pt-[40px] pb-0 pl-[40px] pr-[40px] lg:pt-[20px] lg:pl-[10px] lg:pr-[10px]'>
              <Row className='mb-[50px]'>
                <Col xl={6} md={4} sm={12} className='mb-[40px]'>
                  <h1 className='pb-[20px] font-[700] text-[27px] lg:text-[20px] text-white'>{option?.footer_title_az}</h1>
                  <div className='text-white text-[16px] bg-transparent mb-3' dangerouslySetInnerHTML={{ __html: option && ml(option?.footer_text_az, option?.footer_text_ru, option?.footer_text_en) }}></div>
                  <UnorderedList className='flex gap-2 list-none p-0 m-0'>
                    <ListItem className='list-none text-white pr-2'><Link to={option?.youtube}><AiFillYoutube className='text-[25px]' /></Link></ListItem>
                    <ListItem className='list-none text-white pr-2'><Link to={option?.instagram}><AiOutlineInstagram className='text-[25px]' /></Link></ListItem>
                    <ListItem className='list-none text-white pr-2'><Link to={option?.facebook}><AiFillFacebook className='text-[25px]' /></Link></ListItem>
                    <ListItem className='list-none text-white '><Link to='https://player.emlak360.az/LHGzMU4Yqvx/?m=LHGzMU4Yqvx&type=az360'><Tb360View className='text-[25px]' /></Link></ListItem>
                  </UnorderedList>
                </Col>
                <Col xl={6} md={8} sm={12}>
                  <Row className="justify-end lg:justify-start">
                    <Col lg={5} md={6}>
                      <h1 className='font-[700] text-[27px] lg:text-[20px] text-white uppercase mb-3'>{t('quickmenu')}</h1>
                      <Row className="lg:flex-col">
                        <Col lg={6} md={6} className='flex flex-col'>
                          <Link className='text-white capitalize pb-[10px] font-[600]' to='about'>{t('footerabout')}</Link>
                          <Link className='text-white capitalize pb-[10px] font-[600]' to='servis'>{t('footerservice')}</Link>
                          <Link className='text-white capitalize pb-[10px] font-[600]' to='layihelerimiz'>{t('footerlayihe')}</Link>
                          <Link className='text-white capitalize pb-[10px] font-[600]' to='avadanliqlar'>{t('footeravadanlig')}</Link>
                        </Col>
                        <Col lg={6} className='flex flex-col'>
                          <Link className='text-white capitalize pb-[10px] font-[600]' to='sertifikat'>{t('footercertf')}</Link>
                          <Link className='text-white capitalize pb-[10px] font-[600]' to='rey-sorgusu'>{t('footerrey')}</Link>
                          <Link className='text-white capitalize pb-[10px] font-[600]' to='elaqe'>{t('footerelaqe')}</Link>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4} md={6} className='md:mt-8'>
                      <h1 className='font-[700] text-[27px] lg:text-[20px] text-white uppercase mb-3'>{t('footerservice')}</h1>
                      <div className="overflow-auto h-[190px] flex flex-col">
                        {
                          xidmet?.[0]?.sub_categories_1 && xidmet?.[0]?.sub_categories_1?.map((item, index) => {
                          
                            return (
                              <Link to={`${url}/${xidmet[0]?.slug_az}/${item?.slug_az}`} key={index}>
                                <div className="text-white capitalize pb-[10px] font-[600]" dangerouslySetInnerHTML={{ __html: item && ml(item?.name_az, item?.name_ru, item?.name_en) }}>
                                </div>
                              </Link>
                            )
                          })
                        }
                        {
                          xidmet?.[1]?.sub_categories_1 && xidmet?.[1]?.sub_categories_1?.map((item, index) => (
                            <Link to={`${url}/${xidmet[1]?.slug_az}/${item?.slug_az}`} key={index}>
                              <div className="text-white capitalize pb-[10px] font-[600]" dangerouslySetInnerHTML={{ __html: item && ml(item?.name_az, item?.name_ru, item?.name_en) }}>
                              </div>
                            </Link>
                          ))
                        }
                      </div>
                    </Col>
                    <Col lg={3} className='flex flex-col lg:mt-12'>
                      <h1 className='font-[700] text-[27px] lg:text-[20px] text-white uppercase mb-3'>{t('footermedia')}</h1>
                      <Link className='text-white capitalize pb-[10px] font-[600]' to='media/blog'>{t('footerblog')}</Link>
                      <Link className='text-white capitalize pb-[10px] font-[600]' to='media/foto'>{t('footerfoto')}</Link>
                      <Link className='text-white capitalize pb-[10px] font-[600]' to='media/video'>{t('footervideo')}</Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12} className='bg-[#272727] p-[20px] '>
              <div className="flex w-full justify-between md:flex-col md:justify-center md:items-center md:gap-4">
                <div className="">
                  <LazyLoadImage className='w-[150px]' src={headerLogo} />
                </div>
                <div className="flex flex-wrap items-center md:justify-center md:gap-4">
                  <p className='text-white text-[18px] font-[400] pr-[20px] md:p-0'>{t("footerT")} {year}</p>
                  <a href="https://corn.az" target='_blank'>
                  <LazyLoadImage className='w-[100px] object-contain' src={cornlogo} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
})

export default Footer
