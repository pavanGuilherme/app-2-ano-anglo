import { IconHome, IconLeaf, IconHeart, IconUser } from './Icons.jsx'

const TABS = [
  { id: 'home', label: 'Início', icon: IconHome, target: 'home' },
  { id: 'plants', label: 'Plantas', icon: IconLeaf, target: 'plants' },
  { id: 'favorites', label: 'Favoritos', icon: IconHeart, target: 'favorites' },
  { id: 'profile', label: 'Perfil', icon: IconUser, target: 'profile' },
]

export default function BottomNav({ activeScreen, onNavigate }) {
  return (
    <nav className="bottom-nav" aria-label="Navegação principal">
      {TABS.map(({ id, label, icon: Icon, target }) => {
        const isActive = activeScreen === target
        return (
          <button
            key={id}
            type="button"
            className={`nav-tab${isActive ? ' is-active' : ''}`}
            onClick={() => onNavigate(target)}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon className="nav-tab-icon" />
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
