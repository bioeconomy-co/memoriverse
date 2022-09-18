import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

const menuItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Services',
    link: '/services',
  },
  {
    text: 'Contact Us',
    link: '/contact-us',
  },
];

export default function Navbar() {
  return (
    <Root>
      <Container>
        <Stack direction="row" justifyContent="flex-end" spacing={2} py={2}>
          {menuItems.map((m) => (
            <Link key={m.text} to={m.link}>
              {m.text}
            </Link>
          ))}
        </Stack>
      </Container>
    </Root>
  );
}

const Root = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  zIndex: 100,
  a: {
    color: '#fff',
    textDecoration: 'none',
  },
});
