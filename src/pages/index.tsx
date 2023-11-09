import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Header from '../components/Header';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* <div className="container"> */}
        <Heading as="h1" className="hero__title">
          {/* <img src="img/logo.svg"></img> */}
        <Header></Header>
        </Heading>
       
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <br/>
        <div className={styles.buttons}>
            <Link className="button button--primary button--lg"
              onClick={() => alert('test')} 
            >Coucou</Link>
        </div>
           */}
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
