import { connect } from 'react-redux';

import NavBar from './navbar.component';

const mapStateToProps = () =>
  /* { app: { config: { admin: { pages } } } }, */
  ({
    pages: {
      gestion: {
        keDueDFesScy1: 'bookings',
        kDevFvDzDFbvy2: 'schedule',
        kqFEXeDFy3: 'settings',
        kDVvcVSSoky4: 'mail',
      },
      edition: {
        kPevGdRJy1: 'book',
        keSVV55S0y2: 'contact',
        kDVSeyDC3: 'home',
        kZCeyEVE4: 'events',
        kACeFVRy5: 'menu',
      },
    },
  });

export default connect(mapStateToProps)(NavBar);
