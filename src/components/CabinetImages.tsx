import { ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export function CabinetImages() {
  const [w, setW] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setW(window.innerWidth)
    })
  }, [])

  return (<>
    {(w > 1410) ? <ImageList
      sx={{ width: '30vw', height: '50vh', boxShadow: '0 0 0.1vw 0.1vh grey' }}
      variant="quilted"
      cols={4}
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
    </ImageList> : <p></p>
    }
  </>
  );
}

const itemData = [
  {
    img: "/img/IMG-3128.jpg",
    title: "medic5",
    rows: 2,
    cols: 2,
  },
  {
    img: "/img/medic4.jpg",
    title: "medic4",
    rows: 1,
    cols: 1,
  },
  {
    img: "/img/IMG_3132.jpg",
    title: "medic9",
    rows: 1,
    cols: 1,
  },

  {
    img: "/img/IMG-3129.jpg",
    title: "medic6",
    rows: 1,
    cols: 2,
  },
  {
    img: "/img/IMG-3130.jpg",
    title: "medic7",
    rows: 2,
    cols: 2,
  },
  {
    img: "/img/IMG_3131.jpg",
    title: "medic8",
    rows: 2,
    cols: 2,
  },
];

export default CabinetImages;
