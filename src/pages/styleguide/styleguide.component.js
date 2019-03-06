import React, { lazy, Suspense } from 'react';
import items from './page-fixture';
import { CircularProgress, Button, TextField } from '@material-ui/core';
import StringForm from '../../templates/forms/string.form';

export const getComponent = (index, item) => {
  const Component = lazy(() => import(`../../templates/lib/${item.component}.template`));

  return <Component key={`${item.component}-${index}`} {...item} />;
};

export const getTemplate = items => {
  return Object.values(items).map((item, index) => getComponent(index, item));
};

const components = {
  section: {
    component: 'section',
    spacing: 24,
    justify: 'center',
    alignContent: 'center',
    alignItems: 'center',
    style: { marginTop: '10%' },
    data: [],
  },
  article: {
    component: 'article',
    justify: 'center',
    alignContent: 'center',
    alignItems: 'stretch',
    container: true,
    spacing: 16,
    sizes: { xs: 12, sm: 12, md: 10, lg: 10 },
    data: [],
  },
  block: {
    component: 'block',
    sizes: { xs: 12, sm: 12, md: 7, lg: 8 },
    data: [],
  },
  title: {
    component: 'title',
    gutterBottom: true,
    color: 'primary',
    align: 'right',
    sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
    data: 'Lorem Ipsum',
  },
  imageTile: {
    actionProps: { component: 'div' },
    alt: 'halte la',
    height: '100%',
    width: '100%',
    sizes: { xs: 12, sm: 12, md: 4, lg: 4 },
    component: 'imageTile',
    data: 'https://placekitten.com/300/300',
  },
  text: {
    component: 'text',
    align: 'justify',
    sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
    data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,.`,
  },
  divider: {
    component: 'divider',
    sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
    margin: '25px',
  },
};

// const getFormForItem = item => {
//   switch (typeof item.data) {
//     case 'array':
//       switch (item.type) {
//         case 'article':
//         case 'section':
//       }

//     case 'string':
//       return (
//         <TextField
//           name={item.name}
//           label="Enter some Text"
//           multiline={this.state.value.length > 100}
//           value={this.state.value}
//           onChange={this.handleInputChange}
//           rows="4"
//           margin="normal"
//           fullWidth
//         />
//       );
//   }
// };

export default function renderTemplate() {
  return (
    <div>
      <div style={{ margin: '5%' }}>
        <StringForm name="name" id="name" path="/lol" setter={(path, state) => console.log(path, state)} />
      </div>
      <Suspense fallback={<CircularProgress />}>{getTemplate(items)}</Suspense>;
    </div>
  );
}
