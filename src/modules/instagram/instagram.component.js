import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Row, Col } from '../../components/grid.components';

const styles = {
  focusVisible: {},
  focusHighlight: { backgroundColor: 'transparent' },
};

class Instagram extends Component {
  componentDidMount = () => {
    const { initialized, accessToken, enabled, getInstagramFeed } = this.props;
    if (enabled && !initialized) {
      getInstagramFeed(accessToken);
    }
  };

  renderFeed = feed => {
    const { classes } = this.props;

    if (typeof feed === 'string') {
      return (
        <Col md={12} sm={12} xs={12}>
          Contenu Indisponible
        </Col>
      );
    }

    return feed.map(image => (
      <Col key={image.link} md={3} sm={4} xs={6}>
        <Card>
          <CardActionArea
            component="a"
            target="_blank"
            href={image.link}
            classes={{ focusHighlight: classes.focusHighlight }}
          >
            <CardMedia component="img" src={image.url} alt={image.url} />
          </CardActionArea>
        </Card>
      </Col>
    ));
  };

  render() {
    const { feed } = this.props;

    return feed ? (
      <div style={{ padding: '2.5%' }}>
        <Row spacing={24}>
          <Col md={12} sm={12} xs={12}>
            <Typography color="primary" align="center" gutterBottom variant="h5" component="h3">
              Notre Instagram
            </Typography>
          </Col>
          {this.renderFeed(feed)}
        </Row>
      </div>
    ) : null;
  }
}
// Instagram.defaultProps = {
//   feed: null,
// };

Instagram.propTypes = {
  getInstagramFeed: PropTypes.func.isRequired,
  initialized: PropTypes.bool.isRequired,
  accessToken: PropTypes.string.isRequired,
  feed: PropTypes.array.isRequired,
  enabled: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Instagram);
