import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import LoaderCertf from '../components/loader/LoaderCertf';
import { noPhoto } from '../assets';
import React from 'react';

const Certificats = React.memo(({ certificats }) => {
  const [t] = useTranslation("translation");
  const [loading, setLoading] = useState(false)
  const imagePerRow = 4;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return (
    <>
      <div className="p-[20px] mt-[70px] md:mt-[50px] bg-[#F3F3F3] w-full flex items-center justify-center">
        <h2 className='text-center font-[700] text-[25px]  md:text-[20px] uppercase text-[#272727] '>{t("footercertf")}</h2>
      </div>
      <div className="bg-[#fff] pt-[50px] pb-[100px] min-h-[70vh] pl-0 pr-0 relative">
        <Container>
          <Row>
            {
              certificats && certificats?.slice(0, next)?.map((item, i) => {
                return (
                  <Col key={i} lg={3} md={4} xs={6} className='mb-4'>
                    {
                      loading ? <LoaderCertf /> :
                        <a href={item?.pdf ? item?.pdf :null}  target='_blank'>
                          <LazyLoadImage src={item?.src ? item?.src : noPhoto} />
                        </a>
                    }

                  </Col>
                )
              })
            }

          </Row>
          {next < certificats?.length && (

            <Button onClick={handleMoreImage} className="bg-[#fff] max-w-max ml-3 border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
              {t("more2")}
            </Button>
          )}
        </Container>
      </div>
    </>
  )
})

export default Certificats
