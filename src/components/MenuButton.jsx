export default function MenuButton({ label, icon: Icon, onClick }) {
  return (
    <button type="button" className="menu-btn" onClick={onClick}>
      <span className="menu-btn-icon">
        <Icon size={30} />
      </span>
      <span className="menu-btn-label">{label}</span>
    </button>
  )
}
