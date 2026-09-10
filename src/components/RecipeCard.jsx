import HeartButton from './HeartButton.jsx'

export default function RecipeCard({ recipe }) {
  return (
    <li className="recipe-card">
      <div className="recipe-card-head">
        <h3 className="recipe-card-title">{recipe.title}</h3>
        <HeartButton item={recipe} />
      </div>
      <dl className="recipe-card-list">
        <div className="recipe-card-row">
          <dt>Para que serve</dt>
          <dd>{recipe.purpose}</dd>
        </div>
        <div className="recipe-card-row">
          <dt>Ingredientes</dt>
          <dd>{recipe.ingredients}</dd>
        </div>
        <div className="recipe-card-row">
          <dt>Como fazer</dt>
          <dd>{recipe.steps}</dd>
        </div>
        <div className="recipe-card-row">
          <dt>Uso</dt>
          <dd>{recipe.usage}</dd>
        </div>
      </dl>
    </li>
  )
}
