import { IconHeart } from './Icons.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function HeartButton({ item }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(item.id)

  return (
    <button
      type="button"
      className={`heart-btn${active ? ' is-active' : ''}`}
      onClick={() => toggleFavorite(item)}
      aria-pressed={active}
      aria-label={active ? `Remover ${item.title} dos favoritos` : `Favoritar ${item.title}`}
    >
      <IconHeart filled={active} />
    </button>
  )
}
