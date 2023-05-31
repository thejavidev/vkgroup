import React from 'react'
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getMultiLang as ml } from '../components/MultiLang';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';


const VideoDetails = React.memo(({ video }) => {
  const [t] = useTranslation("translation");
  const { slug_az } = useParams();
  const Data = video;
  const currentPost = Data?.find((post) => post.slug_az === slug_az);

  return (
    <>
      <div className="p-[20px] mt-[67px] bg-[--bg3] md:mt-[50px] w-full flex items-center justify-center">
        <h2 className='text-center font-[700] text-[25px] md:text-[20px] uppercase text-[--text] '>{t("footervideo")} - {ml(currentPost?.title_az, currentPost?.title_ru, currentPost?.title_en)}</h2>
      </div>
      <div className="pt-[20px] pb-[50px]">
        <Container>
          <Row>
            <h3 className='font-[700] text-[25px] md:text-[18px] md:pl-[10px] text-[--text] w-full pt-[20px] pb-[20px] pl-0 pr-0 m-0'>{ml(currentPost?.title_az, currentPost?.title_ru, currentPost?.title_en)}</h3>
            <Col lg={12}>
              <iframe className='w-full h-[600px] lg:h-full' src={currentPost?.video_link} ></iframe>
            </Col>

          </Row>
        </Container>
      </div>

    </>
  )
})

export default VideoDetails
