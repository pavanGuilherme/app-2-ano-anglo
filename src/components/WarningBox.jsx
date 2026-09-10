export default function WarningBox({ children }) {
  return (
    <p className="warning-box" role="note">
      <span aria-hidden="true">⚠️</span> {children}
    </p>
  )
}
