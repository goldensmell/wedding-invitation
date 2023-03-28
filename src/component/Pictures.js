import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Pictures.css'

export default function pictures() {

  const images = [
    {
      original: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg',
      thumbnail: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg',
    },
    {
      original: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg',
      thumbnail: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg',
    },
    {
      original: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg',
      thumbnail: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg',
    },
    {
      original: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg',
      thumbnail: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg',
    },
  ];

  return (
    <div className='pictures'>
      <ImageGallery 
        items={images} 
        showPlayButton={false}
      />    
    </div>
  );
}
