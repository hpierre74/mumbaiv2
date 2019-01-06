import React from 'react';
import Section from '../../components/section.component';
import SubSection from '../../components/subsection.component';
import Article from '../../components/article.component';
import Menu from '../../components/menu.component';

const Cocktails = () => (
  <Section>
    <SubSection title="Cocktails Menu">
      <Menu src="https://placekitten.com/360/1200" />
    </SubSection>
    <SubSection title="Compétitions">
      <Article />
      <Article />
      <Article />
      <Article />
    </SubSection>
  </Section>
);

export default Cocktails;
