import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { navigation, services, departments, management } from '../data/company'
import { references, featuredProjects, IN_WORK } from '../data/projects'
import { vacancies } from '../data/career'
import { news } from '../data/news'

const index = [
  ...navigation.map((n) => ({ group: 'Разделы', title: n.label, to: n.to, text: '' })),
  ...services.map((s) => ({ group: 'Услуги', title: s.title, to: `/uslugi#${s.id}`, text: s.short })),
  ...featuredProjects.map((p) => ({ group: 'Значимые проекты', title: p.name, to: `/?project=${p.id}#featured`, text: [p.customer, p.summary].filter(Boolean).join(' · ') })),
  ...references.map((r) => ({
    group: 'Реестр проектов',
    title: r.object,
    to: `/proekty/referenczii?year=${encodeURIComponent(r.year)}`,
    text: [r.year === IN_WORK ? 'В работе' : r.year, r.customer, r.stages].filter(Boolean).join(' · ')
  })),
  ...vacancies.map((v) => ({ group: 'Вакансии', title: v.title, to: `/karera/vakansii#${v.id}`, text: v.text })),
  ...news.map((n) => ({ group: 'Новости', title: n.title, to: `/news?category=${encodeURIComponent(n.category)}`, text: `${n.date} · ${n.category}` })),
  ...departments.map((d) => ({ group: 'Отделы', title: `Отдел ${d.title.toLowerCase()}`, to: '/about#departments', text: d.head })),
  ...management.map((m) => ({ group: 'Руководство', title: m.name, to: '/about#management', text: m.position }))
]

const normalize = (s) => s.toLowerCase().replace(/ё/g, 'е')

function SiteSearch({ onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const groups = useMemo(() => {
    const words = normalize(query).split(/\s+/).filter((w) => w.length > 1)
    if (!words.length) return []
    const found = index.filter((item) => {
      const hay = normalize(`${item.title} ${item.text}`)
      return words.every((w) => hay.includes(w))
    })
    const byGroup = new Map()
    found.forEach((item) => {
      if (!byGroup.has(item.group)) byGroup.set(item.group, [])
      if (byGroup.get(item.group).length < 8) byGroup.get(item.group).push(item)
    })
    return [...byGroup.entries()]
  }, [query])

  return (
    <div className="search" role="dialog" aria-modal="true" aria-label="Поиск по сайту" onClick={onClose}>
      <div className="search__panel" onClick={(e) => e.stopPropagation()}>
        <form className="search__bar" role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="site-search" className="sr-only">Поиск по сайту</label>
          <input
            id="site-search"
            ref={inputRef}
            className="search__input"
            type="search"
            placeholder="Объект, заказчик, услуга, вакансия"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <button type="button" className="search__close" onClick={onClose}>Закрыть · Esc</button>
        </form>
        <div className="search__body">
          {query.trim().length < 2 && (
            <p className="search__hint">Например: «ПГУ», «Казаньоргсинтез», «авторский надзор», «BIM».</p>
          )}
          {query.trim().length >= 2 && groups.length === 0 && (
            <p className="search__hint">Ничего не найдено. Попробуйте другое слово.</p>
          )}
          {groups.map(([group, items]) => (
            <div key={group} className="search__group">
              <p className="cap">{group}</p>
              {items.map((item, i) => (
                <Link key={`${item.to}-${i}`} to={item.to} className="search__item" onClick={onClose}>
                  <strong>{item.title}</strong>
                  {item.text && <span>{item.text}</span>}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SiteSearch
