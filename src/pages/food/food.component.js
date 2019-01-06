import React from 'react';
import Section from '../../components/section.component';
import SubSection from '../../components/subsection.component';
import Article from '../../components/article.component';
import Menu from '../../components/menu.component';

const Food = () => (
  <Section title="Une cuisine de partage">
    <SubSection title="Menu">
      <Menu src="https://placekitten.com/360/500" />
    </SubSection>
    <SubSection title="Les Thalis">
      <Article />

      <Article />
    </SubSection>
  </Section>
);

export default Food;
