import Header from '../components/Header.jsx'
import ItemCard from '../components/ItemCard.jsx'
import { IconBottle } from '../components/Icons.jsx'
import { products } from '../data/content.js'

export default function Products({ onBack }) {
  return (
    <div className="screen">
      <Header title="Produtos Naturais" icon={IconBottle} onBack={onBack} />
      <div className="screen-content">
        <p className="screen-intro">
          Alguns alimentos e produtos naturais ajudam nosso corpo a ficar forte e saudável. Veja só!
        </p>
        <ul className="item-list">
          {products.map((product) => (
            <ItemCard key={product.id} item={product} />
          ))}
        </ul>
      </div>
    </div>
  )
}
