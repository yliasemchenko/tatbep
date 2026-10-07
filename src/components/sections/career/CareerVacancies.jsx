import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { contacts } from '../../../data/company'
import { vacancies } from '../../../data/career'
import { PageHero, Todo, pad } from '../../ui'

function CareerVacancies() {
  const { hash } = useLocation()
  const [openId, setOpenId] = useState(hash ? hash.slice(1) : null)

  useEffect(() => {
    if (hash) setOpenId(hash.slice(1))
  }, [hash])

  const email = contacts.hrEmail || contacts.email

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Карьера', to: '/karera' }, { label: 'Вакансии', to: '/karera/vakansii' }]}
        label="Вакансии"
        title="Вакансии"
        lead="Нажмите на вакансию, чтобы прочитать описание. Откликнуться можно по почте — порядок описан ниже."
      >
        <Todo>актуальность списка: вакансии наладчиков и топочно-горелочных устройств совпадают с вакансиями другой компании</Todo>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <div className="vac-list">
            {vacancies.map((v, i) => {
              const open = openId === v.id
              return (
                <div key={v.id} id={v.id} className={`vac${open ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="vac__toggle"
                    aria-expanded={open}
                    aria-controls={`${v.id}-panel`}
                    onClick={() => setOpenId(open ? null : v.id)}
                  >
                    <span className="num">{pad(i + 1)}</span>
                    <span>{v.title}</span>
                    <span className="plus" aria-hidden="true" />
                  </button>
                  <div className="vac__panel" id={`${v.id}-panel`} role="region" aria-label={v.title} aria-hidden={!open}>
                    <div className="vac__body">
                      <p>{v.text}</p>
                      <a href="#apply" className="link-arrow" tabIndex={open ? undefined : -1}>Как откликнуться</a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sec sec--paper" id="apply">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head__index">
              <span className="cap">Как откликнуться</span>
            </div>
            <div className="sec-head__body prose">
              <h2 className="h2">Пришлите резюме на почту</h2>
              <p className="lead">
                В теме письма укажите «Резюме на вакансию &lt;должность&gt;». Резюме рассматриваем конфиденциально.
                Если подходящей вакансии сейчас нет, всё равно присылайте — резюме останется в резерве, и мы свяжемся, когда она появится.
              </p>
              <p className="lead">
                Почта: {email ? <a href={`mailto:${email}`} className="link-arrow">{email}</a> : <Todo>почта для резюме</Todo>}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareerVacancies
