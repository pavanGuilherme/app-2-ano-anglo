import { useState } from 'react'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import BottomNav from './components/BottomNav.jsx'
import Home from './screens/Home.jsx'
import Plants from './screens/Plants.jsx'
import Recipes from './screens/Recipes.jsx'
import Products from './screens/Products.jsx'
import Tips from './screens/Tips.jsx'
import Wellness from './screens/Wellness.jsx'
import Watering from './screens/Watering.jsx'
import Favorites from './screens/Favorites.jsx'
import Profile from './screens/Profile.jsx'
import './App.css'
import './screens/Screens.css'

const SCREENS = {
  home: Home,
  plants: Plants,
  recipes: Recipes,
  products: Products,
  tips: Tips,
  wellness: Wellness,
  watering: Watering,
  favorites: Favorites,
  profile: Profile,
}

function App() {
  const [activeScreen, setActiveScreen] = useState('home')

  const goHome = () => setActiveScreen('home')

  const ActiveScreen = SCREENS[activeScreen] ?? Home

  return (
    <FavoritesProvider>
      <div className="app-page">
        <div className="phone-frame">
          <div className="phone-notch" aria-hidden="true" />
          <main className="phone-body">
            <ActiveScreen onNavigate={setActiveScreen} onBack={goHome} />
          </main>
          <BottomNav activeScreen={activeScreen} onNavigate={setActiveScreen} />
        </div>
      </div>
    </FavoritesProvider>
  )
}

export default App
