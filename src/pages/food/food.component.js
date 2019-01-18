import React from 'react';
import Section from '../../components/section.component';
import SubSection from '../../components/subsection.component';
import Article from '../../components/article.component';
import Menu from '../../components/menu.component';

const Food = () => (
  <Section>
    <SubSection title="Food Menu">
      <Menu src="https://firebasestorage.googleapis.com/v0/b/mumbai-redux.appspot.com/o/public%2Fmenus%2Fcocktail-menu.webp?alt=media&token=6642b832-6237-49bc-a037-305c658645f9" />
    </SubSection>
    <SubSection title="Les Thalis">
      <Article />

      <Article />
    </SubSection>
  </Section>
);

export default Food;
