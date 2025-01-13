import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Layout from '@theme/Layout';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hacker Night',
    Svg: require('@site/static/img/polycyber.png').default,
    description: (
      <>
        Chaque semaine, nos membres se réunissent pour échanger leurs connaissances.
      </>
    ),
  },
  {
    title: 'PolyPwn CTF 2025',
    Svg: require('@site/static/img/logo-polypwn-text.png').default,
    description: (
      <>
        PolyCyber organise son CTF annuel en mars 2025. Plus de 200 participants sont attendus.
      </>
    ),
  },
  {
    title: 'Participation CTF',
    Svg: require('@site/static/img/polycyber.png').default,
    description: (
      <>
        Régulièrement, notre équipe CTF participe à des compétitions CTF.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} role='img'></img></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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