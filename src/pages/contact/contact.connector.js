import { connect } from 'react-redux';

import Contact from './contact.component';

const mapStateToProps = ({
  pageContent: {
    content: { adress, email, lat, lng, social, tel },
  },
}) => ({
  adress,
  email,
  tel,
  lat,
  lng,
  social,
});

export default connect(mapStateToProps)(Contact);
