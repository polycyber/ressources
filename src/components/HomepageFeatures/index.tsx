import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Layout from '@theme/Layout';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hacker Night',
    Svg: require('@site/static/img/polycyber.png').default,
    description: (
      <>
        Chaque semaine, nous nous réunissons pour résoudre des défis et échanger leurs connaissances.
      </>
    ),
    url: "https://ressources.polycyber.io/docs/ateliers/hacker-nights/",
  },
  {
    title: 'PolyPwn CTF 2025',
    Svg: require('@site/static/img/logo-polypwn-text.png').default,
    description: (
      <>
        PolyCyber organise son CTF annuel en mars 2025. Plus de 200 participants sont attendus.
      </>
    ),
    url: "https://pwn.polycyber.io/",
  },
  {
    title: 'Participation CTF',
    Svg: require('@site/static/img/polycyber.png').default,
    description: (
      <>
        Régulièrement, notre équipe participe à des compétitions <em>capture the flag</em>.
      </>
    ),
    url: "https://ressources.polycyber.io/blog",
  },
];

function Feature({ title, Svg, description, url }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
    <a href={url} className={styles.featureLink} target="_blank" rel="noopener noreferrer">
    <div className="text--center">
        <img className={styles.featureSvg} src={Svg} role='img'></img>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </a>
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}