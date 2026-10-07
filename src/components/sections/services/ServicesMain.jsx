import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { services, stageLegend } from '../../../data/company'
import { references, IN_WORK } from '../../../data/projects'
import { inkStyle, useInk } from '../../../motion'
import CompareSlider from '../../CompareSlider'
import { Arrow, PageHero, SectionHead, Todo, pad } from '../../ui'

const BIM_IMAGE = '/assets/img/about/tehnologii.gif'

const examplesFor = (stages) => {
  if (!stages.length) return []
  return references.filter((r) => {
    const own = r.stages.split(';').map((s) => s.trim().toLowerCase())
    return stages.some((code) => own.includes(code.toLowerCase()))
  })
}

function ServicesMain() {
  const [activeId, setActiveId] = useState(services[0].id)
  const indexRef = useRef(null)
  const ink = useInk(indexRef, 'a.active', [activeId], 'y')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    services.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Услуги', to: '/uslugi' }]}
        label="Услуги"
        title="Шесть направлений работ: от обоснования инвестиций до надзора на стройке"
        lead="Берёмся за отдельную стадию или ведём объект целиком. Примеры к каждому направлению — из реестра выполненных и текущих проектов."
      />

      <section className="sec">
        <div className="wrap svc-layout">
          <nav className="svc-index" aria-label="Направления" ref={indexRef}>
            {services.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className={activeId === s.id ? 'active' : ''}>
                <span className="num">{pad(i + 1)}</span>
                <span>{s.title}</span>
              </a>
            ))}
            <span className="svc-index__ink" aria-hidden="true" style={inkStyle(ink, 'y')} />
          </nav>

          <div className="svc-list">
            {services.map((s, i) => {
              const examples = examplesFor(s.stages)
              return (
                <article key={s.id} id={s.id} className={`svc ${i % 2 ? 'svc--right' : 'svc--left'}`}>
                  {s.id === 'bim-models' ? (
                    <div className="svc__media svc__media--cmp" data-reveal>
                      <CompareSlider
                        className="svc__fig"
                        src={BIM_IMAGE}
                        caption={`Рис. ${pad(i + 1)} · ${s.title}. Слой «Чертёж» — графическая обработка того же изображения модели`}
                      />
                      <span className="svc__big" aria-hidden="true">{pad(i + 1)}</span>
                    </div>
                  ) : s.image && (
                    <div className="svc__media" data-reveal>
                      <figure className={`svc__fig duo duo-hover ${i % 2 ? 'duo--blue4' : 'duo--blue'}`} data-center>
                        <img src={s.image} alt="" loading="lazy" />
                        <span className="ticks" aria-hidden="true" />
                        <figcaption>Рис. {pad(i + 1)} · {s.title}</figcaption>
                      </figure>
                      <span className="svc__big" aria-hidden="true">{pad(i + 1)}</span>
                    </div>
                  )}
                  <div className="svc__head">
                    <span className="num">{pad(i + 1)} / {pad(services.length)}</span>
                    <h2 className="h2">{s.title}</h2>
                  </div>
                  <div className="svc__text prose">
                    {s.text.map((p) => <p key={p}>{p}</p>)}
                    {s.stages.length > 0 && (
                      <div className="tags" style={{ marginTop: 20 }}>
                        {s.stages.map((code) => <span key={code} className="tag">{code}</span>)}
                      </div>
                    )}
                  </div>
                  <div className="svc__aside">
                    <div className="svc__examples">
                      <p className="cap">Примеры объектов</p>
                      {examples.length > 0 ? (
                        <>
                          <ul>
                            {examples.slice(0, 4).map((r) => (
                              <li key={r.id}>
                                <span>{r.year === IN_WORK ? 'В работе' : r.year} · {r.stages}</span>
                                {r.object}
                              </li>
                            ))}
                          </ul>
                          <Link to="/proekty/referenczii" className="link-arrow">
                            Все записи реестра ({examples.length}) <Arrow />
                          </Link>
                        </>
                      ) : (
                        <p style={{ paddingTop: 4 }}><Todo>объекты, на которых выполнялось направление «{s.title}»</Todo></p>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sec sec--paper sec--tight">
        <div className="wrap">
          <SectionHead index={7} label="Обозначения" title="Шифры стадий в реестре" />
          <dl className="legend">
            {stageLegend.map(([code, text]) => (
              <div key={code}>
                <dt>{code}</dt>
                <dd>{text}</dd>
              </div>
            ))}
            <div>
              <dt>КФО, ОЛ</dt>
              <dd><Todo>расшифровка</Todo></dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}

export default ServicesMain
