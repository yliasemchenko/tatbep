import { Arrow } from './ui'

const pageList = (current, total) => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages = [1]
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  if (start > 2) pages.push('…')
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 1) pages.push('…')
  pages.push(total)
  return pages
}

function Pager({ current, total, onChange }) {
  if (total <= 1) return null
  return (
    <nav className="pager" aria-label="Страницы">
      <button type="button" className="pager__btn" disabled={current === 1} onClick={() => onChange(current - 1)} aria-label="Предыдущая страница">
        <Arrow dir="left" />
      </button>
      {pageList(current, total).map((p, i) =>
        p === '…' ? (
          <span key={`gap-${i}`} className="pager__btn" aria-hidden="true">…</span>
        ) : (
          <button
            key={p}
            type="button"
            className={`pager__btn${p === current ? ' current' : ''}`}
            aria-current={p === current ? 'page' : undefined}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        )
      )}
      <button type="button" className="pager__btn" disabled={current === total} onClick={() => onChange(current + 1)} aria-label="Следующая страница">
        <Arrow />
      </button>
      <span className="cap pager__info">Страница {current} из {total}</span>
    </nav>
  )
}

export default Pager
