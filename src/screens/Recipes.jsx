import Header from '../components/Header.jsx'
import RecipeCard from '../components/RecipeCard.jsx'
import WarningBox from '../components/WarningBox.jsx'
import { IconBook } from '../components/Icons.jsx'
import { recipes } from '../data/content.js'

export default function Recipes({ onBack }) {
  return (
    <div className="screen">
      <Header title="Receitas Naturais" icon={IconBook} onBack={onBack} />
      <div className="screen-content">
        <p className="screen-intro">
          Estas receitinhas usam plantas para ajudar a nossa saúde. Mas cuidado: só um adulto pode preparar!
        </p>
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ul>
        <WarningBox>Peça sempre ajuda de um adulto para preparar e usar.</WarningBox>
      </div>
    </div>
  )
}
