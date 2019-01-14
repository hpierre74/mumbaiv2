import React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

import CircularProgress from '@material-ui/core/CircularProgress';

const muiTheme = createMuiTheme({
  typography: { useNextVariants: true },
  palette: {
    type: 'light',
    primary: indigo,
    secondary: red,
    error: red,
    default: blue,
  },
});

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AsyncAdmin: () => <CircularProgress /> };
  }

  componentDidMount = async () => {
    try {
      const module = await import('../../modules/admin/admin.connector');
      const AsyncAdmin = module.default;
      this.setState({ AsyncAdmin });
    } catch (e) {
      this.setState({ AsyncAdmin: () => <p>Houston we ve got a problem</p> });
    }
  };

  render() {
    const { AsyncAdmin } = this.state;

    return (
      <MuiThemeProvider theme={muiTheme}>
        <AsyncAdmin />
      </MuiThemeProvider>
    );
  }
}

export default AdminPage;
