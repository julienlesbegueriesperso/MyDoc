import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./Header.module.css";
import { MailOutline } from "@mui/icons-material";
import { useMermaidThemeConfig } from "@docusaurus/theme-mermaid/lib/client/index.js";
import Link from "@docusaurus/Link";


function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export function Header() {
    //   let parent = document.querySelector('.sticky')?.parentElement;
    // console.log('parent ' + parent)
    // while (parent) {
    //     const hasOverflow = getComputedStyle(parent).overflow;
    //     if (hasOverflow !== 'visible') {
    //         console.log(hasOverflow, parent);
    //     } else {
    //       console.log('no')
    //     }
    //     parent = parent.parentElement;
    // }

    const images = [
        {
            img: "/img/medic1.jpg",
            title: "medic1",
            rows: 2,
            cols: 2,
        },
        {
            img: "/img/medic2.jpg",
            title: "medic2",
        },
        {
            img: "/img/medic3.jpg",
            title: "medic3",
        },
    ];

    const theme = useMermaidThemeConfig();

    return (
        // <div className="container">
        // <div className="banner">
            <div style={{ display: "flex"}}>
                <img style={{ flex: 1}} src="/img/logo.svg" alt="logo dermatologie minimes" />
                <div style={{ flex: 5}}>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="https://goo.gl/maps/zuszCXTeG7M5vceS6">
                            <Typography variant="body1" >
                                <BusinessIcon></BusinessIcon>
                                132bis Bd Pierre et Marie Curie
                            </Typography>
                            <Typography variant="body1">31200 Toulouse</Typography>
                        </Link>
                    </div>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="mailto:dermatologieminimes@gmx.fr">
                            <Typography variant='body1'>
                                <MailOutline></MailOutline>
                                dermatologieminimes@gmx.fr</Typography>
                        </Link>
                    </div>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--primary button--lg"
                            to="tel:0970582602">
                            <Typography variant="body1">
                                <PhoneIcon></PhoneIcon>
                                 09 70 58 26 02
                            </Typography>
                        </Link>
                    </div>
                </div>
            <ImageList cols={3} variant="quilted" sx={{ width: '10%', height: '20vh', position: 'absolute', right:'2%' }}>
                {images.map((item) => (
                    <ImageListItem
                        key={item.img}
                        cols={item.cols || 1}
                        rows={item.rows || 1}
                    >
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        {/* </div> */}
        </div>
        
    );
}

export default Header;
