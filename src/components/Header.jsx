import { IconArrowLeft } from './Icons.jsx'

export default function Header({ title, icon: Icon, onBack }) {
  return (
    <header className="app-header">
      {onBack ? (
        <button type="button" className="header-back" onClick={onBack} aria-label="Voltar para o Início">
          <IconArrowLeft />
        </button>
      ) : (
        <span className="header-spacer" aria-hidden="true" />
      )}
      <h1 className="header-title">
        {Icon ? <Icon className="header-icon" /> : null}
        <span>{title}</span>
      </h1>
      <span className="header-spacer" aria-hidden="true" />
    </header>
  )
}
