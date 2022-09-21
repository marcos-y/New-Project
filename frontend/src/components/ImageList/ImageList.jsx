import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import img1 from '../../images/drone1.jpg';
import img2 from '../../images/drone2.jpg';
import img3 from '../../images/drone3.jpg';
import img4 from '../../images/drone4.jpg';
import img5 from '../../images/drone5.jpg';
import img6 from '../../images/laptop1.jpg';
import img7 from '../../images/laptop2.jpg';
import img8 from '../../images/laptop3.jpg';
import img9 from '../../images/laptop4.jpg';
import img10 from '../../images/laptop5.jpg';
import img11 from '../../images/smartphone1.jpg';
import img12 from '../../images/smartphone2.jpg';
import img13 from '../../images/smarthpone3.jpg';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 450, margin:'auto' }}
      variant="quilted"
      cols={6}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img:  'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: img2,
    title: 'Burger',
  },
  {
    img: img3,
    title: 'Camera',
  },
  {
    img: img4,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: img5,
    title: 'Hats',
    cols: 2,
  },
  {
    img: img6 ,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: img7,
    title: 'Basketball',
  },
  {
    img: img8,
    title: 'Fern',
  },
  {
    img: img9,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: img10,
    title: 'Tomato basil',
  },
  {
    img: img11,
    title: 'Sea star',
  },
  {
    img: img12,
    title: 'Bike',
    cols: 2,
  },
];