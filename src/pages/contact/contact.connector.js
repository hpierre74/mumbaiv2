import { connect } from 'react-redux';

import Contact from './contact.component';

const mapStateToProps = ({
  pageContent: {
    content: { address, email, lat, lng, social, tel },
  },
}) => ({
  address,
  email,
  tel,
  lat,
  lng,
  social,
});

export default connect(mapStateToProps)(Contact);
