import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { StoreProvider } from 'easy-peasy';
import { DocCallPreview } from 'app/modules/Documentation/common/DocDetail/common/DocCallPreview';
import { DocsideBar } from 'app/modules/Documentation/common/DocSideBar';
import { Header } from 'app/components/surfaces/Header';
import docStore from 'app/modules/Documentation/state/store';
import { DocumentationRoutes } from 'app/modules/Documentation/routes';
import useTitle from 'react-use/lib/useTitle';
import { getPostmanData } from 'app/modules/Documentation/state/service';

function DocumentationModule() {
  useTitle('IATI Datastore - Documentation');

  return (
    <StoreProvider store={docStore}>
      <Header />
      <Container maxWidth="lg">
        <Grid container direction="row">
          <Grid item md={4}>
            <DocsideBar />
          </Grid>
          <Grid item md={8}>
            <DocumentationRoutes />
          </Grid>
          {/*<Grid item md={4}>
            <DocCallPreview />
          </Grid>*/}
        </Grid>
      </Container>
    </StoreProvider>
  );
}

export default DocumentationModule;
