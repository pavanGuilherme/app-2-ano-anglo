import Header from '../components/Header.jsx'
import ItemCard from '../components/ItemCard.jsx'
import { IconPulseHeart } from '../components/Icons.jsx'
import { wellnessItems } from '../data/content.js'

export default function Wellness({ onBack }) {
  return (
    <div className="screen">
      <Header title="Bem-estar e Cuidado" icon={IconPulseHeart} onBack={onBack} />
      <div className="screen-content">
        <p className="screen-intro">Cuidar do corpo e da mente todos os dias deixa a gente mais feliz e saudável.</p>
        <ul className="item-list">
          {wellnessItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
