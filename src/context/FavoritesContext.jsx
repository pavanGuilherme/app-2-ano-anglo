import { createContext, useContext, useMemo, useState } from 'react'

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState({})

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const next = { ...prev }
      if (next[item.id]) {
        delete next[item.id]
      } else {
        next[item.id] = item
      }
      return next
    })
  }

  const isFavorite = (id) => Boolean(favorites[id])

  const value = useMemo(
    () => ({ favorites, toggleFavorite, isFavorite }),
    [favorites],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider')
  }
  return ctx
}
