import React from 'react';
import Section from '../../components/section.component';
import SubSection from '../../components/subsection.component';
import Article from '../../components/article.component';
import Menu from '../../components/menu.component';
import { withStyles } from '@material-ui/core/styles';

import FlexBox from '../../components/atoms/flex.component';

const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  img: {
    [theme.breakpoints.up('sm')]: {
      flex: '0.4 0',
    },
    margin: '0 auto',
  },
  textWrapper: {
    [theme.breakpoints.up('sm')]: {
      flex: '0.6 0',
    },
    textAlign: 'justify',
    padding: '5%',
  },
  list: {
    listStyle: 'none',
  },
});

const Food = props => {
  const { classes } = props;
  return (
    <Section>
      <SubSection title="Food Menu">
        <Menu src="https://firebasestorage.googleapis.com/v0/b/mumbai-redux.appspot.com/o/public%2Fmenus%2Fcocktail-menu.webp?alt=media&token=6642b832-6237-49bc-a037-305c658645f9" />
      </SubSection>
      <SubSection title="Les Thalis">
        <FlexBox>
          {/* <div className={classes.container}> */}
          <img className={classes.img} src="https://placekitten.com/300/300" alt="thali img" />
          <div className={classes.textWrapper}>
            <h3>Plusieurs recettes à découvrir</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <ul className={classes.list}>
              <li>Grillades au Tandoor</li>
              <li>Curry de la semaine</li>
              <li>Salades originales</li>
              <li>Beignets de légumes</li>
            </ul>
          </div>
        </FlexBox>
        {/* </div> */}
      </SubSection>
    </Section>
  );
};

export default withStyles(styles)(Food);
