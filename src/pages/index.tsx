import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import Header from '../components/Header';
import styles from './index.module.css';
import { Suspense, lazy } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import BrowserOnly from '@docusaurus/BrowserOnly';
import TwoColumnsContent from '../components/TwoColumnsContent';
import CabinetImages from '../components/CabinetImages';
const HomeComponent = lazy(() => import("../components/Home"));

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
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
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Dermatologie des Minimes">
      <HomepageHeader />
      <main>
        <div style={{display: 'flex'}}>
      <Suspense fallback={<CircularProgress></CircularProgress>}>
         <BrowserOnly>{() => {
             return <HomeComponent></HomeComponent>;
         }}</BrowserOnly>
      </Suspense>
        <div style={{margin: '1.5em'}}>
        <Suspense fallback={<CircularProgress></CircularProgress>}>
         <BrowserOnly>{() => {
        return <CabinetImages></CabinetImages>
         }}</BrowserOnly>
         </Suspense>
        </div>
        </div>
      </main>
    </Layout>

  );
}
