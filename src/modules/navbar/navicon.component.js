import React from 'react';
import PropTypes from 'prop-types';

import BookIcon from '@material-ui/icons/Book';
import CocktailIcon from '@material-ui/icons/LocalBar';
import FoodIcon from '@material-ui/icons/Restaurant';
import ContactIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';

const iconVariants = {
  home: HomeIcon,
  book: BookIcon,
  cocktails: CocktailIcon,
  food: FoodIcon,
  contact: ContactIcon,
};

const NavIcon = props => {
  const Icon = iconVariants[props.name];

  return <Icon />;
};

NavIcon.propTypes = {
  name: PropTypes.string.isRequired,
};
export default NavIcon;
