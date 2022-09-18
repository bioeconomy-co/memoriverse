import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import countries from '../../data/countries.json';
// import Background from '../../assets/apply-background.jpg';

export default function Apply() {
  return (
    <Root>
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box>
            <Typography variant="h1">Apply</Typography>
            <Typography mb={2}>
              Please answer the questions below to apply
            </Typography>
            <Stack component="form" spacing={2} noValidate autoComplete="off">
              <TextField label="First name" fullWidth />

              <TextField label="Last name" fullWidth />

              <TextField label="Age" fullWidth />

              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup defaultValue="male" row>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>

              <Autocomplete
                options={countries.filter((c) => c.code !== 'ID')}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Country of residence"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />

              <TextField label="Phone number" fullWidth />

              <TextField label="Job title" fullWidth />

              <FormControl fullWidth>
                <InputLabel>Annual income</InputLabel>
                <Select label="Annual income" onChange={() => {}}>
                  <MenuItem value={0}>Less than 20k USD</MenuItem>
                  <MenuItem value={1}>20-30k USD</MenuItem>
                  <MenuItem value={2}>30-50k USD</MenuItem>
                  <MenuItem value={3}>75-100k USD</MenuItem>
                  <MenuItem value={4}>More than 100k USD</MenuItem>
                </Select>
              </FormControl>

              <Button href="/" variant="contained" size="large">
                Submit
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <div
            style={{
              backgroundSize: 'cover',
              position: 'absolute',
              inset: 0,
              objectFit: 'cover',
            }}
          ></div>
        </Grid>
      </Grid>
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  form: {
    width: 480,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  '.MuiGrid-item': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      inset: 'auto',
      width: '100%',
    },
    '&:nth-child(1)': {
      left: 0,
      overflowY: 'auto',
    },
    '&:nth-child(2)': {
      right: 0,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  },
}));
