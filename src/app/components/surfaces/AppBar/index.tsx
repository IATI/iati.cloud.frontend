import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import theme from 'app/theme';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import Grid from '@material-ui/core/Grid';

type Props = {
  label?: string;
  size?: string;
};

const BaseComponent = styled(props => <BaseAppBar {...props} />)`
  && {
    background-color: ${theme.palette.grey.greyBase};
  }
`;

const AppBar: React.FC<Props> = props => {
  return (
    <BaseComponent position="static" elevation={0} {...props}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {/* todo: define the client name in the env file */}
          <Typography variant="h6">OIPA</Typography>
          <Grid>
            <AppBarButton label="Welcome" url="/" />
            <AppBarButton label="Query builder" url="/querybuilder" />
            {/*<AppBarButton label="API documentation" link="" />*/}
            {/*<AppBarButton label="Github" />*/}
          </Grid>
        </Grid>
      </Toolbar>
    </BaseComponent>
  );
};

export default AppBar;
