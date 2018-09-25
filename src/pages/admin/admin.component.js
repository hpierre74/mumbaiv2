import React from 'react';
import styled from 'styled-components';

import { PageWrapper } from '../../components/wrapper.components';
import NavBar from '../../modules/admin/nav/navbar.connector';
import Ad from '../../modules/admin/admin.component';

const AdminWrapper = styled(PageWrapper)`
  display: flex;
  width: 100vw;
  height: 100vh;

  background: rgba(255, 255, 255, 1);

  color: black;
`;

const AdminPage = () => (
  <AdminWrapper>
    <NavBar />
    <Ad />
  </AdminWrapper>
);

export default AdminPage;
