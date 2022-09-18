import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import HeroBanner from './HeroBanner';

export default function Home() {
  return (
    <Root>
      <HeroBanner />
    </Root>
  );
}

const Root = styled(Box)({});
