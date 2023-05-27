import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { notfoundPng } from '../assets';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const [t] = useTranslation("translation");
  return (
    <>
      <Container className='pt-[100px] pb-[100px]'>
        <Row className='items-center'> 
            <Col lg={6} md={12}>
                <LazyLoadImage src={notfoundPng} className='w-full' />
            </Col>
            <Col lg={6} md={12}>
                <h2 className='text-[20px] font-[500] italic'> {t("melumattapilmadi")}</h2>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound
