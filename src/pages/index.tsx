import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
// import { ConsentBanner, ConsentProvider } from 'react-hook-consent';
// import 'react-hook-consent/dist/styles/style.css';
// import { useConsent } from 'react-hook-consent';

import Header from '../components/Header';
import styles from './index.module.css';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Box, CircularProgress, ThemeProvider, Typography, createTheme } from '@mui/material';
import BrowserOnly from '@docusaurus/BrowserOnly';
// import TwoColumnsContent from '../components/TwoColumnsContent';
import CabinetImages from '../components/CabinetImages';
import CookieConsent from 'react-cookie-consent';
const HomeComponent = lazy(() => import("../components/Home"));

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()

  return (<>
     <header className={clsx('hero hero--primary', styles.heroBanner)}>

{/* <img 
  style={{ flex: 0.1, width: "12vw", minWidth: '200pt' }}
  src="/img/logo.svg" alt="logo dermatologie minimes" /> */}
  <Header></Header>

      {/* <div className="container"> */}
        {/* <Heading as='h4' className="hero__title"> */}
          {/* <img src="img/logo.svg"></img> */}
        {/* <Header></Header> */}
        {/* </Heading> */}
       
        {/* <div className={styles.buttons}>
          <Link

            className="button button--secondary button--lg"
            to="/components/Home">
            Accueil
          </Link>
          </div>
          <div className={styles.buttons}>
          <Link
          
            className="button button--secondary button--lg"
            to="/my-page">
            My React Page
          </Link>
        </div> */}
    </header>
    </>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  // const { consent, setConsent, isBannerVisible, toggleBanner, isDetailsVisible, toggleDetails } = useConsent();


  const theme = createTheme({
    typography: {
      fontFamily: [
        // '-apple-system',
        // 'BlinkMacSystemFont',
        // '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <Layout
      title={`${siteConfig.title}`}
      description="Dermatologie des Minimes">
      <HomepageHeader />
      <main>
        <div className={styles['frame']}>
      <div className={styles['left']}>
      {/* <Suspense fallback={<CircularProgress></CircularProgress>}> */}
         <BrowserOnly>{() => {
             return <HomeComponent></HomeComponent>;
         }}</BrowserOnly>
      {/* </Suspense> */}
      </div>
        <div style={{margin: '1.5em', minWidth: '300pt'}} className={styles['right']}>
        {/* <Suspense fallback={<CircularProgress></CircularProgress>}> */}
         <BrowserOnly>{() => {
        return <CabinetImages></CabinetImages>
         }}</BrowserOnly>
         {/* </Suspense> */}
        </div>
        </div>

      </main>
      
      <CookieConsent
  location="bottom"
  buttonText="J'ai compris"
  cookieName="sampleCookie"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  Ce site serait peut-être amené à stocker des cookies ... TODO
</CookieConsent>
    </Layout>
    </ThemeProvider>
    
    
    {/* <BrowserOnly>{() => {
        return  <>{isBannerVisible && <ConsentBanner
    settings={{ hidden: false, label: 'More', modal: { title: 'Modal title' } }}
    decline={{ label: 'No' }}
    approve={{ label: 'Yes'}}
    >
     <>
        Can we use cookies and external services according to our <a href="test">privacy policy</a> to
        improve the browsing experience?
    </>
</ConsentBanner>}
  <p/>
</>
}}</BrowserOnly> */}
</>

  );
}
