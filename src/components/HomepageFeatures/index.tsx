import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/old/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Macrogiciel a été conçu dès le départ pour être facilement installé
        et utilisé.
      </>
    ),
  },
  {
    title: 'Modulable',
    Svg: require('@site/static/img/old/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Macrogiciel can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'Pour tous',
    Svg: require('@site/static/img/old/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Macrogiciel lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
