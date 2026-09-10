import Header from '../components/Header.jsx'
import { IconUser } from '../components/Icons.jsx'

export default function Profile({ onBack }) {
  return (
    <div className="screen">
      <Header title="Perfil" icon={IconUser} onBack={onBack} />
      <div className="screen-content">
        <div className="profile-card">
          <h2>Sobre o Projeto</h2>

          <dl className="profile-fields">
            <div className="profile-field">
              <dt>Tema</dt>
              <dd>Minha Farmácia Natural</dd>
            </div>
            <div className="profile-field">
              <dt>Turma</dt>
              <dd>2º Ano do Ensino Fundamental</dd>
            </div>
          </dl>

          <div className="profile-field profile-field-block">
            <dt>Objetivo</dt>
            <dd>
              Mostrar, de um jeito divertido, como plantas, receitas e bons hábitos podem ajudar a cuidar
              da nossa saúde de forma natural.
            </dd>
          </div>

          {/* TODO: adicionar aqui o nome do aluno/aluna e o nome da escola */}
        </div>
      </div>
    </div>
  )
}
