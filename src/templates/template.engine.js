import React, { lazy, Suspense } from 'react';
import Section from '../components/section.component';
import { Col } from '../components/grid.components';
import { CircularProgress } from '@material-ui/core';

const items = [
  {
    component: 'title',
    size: { xs: 12, sm: 12, md: 12, lg: 12 },
    value: 'Bar à Cocktails',
  },
  {
    component: 'article',
    name: 'Big Kitty',
    bordered: false,
    size: { xs: 12, sm: 12, md: 12, lg: 12 },
    children: [
      {
        component: 'media',
        title: 'cocktail title',
        img: 'https://placekitten.com/800/600',
      },
      {
        component: 'title',
        value: 'La qualité des cocktails, une priorité',
      },
      {
        component: 'p',
        value: 'Lorem Ipsum Dolor Ahmet...',
      },
    ],
  },
  {
    component: 'section',
    name: 'few articles',
    border: false,
    wrap: true,
    children: [
      {
        component: 'article',
        name: 'Nice kitty 1',
        bordered: false,
        wrap: true,
        size: { xs: 12, sm: 6, md: 4, lg: 3 },
        children: [
          {
            component: 'media',
            title: 'cocktail title',
            img: 'https://placekitten.com/300/300',
          },
          {
            component: 'title',
            value: 'La qualité des cocktails, une priorité',
          },
          {
            component: 'p',
            value: 'Lorem Ipsum Dolor Ahmet...',
          },
        ],
      },
      {
        component: 'article',
        name: 'Nice kitty 2',
        bordered: false,
        wrap: true,
        size: { xs: 12, sm: 6, md: 4, lg: 3 },
        children: [
          {
            component: 'media',
            title: 'cocktail title',
            img: 'https://placekitten.com/300/300',
          },
          {
            component: 'title',
            value: 'La qualité des cocktails, une priorité',
          },
          {
            component: 'p',
            value: 'Lorem Ipsum Dolor Ahmet...',
          },
        ],
      },
      {
        component: 'article',
        name: 'Nice kitty 3',
        bordered: false,
        wrap: true,
        size: { xs: 12, sm: 6, md: 4, lg: 3 },
        children: [
          {
            component: 'media',
            title: 'cocktail title',
            img: 'https://placekitten.com/300/300',
          },
          {
            component: 'title',
            value: 'La qualité des cocktails, une priorité',
          },
          {
            component: 'p',
            value: 'Lorem Ipsum Dolor Ahmet...',
          },
        ],
      },
    ],
  },
  {
    component: 'media',
    size: { xs: 12, sm: 12, md: 12, lg: 12 },
    title: 'cocktail title',
    img: 'https://placekitten.com/800/600',
  },
];
export const getComponent = data => {
  switch (data.component) {
    case 'title': {
      const Typography = lazy(() => import('@material-ui/core/Typography'));
      return (
        <Col {...data.size}>
          <Typography key={data.value} gutterBottom color="primary" align="justify" component="h3" variant="h5">
            {data.value}
          </Typography>
        </Col>
      );
    }
    case 'section': {
      const Section = lazy(() => import('./lib/section'));
      return <Section key={data.name} size={data.size} data={data.children} />;
    }
    case 'article': {
      const Article = lazy(() => import('./lib/article'));
      return <Article key={data.name} size={data.size} data={data.children} />;
    }
    case 'media': {
      const CardMedia = lazy(() => import('@material-ui/core/CardMedia'));
      return <img src={data.img} alt={data.title} />;
    }
    case 'p': {
      const Typography = lazy(() => import('@material-ui/core/Typography'));
      return <Typography component="p">{data.value}</Typography>;
    }
    default:
      return null;
  }
};
// const templates = {
//   types: ['article', 'section', 'list'],
//   variants: ['column', 'wrap'],
// };

export function renderTemplate() {
  return (
    <Section>
      <Suspense fallback={<CircularProgress />}>{Object.values(items).map(item => getComponent(item))}</Suspense>
    </Section>
  );
}
