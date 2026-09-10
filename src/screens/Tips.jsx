import Header from '../components/Header.jsx'
import Chip from '../components/Chip.jsx'
import { IconBulb } from '../components/Icons.jsx'
import { tips } from '../data/content.js'

export default function Tips({ onBack }) {
  return (
    <div className="screen">
      <Header title="Dicas de Saúde" icon={IconBulb} onBack={onBack} />
      <div className="screen-content">
        <p className="screen-intro">Pequenos hábitos do dia a dia fazem muito bem para a nossa saúde!</p>
        <ul className="chip-grid">
          {tips.map((tip) => (
            <Chip key={tip.id} tip={tip} />
          ))}
        </ul>
      </div>
    </div>
  )
}
