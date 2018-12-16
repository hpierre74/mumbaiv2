import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from '../../components/grid.components';

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 10%;
  @media (max-width: 650px) {
    padding: 12.5%;
  }
`;

const Presentation = props => {
  const {
    presentation: { concept, food },
  } = props;

  return (
    <Wrapper>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col sm={10} xs={10} md={10}>
          <Typography gutterBottom variant="h5" component="h3" align="justify">
            {concept}
          </Typography>
          <Typography align="justify">{food}</Typography>
        </Col>
      </Row>
    </Wrapper>
  );
};

Presentation.defaultProps = {
  presentation: {
    concept: null,
    food: null,
  },
};

Presentation.propTypes = {
  presentation: PropTypes.shape({
    concept: PropTypes.string,
    food: PropTypes.string,
  }),
};

export default Presentation;
