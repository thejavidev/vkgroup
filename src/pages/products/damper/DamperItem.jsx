import { TabPanel } from '@chakra-ui/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router';



const DamperItem = ({image,h2text,divtext,parentId,filtrdata}) => {
    const { parent_id } = useParams();
    const currentPost = filtrdata?.find((post) => post.parentId === parent_id);
    console.log(currentPost)
    return (
        <>
            <TabPanel >
                <Row>
                    <Col lg={6} md={12}>
                        <LazyLoadImage src={currentPost?.src} className='w-[400px]' />
                    </Col>
                    <Col lg={6} md={12} className='flex justify-center flex-col'>
                        <h2 className='font-[700] text-[35px] text-[#272727] capitalize pb-[20px]'>{h2text}</h2>
                        <div className='text-[16px] text-justify text-[#272727]' dangerouslySetInnerHTML={divtext}></div>
                    </Col>
                </Row>


            </TabPanel>
        </>
    )
}

export default DamperItem
