//cc:api documentation module#; content - landing
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ApiList } from 'app/modules/Documentation/common/DocDetail/common/ApiBaseList';
import { useStoreState } from 'app/modules/Documentation/state/store';
import { Root } from 'app/modules/Documentation/state/RootModel';
import { HeaderH6 } from 'app/modules/Documentation/common/DocLanding/common/ui/HeaderH6';
import { css } from 'styled-components/macro';

export const DocLanding = () => {
  // @ts-ignore
  const data: Root = useStoreState((state) => state.data && state.data);
  const collection = data && data.collection;

  return (
    <>
      <Box width="100%" height="54px" />
      <Grid container>
        <Grid item md={11}>
          {/* todo: in due time the css attribute should be cleaned */}
          <Typography
            variant="h6"
            css={`
              && {
                line-height: 30px;
                font-weight: normal;
              }
            `}
          >
            <b>API Documentation</b>
          </Typography>
        </Grid>

        <Box width="100%" height="30px" />

        {/* description */}
        <Grid item md={12}>
          <Typography variant="body2">
            This API provides programmatic access to query IATI data. The API
            responses are available in JSON, XML and CSV format. The API is
            developed using the Django rest framework and also makes use of
            Solr, an open source enterprise search platform, written in Java.
          </Typography>
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------ */}
      <Box width="100%" height="74px" />
      {/* -------------------- */}
      {/* available endpoints */}
      <Grid container>
        <Grid item md={12}>
          <HeaderH6
            css={`
              && {
                margin-bottom: 8px;
              }
            `}
          >
            Available endpoints
          </HeaderH6>
        </Grid>
        <Grid item md={12}>
          {collection && (
            <ApiList info={collection.info} item={collection.item} />
          )}
        </Grid>
      </Grid>
      {/* ---------- */}
      <Box width="100%" height="50px" />
      {/* -------------------- */}
      {/* Exports */}
      <Grid container spacing={8}>
        <Grid item md={12}>
          <HeaderH6
            css={`
              && {
                margin-bottom: 24px;
              }
            `}
          >
            XML Export
          </HeaderH6>
          <Typography variant="body2">
            If you require XML format from the API, simply use the format
            &format=xml in your call.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <HeaderH6
            css={`
              && {
                margin-bottom: 24px;
              }
            `}
          >
            CSV Export
          </HeaderH6>
          <Typography variant="body2">
            If you require CSV format from the API, simply use the format
            &format=CSV in your call.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <HeaderH6
            css={`
              && {
                margin-bottom: 24px;
              }
            `}
          >
            XLS Export
          </HeaderH6>
          <Typography variant="body2">
            If you require XLS format from the API, simply use the format
            &format=XLS in your call.
          </Typography>
          <Box height="32px" width="100%" />
          <Typography variant="body2">
            Not all the API calls have multi format support.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
