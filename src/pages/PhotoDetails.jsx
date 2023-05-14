import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

const PhotoDetails = ({foto}) => {

  const Data = foto;
  const [t] = useTranslation("translation");
  
  const { id } = useParams();
  const currentPost = Data?.find((post) => post.id === id);

  console.log(currentPost)

  return (
    <div className='mt-[400px]'>
      sekil details {currentPost}
    </div>
  )
}

export default PhotoDetails
