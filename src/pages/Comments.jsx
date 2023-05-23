import React from 'react';
import MultiStepProgressBar from '../components/UI/MultiStepProgressBar';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Card, CardHeader, CardBody, CardFooter,Button } from '@chakra-ui/react';
import { sections } from '../components/UI/inner/Sections';
import MultiStepPages from '../components/UI/MultiStepPages';


const Comments = () => {
  const [index, setIndex] = useState(1);
  const totalPages =sections.length;

  const prevBtn =()=>{
    if(index > 1){
      setIndex(prevIndex =>prevIndex - 1)
    }
  }
  const nextBtn =()=>{
    if(index < 4){
      setIndex(prevIndex =>prevIndex + 1)
    }
  }
  return (
    <>
      <Container >
        <div className='min-h-[100vh] mt-[100px]'>
          <MultiStepProgressBar step={index}  />
          <Row>
            <Card className='mt-20'>
              <CardBody >
                <MultiStepPages step={index} list={sections} />

              </CardBody>
              <CardFooter className='flex justify-between mt-11'>
                <Button className='btn bg-black text-white' onClick={prevBtn} isDisabled={index === 1}>
                  prev
                </Button>
                <Button className={`btn  hover:bg-[#000] text-white ${index === totalPages ? 'bg-[#ff0000]':'bg-[#000]'}`} onClick={nextBtn} >
                  {index === totalPages ? 'Gonder' :'Next'}
                </Button>
              </CardFooter>
            </Card>
          </Row>
        </div>
      </Container>

    </>
  )
}

export default Comments
