import Header from '../components/Header.jsx'
import MenuButton from '../components/MenuButton.jsx'
import {
  IconLeaf,
  IconBook,
  IconBottle,
  IconBulb,
  IconPulseHeart,
  IconWateringCan,
  IconSparkle,
} from '../components/Icons.jsx'

const MENU = [
  { label: 'Plantas Medicinais', icon: IconLeaf, target: 'plants' },
  { label: 'Receitas Naturais', icon: IconBook, target: 'recipes' },
  { label: 'Produtos Naturais', icon: IconBottle, target: 'products' },
  { label: 'Dicas de Saúde', icon: IconBulb, target: 'tips' },
  { label: 'Bem-estar e Cuidado', icon: IconPulseHeart, target: 'wellness' },
  { label: 'Hora de Regar as Plantas', icon: IconWateringCan, target: 'watering' },
]

export default function Home({ onNavigate }) {
  return (
    <div className="screen home-screen">
      <Header title="Minha Farmácia Natural" icon={IconSparkle} />
      <div className="screen-content">
        <div className="home-welcome">
          <h2>Olá! 🌻</h2>
          <p>Vem descobrir os segredos da nossa Farmácia Natural!</p>
        </div>
        <div className="home-grid">
          {MENU.map((item) => (
            <MenuButton
              key={item.target}
              label={item.label}
              icon={item.icon}
              onClick={() => onNavigate(item.target)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
