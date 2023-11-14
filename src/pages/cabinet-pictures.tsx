
import React from 'react'
import Appointment from '../components/Appointment';
import GenericPage from './generic-page';
import { Box, ImageList, ImageListItem, Paper } from '@mui/material';
import BrowserOnly from '@docusaurus/BrowserOnly';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export default function CabinetPictures(props) {    
    const itemData = [

          {
            img: "/img/cabinet/cab-6986.jpg",
            title: "4",
            rows: 3,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-6992.jpg",
            title: "5",
            rows: 3,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-7004.jpg",
            title: "6",
            rows: 3,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-7009.jpg",
            title: "7",
            rows: 3,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-7034.jpg",
            title: "9",
            rows: 6,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-7049.jpg",
            title: "10",
            rows: 3,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-7053.jpg",
            title: "11",
            rows: 3,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-7075b.jpg",
            title: "12",
            rows: 3,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-7092.jpg",
            title: "13",
            rows: 3,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-7101.jpg",
            title: "14",
            rows: 6,
            cols: 1,
          },
          {
            img: "/img/cabinet/cab-7111-ret.jpg",
            title: "15",
            rows: 3,
            cols: 1,
          }
      ];
      
    return (<GenericPage children={
        <BrowserOnly>{() => {
            return <ImageList
      sx={{ margin:'5pt', boxShadow: '0 0 0.1vw 0.1vh grey' }}
      variant="masonry"
      cols={window.innerWidth>1000?4:1}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            style={{ imageRendering: 'crisp-edges' }}
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>}}</BrowserOnly>
    
    }></GenericPage>)
}
