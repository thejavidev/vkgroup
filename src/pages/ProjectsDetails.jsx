import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { getMultiLang as ml } from '../components/MultiLang';
import { useParams } from "react-router";
import { useEffect, useState } from "react";




const ProjectsDetails = ({project}) => {

  const [t] = useTranslation("translation");
  
  const { slug } =useParams();

  const [product,setProduct] =useState([])
  useEffect(()=>{
    const fetchProducts =async ()=>{
      const response =await fetch(`https://vkgroup.az/api/data/layihe/${slug}`)
      const data =await response.json()
      console.log(data);
      setProduct(data)
    }
    fetchProducts()
  },[])

  return (
    <>
      <div className="">
        <Container>
          <Row>
            <Col lg={4} md={12}>
              <div className="">
                <h2>{ml(project?.title_az,project?.title_ru,project?.title_en)}</h2>
              </div>
            </Col>
            <Col lg={8} md={12}>
              <LazyLoadImage src={project?.cover} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProjectsDetails
