import React, {useState} from 'react'
import './Pictures.css'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import img_flower from "../images/gallary-flower.png";

export default function Pictures() {
  
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => {
    console.log(index);
    setIndex(index);
  }
   
  return (
    <div className='pictures'>

      <img className='pictures-flower' src={img_flower}></img>
      <p className='pictures-title'>GALLAERY</p>
      <div className='pictures-images'>
      
        <Box sx={{ overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} >
            {itemData.map((item) => (
              <ImageListItem key={item.src}>
                <img
                  src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => handleClick(item.index)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Lightbox
          slides={itemData}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
       </div>
    </div>
  );
}

const itemData = [
  {
    index: 0,
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    index: 1,
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    index: 2,
    src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    index: 3,
    src: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    index: 4,
    src: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    index: 5,
    src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    index: 6,
    src: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    index: 7,
    src: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    index: 8,
    src: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    index: 9,
    src: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    index: 10,
    src: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    index: 11,
    src: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];