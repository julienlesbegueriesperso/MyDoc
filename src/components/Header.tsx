import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./Header.module.css";
import { MailOutline } from "@mui/icons-material";
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
            img: "/img/cabinet/cab-7101.jpg",
            title: "medic1",
            rows: 2,
            cols: 2,
        },
        {
            img: "/img/cabinet/cab-7075b.jpg",
            title: "medic2",
        },
        {
            img: "/img/cabinet/cab-7034.jpg",
            title: "medic3"
        },
    ];


    return (<>
        {/* // <div className="container"> */}
        {/* // <div className={styles["banner"]}>
            {/* <div style={{display: "inline-block"}}> */}
            
            <img style={{ flex: 0.1, width: "12vw", minWidth: '200pt' }}  src="/img/logo.svg" alt="logo dermatologie minimes" />
            {/* // </div>
            // <div>
            // <span style={{ flex: 4 }}></span>
            // </div> */}
            <div style={{ flex: 5}}>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="https://maps.app.goo.gl/yJaN4Jt31aR9e84L7">
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
                        to="tel:0162150816">
                        <Typography variant="body1">
                            <PhoneIcon></PhoneIcon>
                            01 62 15 08 16 (télé secrétariat)
                        </Typography>
                    </Link>
                </div>
            </div>
            
            <ImageList cols={3} variant="quilted" sx={{ alignContent:'center', alignItems:'center', height: '150pt', width: '150pt'}}>
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
            <p style={{flex:1}}></p>
        
        </>
    );
}

export default Header;
