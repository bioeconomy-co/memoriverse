import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';

// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apply from './pages/Apply';

const Roboto = "'Roboto', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: Roboto,
    h1: {
      fontSize: 42,
      fontWeight: 700,
    },
    h2: {
      fontSize: 36,
      fontFamily: Roboto,
    },
    h3: {
      fontFamily: Roboto,
    },
    h4: {
      fontFamily: Roboto,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#202020',
        },
        svg: {
          maxWidth: '100%',
          maxHeight: '100%',
        },
      },
    },
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <CssBaseline />
          <Router>
            <div className="App">
              {/* <Navbar /> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apply" element={<Apply />} />
              </Routes>
            </div>
          </Router>
        </ParallaxProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
