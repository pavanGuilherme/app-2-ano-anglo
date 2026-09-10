import HeartButton from './HeartButton.jsx'

export default function ItemCard({ item }) {
  return (
    <li className="item-card">
      <span className="item-card-emoji" aria-hidden="true">
        {item.emoji}
      </span>
      <div className="item-card-body">
        <h3 className="item-card-title">{item.title}</h3>
        <p className="item-card-desc">{item.description}</p>
      </div>
      <HeartButton item={item} />
    </li>
  )
}
