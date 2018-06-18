import React from 'react';
import { Grid } from 'semantic-ui-react';

const Container = ({ children }) => (
  <Grid mobile={16} tablet={8} computer={4} container>
    {children}
  </Grid>
);

export default Container;