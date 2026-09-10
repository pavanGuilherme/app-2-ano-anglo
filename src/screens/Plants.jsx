import Header from '../components/Header.jsx'
import ItemCard from '../components/ItemCard.jsx'
import WarningBox from '../components/WarningBox.jsx'
import { IconLeaf } from '../components/Icons.jsx'
import { plants } from '../data/content.js'

export default function Plants({ onBack }) {
  return (
    <div className="screen">
      <Header title="Plantas Medicinais" icon={IconLeaf} onBack={onBack} />
      <div className="screen-content">
        <p className="screen-intro">
          A natureza nos dá plantinhas especiais que ajudam a cuidar da nossa saúde. Conheça algumas delas!
        </p>
        <ul className="item-list">
          {plants.map((plant) => (
            <ItemCard key={plant.id} item={plant} />
          ))}
        </ul>
        <WarningBox>Só um adulto pode preparar e usar as plantas medicinais.</WarningBox>
      </div>
    </div>
  )
}
