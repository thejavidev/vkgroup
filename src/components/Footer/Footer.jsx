import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getMultiLang as ml } from '../MultiLang';
import { Link } from 'react-router-dom';
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { AiFillYoutube, AiOutlineInstagram, AiFillFacebook } from 'react-icons/Ai';
import { Tb360View } from 'react-icons/Tb';





const Footer = ({ options, subone, xidmet }) => {
  const year = new Date().getFullYear();
  const [t] = useTranslation("translation");
  const url = `xidmetler`
  return (
    <>
      <footer className='bg-[#124395] w-full relative '>
        <Container fluid className=''>
          <Row className='justify-between h-full'>
            <Col lg={12} md={12} className='pt-[40px] pb-0 pl-[40px] pr-[40px]'>
              <Row className='mb-[50px]'>
                <Col lg={6} className='mb-[40px]'>
                  <h1 className='pb-[20px] font-[700] text-[27px] text-white'>{options?.footer_title_az}</h1>
                  <div className='text-white text-[16px] bg-transparent mb-3' dangerouslySetInnerHTML={{ __html: options && ml(options?.footer_text_az, options?.footer_text_ru, options?.footer_text_en) }}></div>
                  <UnorderedList className='flex gap-2 list-none p-0 m-0'>
                    <ListItem className='list-none text-white pr-2'><Link to={options?.youtube}><AiFillYoutube className='text-[25px]' /></Link></ListItem>
                    <ListItem className='list-none text-white pr-2'><Link to={options?.instagram}><AiOutlineInstagram className='text-[25px]' /></Link></ListItem>
                    <ListItem className='list-none text-white pr-2'><Link to={options?.facebook}><AiFillFacebook className='text-[25px]' /></Link></ListItem>
                    <ListItem className='list-none text-white '><Link to='https://player.emlak360.az/LHGzMU4Yqvx/?m=LHGzMU4Yqvx&type=az360'><Tb360View className='text-[25px]' /></Link></ListItem>
                  </UnorderedList>
                </Col>
                <Col lg={6}>
                  <Row className="justify-end">
                    <Col lg={5}>
                      <h1 className='font-[700] text-[27px] text-white uppercase mb-3'>{t('quickmenu')}</h1>
                      <Row className="">
                        <Col lg={6} className='flex flex-col'>
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
                    <Col lg={4}>
                      <h1 className='font-[700] text-[27px] text-white uppercase mb-3'>{t('footerservice')}</h1>
                      <div className="overflow-auto h-[190px] flex flex-col">
                        {
                          subone && subone?.slice(0, 3).map((item, index) => (
                            <Link to={`${url}/${xidmet[0]?.slug_az}/${item?.slug_az}`} key={index}>
                              <div className="text-white capitalize pb-[10px] font-[600]" dangerouslySetInnerHTML={{ __html: item && ml(item?.name_az, item?.name_ru, item?.name_en) }}>
                              </div>
                            </Link>
                          ))
                        }
                        {
                          subone && subone?.slice(3, 20).map((item, index) => (
                            <Link to={`${url}/${xidmet[1]?.slug_az}/${item?.slug_az}`} key={index}>
                              <div className="text-white capitalize pb-[10px] font-[600]" dangerouslySetInnerHTML={{ __html: item && ml(item?.name_az, item?.name_ru, item?.name_en) }}>
                              </div>
                            </Link>
                          ))
                        }
                      </div>
                    </Col>
                    <Col lg={3} className='flex flex-col'>
                      <h1 className='font-[700] text-[27px] text-white uppercase mb-3'>{t('footermedia')}</h1>
                      <Link className='text-white capitalize pb-[10px] font-[600]' to='blog'>{t('footerblog')}</Link>
                      <Link className='text-white capitalize pb-[10px] font-[600]' to='foto'>{t('footerfoto')}</Link>
                      <Link className='text-white capitalize pb-[10px] font-[600]' to='video'>{t('footervideo')}</Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12} className='bg-[#272727] p-[20px] '>
              <div className="flex w-full justify-between">
                <div className="">
                  <LazyLoadImage className='w-[150px]' src='https://vkgroup.az/vk/img/header/vklogo.png' />
                </div>
                <div className="flex flex-wrap items-center">
                  <p className='text-white text-[18px] font-[400] pr-[20px]'>{t("footerT")} {year}</p>
                  <LazyLoadImage className='w-[100px] object-contain' src='https://vkgroup.az/vk/img/footer/corn.png' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
