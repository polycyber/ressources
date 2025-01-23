import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Advens',
    Svg: require('@site/static/img/logo_advens.png').default,
    description: (
      <>
        Advens est un leader français, indépendant et souverain en matière de Cybersécurité. Il est présent partout en France, ainsi qu'au Québec et en Europe. Sa mission est de protéger 24 heures sur 24, 365 jours par an, des organisations publiques et privées. Cette mission guide et anime Advens au quotidien. Mais ce n'est pas tout. Sa performance financière lui permet de soutenir et d'accélérer des projets à impact, au travers du fond de dotation « Advens for People And Planet ». Vous l'aurez compris, plus que des expert(e)s de la cyber, Advens recherche des collaborateurs et collaboratrices engagé(e)s et passionné(e)s.      
      </>
    ),
  },
  {
    title: 'Banque Nationale',
    Svg: require('@site/static/img/logo_bnc.webp').default,
    description: (
      <>
        Partenaire depuis plusieurs années, la Banque Nationale est un des meilleurs employeurs du Canada, proposant un environnement dynamique. Et la cybersécurité dans une banque,  c’est essentiel ! C’est pourquoi la BNC recrute énormément dans le domaine de la cyber allant du pentest à la cyberdéfense en passant par la gouvernance.
      </>
    ),
  },
  {
    title: 'CyberEco',
    Svg: require('@site/static/img/logo_cybereco.png').default,
    description: (
      <>
                    Fondé en 2018, Cybereco regroupe un nombre grandissant de membres, dont des chefs de
                    file du secteur des affaires et de l’enseignement supérieur au Québec et au Canada, réunis dans le
                    but d’accélérer le développement d’une main-d’œuvre de calibre mondial et de solutions
                    technologiques efficaces pour une économie prospère et sécuritaire. Nous organisons chaque année une
                    compétition CTF avec eux !      </>
    ),
  },
  {
    title: 'IMC2',
    Svg: require('@site/static/img/logo_imc2.webp').default,
    description: (
      <>
        L’Institut Multidisciplinaire en Cybersécurité et Cyberrésilience repose sur un partenariat entre Polytechnique Montréal, initiateur du projet, l’Université de Montréal et HEC Montréal.
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

export default function Sponsors(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Commanditaires'}
      description="Ressources proposées par PolyCyber">
      <main>
        <div className={clsx('container')}>
        <Heading as="h1" className="hero__title">
          Commanditaires
        </Heading>
        <p className="hero__subtitle">Nos activités sont réalisables grâce à leur généreux soutien financier</p>
        <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
        </div>
      </main>
    </Layout>)
};
