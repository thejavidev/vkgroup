import React from 'react'
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getMultiLang as ml } from '../components/MultiLang';
import Col from 'react-bootstrap/Col';
const VideoDetails = ({video}) => {
    const { slug_az } = useParams();
    const Data=video;
    const currentPost = Data?.find((post) => post.slug_az === slug_az);
    console.log(currentPost)
  return (
    <>
        <div className="pt-[50px] pb-[50px]">
            <Container>
                <Row>
                    <h3 className='font-[700] text-[25px] md:text-[18px] md:pl-[10px] text-[#272727] w-full pt-[20px] pb-[20px] pl-0 pr-0 m-0'>{ml(currentPost?.title_az,currentPost?.title_ru,currentPost?.title_en)}</h3>
                   <Col lg={12}>
                    <iframe className='w-full h-[600px] lg:h-full' src={currentPost?.video_link} ></iframe>
                   </Col>
                    
                </Row>
            </Container>
        </div>
     
    </>
  )
}

export default VideoDetails
