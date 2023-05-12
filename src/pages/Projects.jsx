import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

const Projects = ({project}) => {
  const [t] = useTranslation("translation");
  return (
    <>
       <div className="relative bg-[#F3F3F3] p-[20px]">
        <Container>
          <p className="font-[400] text-[30px] text-[#272727] pt-[10px] pl-0 pr-0 pb-[20px]">{t("projects")}</p>
          <Row className="">
            {
              project && project?.map((item, index) => (
                <Col className=" relative mb-3  cursor-pointer overflow-hidden" key={index} lg={3} md={4}>
                  <Link to={`${item?.slug_az}`} className="imageP">
                    <LazyLoadImage  src={item?.cover} alt={item?.cover_alt_az} />
                  </Link>
                </Col>
              ))
            }
            <Link to={`layihelerimiz`} className="p-0 m-0">
              <Button className="bg-[#fff] border-none capitalize outline-none shadow1 mt-[20px] mr-0 mb-[10px] ml-0 rounded-[4px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] text-black text-[17px] ">
                {t("more2")}
              </Button>
            </Link>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Projects
