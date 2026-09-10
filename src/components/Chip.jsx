export default function Chip({ tip }) {
  return (
    <li className="chip">
      <span className="chip-emoji" aria-hidden="true">
        {tip.emoji}
      </span>
      <span className="chip-title">{tip.title}</span>
      <span className="chip-desc">{tip.description}</span>
    </li>
  )
}
