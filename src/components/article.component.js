import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ArrowDropDownCircle';
import { Col } from './grid.components';

const styles = theme => ({
  col: { margin: '0 auto' },
  card: {
    maxWidth: 400,
    margin: '0 auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  actions: { display: 'flex' },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: { marginRight: -8 },
  },
  expandOpen: { transform: 'rotate(180deg)' },
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
          <CardMedia className={classes.media} image="https://placekitten.com/300/300" title="Paella dish" />
          <CardContent>
            <Typography gutterBottom color="primary" align="justify" component="h3" variant="h5">
              Juan Carlo a la 1ère place du concours du Petit Paumé
            </Typography>
            <Typography align="justify" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, { [classes.expandOpen]: this.state.expanded })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon color="primary" fontSize="large" />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography align="justify" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Col>
    );
  }
}

ArticleCard.propTypes = { classes: PropTypes.shape({}).isRequired };

export default withStyles(styles)(ArticleCard);
