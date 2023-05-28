import React, {useEffect,useState} from 'react'
import './Pictures.css'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import img_flower from "../images/gallary-flower.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pictures() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 200,
      duration: 1000
    });
  });
  
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => {
    console.log(index);
    setIndex(index);
  }
   
  return (
    <div className='pictures'>

      {/* <img className='pictures-flower' src={img_flower}></img> */}
      <p className='pictures-title' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">GALLAERY</p>
      <div className='pictures-images' >
        <Box sx={{ overflowY: 'scroll' }}>
          <ImageList cols={3} rowHeight={161} >
            {itemData.map((item) => (
              <ImageListItem key={item.src}>
                <img
                  // src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                  src={`${item.src}?w=161&auto=format`}
                  srcSet={`${item.src}?w=161&auto=format&dpr=2 2x`}
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
    src: process.env.PUBLIC_URL+"/image/studio/1.jpg",
    title: '0',
  },
  {
    index: 1,
    src: process.env.PUBLIC_URL+"/image/studio/2.jpg",
    title: '1',
  },
  {
    index: 2,
    src: process.env.PUBLIC_URL+"/image/studio/3.jpg",
    title: '2',
  },
  {
    index: 3,
    src: process.env.PUBLIC_URL+"/image/studio/4.jpg",
    title: '3',
  },
  {
    index: 4,
    src: process.env.PUBLIC_URL+"/image/studio/5.jpg",
    title: '4',
  },
  {
    index: 16,
    src: process.env.PUBLIC_URL+"/image/studio/17.jpg",
    title: '16',
  },
  {
    index: 5,
    src: process.env.PUBLIC_URL+"/image/studio/6.jpg",
    title: '5',
  },
  {
    index: 6,
    src: process.env.PUBLIC_URL+"/image/studio/7.jpg",
    title: '6',
  },
  {
    index: 7,
    src: process.env.PUBLIC_URL+"/image/studio/8.jpg",
    title: '7',
  },
  {
    index: 8,
    src: process.env.PUBLIC_URL+"/image/studio/9.jpg",
    title: '8',
  },
  {
    index: 9,
    src: process.env.PUBLIC_URL+"/image/studio/10.jpg",
    title: '9',
  },
  {
    index: 10,
    src: process.env.PUBLIC_URL+"/image/studio/11.jpg",
    title: '10',
  },
  {
    index: 11,
    src: process.env.PUBLIC_URL+"/image/studio/12.jpg",
    title: '11',
  },
  {
    index: 12,
    src: process.env.PUBLIC_URL+"/image/studio/13.jpg",
    title: '12',
  },
  {
    index: 13,
    src: process.env.PUBLIC_URL+"/image/studio/14.jpg",
    title: '13',
  },
  {
    index: 14,
    src: process.env.PUBLIC_URL+"/image/studio/15.jpg",
    title: '14',
  },
  {
    index: 15,
    src: process.env.PUBLIC_URL+"/image/studio/16.jpg",
    title: '15',
  },
  
  // {
  //   index: 17,
  //   src: process.env.PUBLIC_URL+"/image/studio/18.jpg",
  //   title: '17',
  // },
  {
    index: 18,
    src: process.env.PUBLIC_URL+"/image/studio/19.jpg",
    title: '18',
  },
  {
    index: 19,
    src: process.env.PUBLIC_URL+"/image/studio/20.jpg",
    title: '19',
  },
  {
    index: 20,
    src: process.env.PUBLIC_URL+"/image/studio/21.jpg",
    title: '20',
  },{
    index: 21,
    src: process.env.PUBLIC_URL+"/image/studio/22.jpg",
    title: '21',
  },
];