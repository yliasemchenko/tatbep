import { geoPoints } from '../data/projects'
import { Todo } from './ui'

const countries = [...new Set(geoPoints.map((p) => p.country))]

function GeoList({ activeName = null, onHover, onSelect }) {
  return (
    <div className="geo__list">
      {countries.map((country) => {
        const points = geoPoints.filter((p) => p.country === country)
        return (
          <div key={country} className="geo__country">
            <h4 className="cap cap--blue">
              <span>{country}</span>
              <span>{points.length}</span>
            </h4>
            <ul>
              {points.map((p) => (
                <li key={p.name} className={p.name === activeName ? 'is-active' : ''}>
                  <button
                    type="button"
                    className="geo__item"
                    onMouseEnter={() => onHover?.(p.name)}
                    onMouseLeave={() => onHover?.(null)}
                    onFocus={() => onHover?.(p.name)}
                    onBlur={() => onHover?.(null)}
                    onClick={() => onSelect?.(p.name)}
                    aria-label={`${p.name}: ${p.description}. Показать на карте`}
                  >
                    <strong>{p.name}</strong>
                    <span>{p.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      <div className="geo__country">
        <h4 className="cap cap--blue"><span>Афганистан</span></h4>
        <ul>
          <li>
            <strong>Твердотопливная ТЭС-130 МВт</strong>
            <span>ОТР, 2023 · <Todo>место строительства для карты</Todo></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GeoList
