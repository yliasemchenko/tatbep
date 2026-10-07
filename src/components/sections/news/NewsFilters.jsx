import { news, newsCategories, newsYears } from '../../../data/news'

const usedCategories = newsCategories.filter((c) => news.some((n) => n.category === c))

function NewsFilters({ category, year, count, onCategory, onYear }) {
  return (
    <div className="toolbar">
      <div className="chips" role="group" aria-label="Рубрики">
        <button type="button" className={`chip${!category ? ' active' : ''}`} onClick={() => onCategory(null)}>
          Все рубрики
        </button>
        {usedCategories.map((c) => (
          <button key={c} type="button" className={`chip${category === c ? ' active' : ''}`} onClick={() => onCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <label htmlFor="news-year" className="sr-only">Год</label>
        <select
          id="news-year"
          className="select"
          value={year ?? ''}
          onChange={(e) => onYear(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">Все годы</option>
          {newsYears.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
        <span className="cap">Публикаций: {count}</span>
      </div>
    </div>
  )
}

export default NewsFilters
