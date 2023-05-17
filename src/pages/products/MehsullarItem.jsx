import React from 'react'
import { useParams } from 'react-router';
import { TabPanel,TabPanels } from '@chakra-ui/react';

const MehsullarItem = ({ mehsullar }) => {


    const { slug_az } = useParams();
    
    const currentPost = mehsullar?.find((post) => post?.slug_az === slug_az);
  
    console.log("cavid===",currentPost)
    // console.log(slug_az)

    return (
        <>
           <h2 className='text-[40px]'>{currentPost?.name_az}</h2>
        </>
    )
}

export default MehsullarItem
