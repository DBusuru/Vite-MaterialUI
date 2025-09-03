import { useState, useMemo } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';


function App() {
  const [mode, setMode] = useState('light')

  // Example card data
  const cards = [
    {
      image: '/static/images/cards/contemplative-reptile.jpg',
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.'
    },
    {
      image: '/static/images/cards/contemplative-reptile.jpg',
      title: 'Iguana',
      description: 'Iguanas are herbivorous lizards native to Central and South America.'
    },
    {
      image: '/static/images/cards/contemplative-reptile.jpg',
      title: 'Gecko',
      description: 'Geckos are small lizards found in warm climates throughout the world.'
    }
  ];

  // Responsive theme with color mode
  const theme = useMemo(() => {
    let t = createTheme({
      palette: {
        mode: mode === 'system' ? (window.matchMedia('(prefers-color-scheme: darkmodeicon)').matches ? 'dark' : 'light') : mode,
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#dc004e',
        },
      },
      typography: {
        fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
    });
    t = responsiveFontSizes(t);
    return t;
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} setMode={setMode} />
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cards.map((card, idx) => (
          <Card
            key={idx}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      {/* ...other content... */}
    </ThemeProvider>
  )
}

export default App
