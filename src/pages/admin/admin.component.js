import React from 'react';
import styled from 'styled-components';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

import { CircularProgress } from '@material-ui/core';
import { PageWrapper } from '../../components/wrapper.components';

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    primary: indigo,
    secondary: red,
    error: red,
    default: blue,
  },
});

const AdminWrapper = styled(PageWrapper)`
  display: flex;
  width: 100vw;
  height: 100vh;

  background: rgba(255, 255, 255, 1);

  color: black;
`;

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AsyncAdmin: () => <CircularProgress />,
    };
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
        <AdminWrapper>
          <AsyncAdmin />
        </AdminWrapper>
      </MuiThemeProvider>
    );
  }
}

export default AdminPage;
