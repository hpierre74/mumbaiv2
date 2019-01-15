import React, { memo } from 'react';
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

const Instagram = ({ getInstagramFeed, feed, enabled, classes }) => {
  if (!feed || !enabled) {
    getInstagramFeed();

    return null;
  }

  return (
    <div style={{ padding: '2.5%' }}>
      <Row spacing={24}>
        <Col md={12} sm={12} xs={12}>
          <Typography color="primary" align="center" gutterBottom variant="h5" component="h3">
            Notre Instagram
          </Typography>
        </Col>
        {feed.map(image => (
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
        ))}
      </Row>
    </div>
  );
};

Instagram.defaultProps = {
  feed: null,
};

Instagram.propTypes = {
  getInstagramFeed: PropTypes.func.isRequired,
  feed: PropTypes.array,
  classes: PropTypes.shape({}).isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default memo(withStyles(styles)(Instagram));
