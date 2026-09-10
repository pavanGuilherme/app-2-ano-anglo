import Header from '../components/Header.jsx'
import ItemCard from '../components/ItemCard.jsx'
import RecipeCard from '../components/RecipeCard.jsx'
import { IconHeart } from '../components/Icons.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function Favorites({ onBack }) {
  const { favorites } = useFavorites()
  const items = Object.values(favorites)

  return (
    <div className="screen">
      <Header title="Favoritos" icon={IconHeart} onBack={onBack} />
      <div className="screen-content">
        {items.length === 0 ? (
          <div className="empty-state">
            <span className="empty-state-emoji" aria-hidden="true">
              💚
            </span>
            <p>Você ainda não favoritou nada. Toque no coraçãozinho dos itens que você mais gostar!</p>
          </div>
        ) : (
          <ul className="favorites-list">
            {items.map((item) =>
              item.category === 'Receitas Naturais' ? (
                <RecipeCard key={item.id} recipe={item} />
              ) : (
                <ItemCard key={item.id} item={item} />
              ),
            )}
          </ul>
        )}
      </div>
    </div>
  )
}
