import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{display: 'flex'}}>
        <div className={styles.buttons}>
          <Link

            className="button button--secondary button--lg"
            to="/docs/intro">
            Intro to my doc
          </Link>
          </div>
          <div className={styles.buttons}>
          <Link
          
            className="button button--secondary button--lg"
            to="/my-page">
            My React Page
          </Link>
        </div>
        </div>
      </div>
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
        <br/>
        <div className={styles.buttons}>
            <Link className="button button--primary button--lg"
              onClick={() => alert('test')} 
            >Coucou</Link>
        </div>
          
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
