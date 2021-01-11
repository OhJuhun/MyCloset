import React, {memo} from 'react';
import {Grid} from "@material-ui/core";

const AppFooter = () => {
  return (
      <Grid container justify="center" alignItems="center">
        이것은 Footer입니다.
      </Grid>
  );
};

export default memo(AppFooter);