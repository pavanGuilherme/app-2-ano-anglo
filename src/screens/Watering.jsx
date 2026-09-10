import { useState } from 'react'
import Header from '../components/Header.jsx'
import { IconWateringCan, IconDroplet } from '../components/Icons.jsx'
import { wateringTips } from '../data/content.js'
import './Watering.css'

const STAGES = [
  { label: 'Semente' },
  { label: 'Brotinho' },
  { label: 'Muda' },
  { label: 'Flor' },
]

const MAX_STAGE = STAGES.length - 1

export default function Watering({ onBack }) {
  const [stage, setStage] = useState(0)
  const [waterCount, setWaterCount] = useState(0)

  const isMax = stage === MAX_STAGE

  const handleWater = () => {
    setWaterCount((count) => count + 1)
    setStage((current) => Math.min(current + 1, MAX_STAGE))
  }

  return (
    <div className="screen">
      <Header title="Hora de Regar" icon={IconWateringCan} onBack={onBack} />
      <div className="screen-content">
        <p className="screen-intro">
          As plantinhas precisam de água para crescer fortes. Toque no botão para regar e veja a plantinha
          crescer!
        </p>

        <div className="watering-game">
          <div className="watering-stage-label">{STAGES[stage].label}</div>

          <div className="watering-plant-wrap">
            {waterCount > 0 && (
              <IconDroplet key={waterCount} className="falling-droplet" size={26} />
            )}
            <svg
              viewBox="0 0 160 160"
              className="watering-plant-svg"
              role="img"
              aria-label={`Plantinha no estágio: ${STAGES[stage].label}`}
            >
              {stage >= 3 && (
                <g className="plant-part">
                  <circle cx="80" cy="42" r="12" fill="var(--accent-2)" />
                  <circle cx="68" cy="50" r="10" fill="var(--accent)" />
                  <circle cx="92" cy="50" r="10" fill="var(--accent)" />
                  <circle cx="80" cy="52" r="7" fill="#fff7e0" />
                </g>
              )}
              {stage >= 2 && (
                <g className="plant-part">
                  <path d="M80 100 C 55 92, 50 78, 58 68" fill="none" stroke="var(--leaf)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M80 100 C 105 92, 110 78, 102 68" fill="none" stroke="var(--leaf)" strokeWidth="5" strokeLinecap="round" />
                </g>
              )}
              {stage >= 1 && (
                <g className="plant-part">
                  <path
                    d={stage >= 2 ? 'M80 130 L80 60' : 'M80 130 L80 100'}
                    fill="none"
                    stroke="var(--leaf-deep)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path d="M80 118 C 65 112, 62 104, 66 96" fill="none" stroke="var(--leaf)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M80 118 C 95 112, 98 104, 94 96" fill="none" stroke="var(--leaf)" strokeWidth="5" strokeLinecap="round" />
                </g>
              )}
              {stage === 0 && <circle cx="80" cy="126" r="6" fill="var(--leaf-deep)" />}

              <path d="M46 130 L114 130 L106 156 L54 156 Z" fill="var(--accent)" />
              <path d="M46 130 L114 130 L111 140 L49 140 Z" fill="var(--leaf-deep)" />
              <ellipse cx="80" cy="130" rx="34" ry="6" fill="#6b4423" />
            </svg>
          </div>

          <button type="button" className="water-btn" onClick={handleWater} disabled={isMax}>
            {isMax ? 'A plantinha floresceu! 🎉' : 'Regar a plantinha 💧'}
          </button>
        </div>

        <div className="watering-tips">
          <h2>Dicas para regar direitinho</h2>
          <ul className="tip-list">
            {wateringTips.map((tip) => (
              <li key={tip} className="tip-list-item">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
