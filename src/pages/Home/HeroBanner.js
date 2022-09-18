import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import styled from '@emotion/styled';

import { ParallaxBanner } from 'react-scroll-parallax';

import HeroBackground from '../../assets/hero-background.png';

export default function HeroBanner() {
  const background = {
    image: HeroBackground,
    translateY: [10, 80],
    // opacity: [0.9, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 50],
    opacity: [1, 0],
    // scale: [1, 0.9, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          inset: 0,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h1" sx={{ fontSize: 60, fontWeight: 700, color: '#4e6885' }}>
          Coming in 2023
          </Typography>
          {/* <Button href="/apply" variant="contained" size="large" sx={{ mt: 2 }}>
            Apply now
          </Button> */}
        </Container>
      </Box>
    ),
  };

  // const gradientOverlay = {
  //   opacity: [1, 0.8],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: <Overlay />,
  // };

  return (
    <Root>
      <ParallaxBanner
        layers={[background, headline]}
        style={{ height: '100%' }}
      />
    </Root>
  );
}

const Root = styled(Box)({
  height: '100vh',
});

// const Overlay = styled(Box)(`
//   position: absolute;
//   inset: 0;
//   opacity: 0.5;
//   background: #236AAF;
//   background: -webkit-linear-gradient(top left, #236AAF, #9232B9);
//   background: -moz-linear-gradient(top left, #236AAF, #9232B9);
//   background: linear-gradient(to bottom right, #236AAF, #9232B9);
// `);
