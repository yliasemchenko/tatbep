import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { featuredProjects } from '../../data/projects'
import { inkStyle, useInk } from '../../motion'
import { Arrow, SectionHead, Todo, pad } from '../ui'

const yearOf = (date) => (date.match(/\d{4}(–\d{4})?/) || [''])[0]
const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 960px)').matches

function ProjectFigure({ project }) {
  const [view, setView] = useState('photo')
  const callouts = [
    ['Заказчик', project.customer || '[УТОЧНИТЬ: заказчик]'],
    ['Страна', project.country],
    ['Состав работ', project.scope],
    ['Сроки', project.date]
  ]

  return (
    <figure className={`photo featured__photo pass${view === 'pass' ? ' is-pass' : ''}`}>
      <div className="pass__frame">
        <img src={project.image} alt={project.name} loading="lazy" />
        <span className="pass__scan" aria-hidden="true" />
        <div className="pass__layer" aria-hidden={view !== 'pass'}>
          {callouts.map(([label, value], i) => (
            <div className={`pass__call pass__call--${i + 1}`} key={label} style={{ '--i': i }}>
              <span className="cap">{label}</span>
              <span className="pass__val">{value}</span>
            </div>
          ))}
        </div>
        <div className="pass__toggle" role="group" aria-label="Режим просмотра">
          <button type="button" aria-pressed={view === 'photo'} onClick={() => setView('photo')}>Фото</button>
          <button type="button" aria-pressed={view === 'pass'} onClick={() => setView('pass')}>Паспорт</button>
        </div>
      </div>
      <figcaption>{project.name} · {project.country}</figcaption>
    </figure>
  )
}

function ProjectsSection() {
  const [searchParams] = useSearchParams()
  const fromUrl = searchParams.get('project')
  const initial = featuredProjects.some((p) => p.id === fromUrl) ? fromUrl : featuredProjects[0].id
  const [activeId, setActiveId] = useState(initial)
  const [switched, setSwitched] = useState(false)
  const startX = useRef(null)

  useEffect(() => {
    if (!featuredProjects.some((p) => p.id === fromUrl) || fromUrl === activeId) return
    setSwitched(true)
    setActiveId(fromUrl)
  }, [fromUrl]) // eslint-disable-line react-hooks/exhaustive-deps
  const listRef = useRef(null)
  const ink = useInk(listRef, '.featured__item.active', [activeId], 'y')
  const project = featuredProjects.find((p) => p.id === activeId)
  const index = featuredProjects.findIndex((p) => p.id === activeId)

  const select = (id) => {
    if (id === activeId) return
    setSwitched(true)
    setActiveId(id)
  }

  const onPointerDown = (e) => {
    if (!isMobile() || e.pointerType === 'mouse') return
    if (e.target.closest('button, a')) return
    startX.current = e.clientX
  }
  const onPointerUp = (e) => {
    if (startX.current == null) return
    const dx = e.clientX - startX.current
    startX.current = null
    if (Math.abs(dx) < 48) return
    const next = index + (dx < 0 ? 1 : -1)
    if (featuredProjects[next]) select(featuredProjects[next].id)
  }

  return (
    <section className="sec sec--paper" id="featured">
      <div className="wrap">
        <SectionHead
          index={2}
          label="Значимые проекты"
          title="Парогазовые блоки, ГТУ-ТЭС, модернизация ГРЭС"
          aside={<Link to="/proekty/referenczii" className="link-arrow">Реестр проектов <Arrow /></Link>}
        />
        <div className="featured">
          <div className="featured__list" role="tablist" aria-label="Значимые проекты" ref={listRef}>
            {featuredProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={p.id === activeId}
                className={`featured__item${p.id === activeId ? ' active' : ''}`}
                onClick={() => select(p.id)}
              >
                <span className="num">{pad(i + 1)}</span>
                <span>{p.name}</span>
                <span className="yr">{yearOf(p.date)}</span>
              </button>
            ))}
            <span className="featured__ink" aria-hidden="true" style={inkStyle(ink, 'y')} />
          </div>

          <article
            className={`featured__panel${switched ? ' is-switch' : ''}`}
            role="tabpanel"
            key={project.id}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => { startX.current = null }}
          >
            <ProjectFigure project={project} />
            <div className="featured__info">
              <h3 className="h3">{project.name}</h3>
              <p>{project.summary}</p>
              <p className="cap">{project.date}</p>
              {project.note && <Todo>{project.note}</Todo>}
            </div>
            <dl className="spec featured__spec">
              <div className="spec__row" style={{ '--i': 0 }}>
                <dt>Заказчик</dt>
                <dd>{project.customer || <Todo>заказчик</Todo>}</dd>
              </div>
              <div className="spec__row" style={{ '--i': 1 }}>
                <dt>Состав работ</dt>
                <dd>{project.scope}</dd>
              </div>
              <div className="spec__row" style={{ '--i': 2 }}>
                <dt>{project.equipmentTitle || 'Оборудование'}</dt>
                <dd>
                  <ul>
                    {project.equipment.map((line) => <li key={line}>{line}</li>)}
                  </ul>
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
