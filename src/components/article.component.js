import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Col } from './grid.components';

const styles = theme => ({
  col: {
    margin: '0 auto',
  },
  card: {
    maxWidth: 400,
    margin: '0 auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class ArticleCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Col className={classes.col} sm={6} md={4} lg={3} xs={12}>
        <Card className={classes.card}>
          <CardHeader title="1ère place pour Juan Carlo" subheader="Concours Petit Paumé" />
          <CardMedia className={classes.media} image="https://placekitten.com/300/300" title="Paella dish" />
          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
              </Typography>
              <Typography align="justify" paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken,
                shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
                shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about
                10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Col>
    );
  }
}

ArticleCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ArticleCard);
