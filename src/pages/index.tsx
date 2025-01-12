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
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/introduction">
            Let's Go!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Ressources proposées par PolyCyber">
      <HomepageHeader />
      <div className={clsx('container hero--primary', styles.heroBanner)}>
        <Heading as="h2">
            Nos commanditaires
          </Heading>
        <p className="hero__subtitle">Nos activités sont réalisables grâce à leur généreux financier!</p>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
