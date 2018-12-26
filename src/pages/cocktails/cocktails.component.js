import React from 'react';
import Section from '../../components/section.component';
import SubSection from '../../components/subsection.component';
import Article from '../../components/article.component';

const Cocktails = () => (
  <Section title="Bar à Cocktails">
    <SubSection title="Menu">
      <Article />
      <Article />
      <Article />
      <Article />
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
