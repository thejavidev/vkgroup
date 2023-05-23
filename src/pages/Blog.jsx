import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getMultiLang as ml } from '../components/MultiLang';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import React from 'react';
import LoaderContent from '../components/loader/LoaderContent';
import LoaderText from '../components/loader/LoaderText';
import { noPhoto } from '../assets';

const Blog = React.memo(({ blog }) => {
  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false);

  const imagePerRow = 6;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, []);


  return (
    <>
      <div className="p-[20px] mt-[70px] md:mt-[50px] bg-[#F3F3F3] w-full flex items-center justify-center">
        <h2 className='text-center font-[700] text-[25px] md:text-[20px] uppercase text-[#272727] '>{t("blog")}</h2>
      </div>
      <div className="section mt-5">
        <Container>
          <Row>
            {
              blog && blog?.slice(0, next)?.map((cur, i) => {
                return (
                  <Col key={i} lg={6} md={12} className='flex flex-wrap pb-[50px] md:pb-[20px]' id="oneBlog">
                    <Col className="overflow-hidden  p-[10px]" lg={8} md={12} xs={12}>
                      {
                        loading ? <LoaderContent /> :
                          <LazyLoadImage src={cur?.src? cur?.src :noPhoto} alt={cur?.alt_az} className='w-full h-[250px] overflow-hidden transitions hover:scale-110' />
                      }
                    </Col>
                    <Col className="flex items-start justify-center flex-col  p-[10px]" lg={4} md={12} xs={12}>
                      {
                        loading ? <LoaderText /> :
                          <h2 className='text-[23px] md:text-[18px] font-[700] text-left text-[#272727]'>{ml(cur?.title_az, cur?.title_ru, cur?.title_en)}</h2>
                      }
                      {
                        loading ? <LoaderText /> :
                          <p className='font-[400] text-[15px] text-[#272727] pt-[20px] md:pt-[10px] pb-[20px] md:pb-[10px] pl-0 pr-0 m-0'>{ml(cur?.intro_az, cur?.intro_ru, cur?.intro_en)}</p>
                      }
                      {
                        loading ? <LoaderText /> :
                          <Link to={`${cur?.slug_az}`} >
                            <Button className='bg-[#E10632] border-none outline-none shadow-none pt-[10px] pb-[10px] pl-[20px] pr-[20px] rounded-[20px] text-[#fff] font-[500] text-[12px] transitions'>
                              {t("etrafli")}
                            </Button>
                          </Link>
                      }
                    </Col>
                  </Col>
                )
              })
            }

          </Row>
          {next < blog?.length && (

            <Button onClick={handleMoreImage} className="bg-[#fff] max-w-max ml-3 border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[50px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
              {t("more2")}
            </Button>
          )}
        </Container>
      </div>
    </>
  )
})

export default Blog
