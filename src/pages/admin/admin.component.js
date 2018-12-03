import React from 'react';
import styled from 'styled-components';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

import { PageWrapper } from '../../components/wrapper.components';
import Ad from '../../modules/admin/admin.connector';

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

const AdminPage = () => (
  <MuiThemeProvider theme={muiTheme}>
    <AdminWrapper>
      <Ad />
    </AdminWrapper>
  </MuiThemeProvider>
);

export default AdminPage;
