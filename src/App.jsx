import { useState } from 'react'

import Header from './components/Header'
import Card from './components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

  return (
    <>
      <Header />
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
    </>
  )
}

export default App    
