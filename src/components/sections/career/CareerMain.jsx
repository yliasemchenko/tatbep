import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { departments } from '../../../data/company'
import { useScrollLine } from '../../../motion'
import { vacancies, values, benefits, traditions } from '../../../data/career'
import { Arrow, Crumbs, Photo, SectionHead, Todo, pad } from '../../ui'

function CareerMain() {
  const benefitsRef = useRef(null)
  useScrollLine(benefitsRef, ':scope > li')

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={[{ label: 'Карьера', to: '/karera' }]} />
          <div className="career-hero">
            <div className="career-hero__text">
              <span className="cap cap--blue">Карьера</span>
              <h1 className="h1">Работа в Татбелэнергопроекте</h1>
              <p className="lead">
                Мы проектируем электростанции, котельные и объекты промышленных предприятий в Беларуси и России. Ищем инженеров, которым интересны большие объекты и работа вместе с коллегами из других дисциплин.
              </p>
              <div className="btn-row">
                <Link to="/karera/vakansii" className="btn btn--solid">Вакансии <Arrow /></Link>
                <a href="#conditions" className="btn">Условия <Arrow /></a>
              </div>
            </div>
            <Photo className="career-hero__photo" src="/assets/img/team.JPG" alt="Сотрудники Татбелэнергопроекта" caption="Сотрудники компании" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead
            index={1}
            label="Где работать"
            title="Девять отделов — девять направлений инженерной работы"
            lead="Проектировщик в компании работает внутри своего отдела, а объект ведёт вместе с соседними разделами."
          />
          <ul className="dir-list">
            {departments.map((d, i) => (
              <li key={d.title}>
                <span className="num">{pad(i + 1)}</span>
                <div>
                  <strong>{d.title}</strong>
                  <span>{d.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <Photo className="about-photo wide-photo" src="/assets/img/career.jpeg" alt="" caption="Иллюстрация" />
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap">
          <SectionHead
            index={2}
            label="Кого ищем"
            title="Открытые вакансии"
            aside={<Link to="/karera/vakansii" className="link-arrow">Все вакансии ({vacancies.length}) <Arrow /></Link>}
          />
          <div className="vac-list">
            {vacancies.slice(0, 4).map((v, i) => (
              <Link key={v.id} to={`/karera/vakansii#${v.id}`} className="people__row">
                <span className="num">{pad(i + 1)}</span>
                <strong>{v.title}</strong>
                <span>{v.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead index={3} label="Что ценим" title="Что важно в работе у нас" />
          <div className="rows">
            {values.map((v, i) => (
              <div key={v.title} className="rows__item">
                <span className="num">{pad(i + 1)}</span>
                <h3 className="h3">{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--blue grid-bg" id="conditions">
        <div className="wrap">
          <SectionHead index={4} label="Условия" title="Что даёт компания" />
          <ul className="benefits" ref={benefitsRef}>
            {benefits.map((b, i) => (
              <li key={b.title}>
                <span className="num">{pad(i + 1)}</span>
                <div>
                  <h3 className="h3">{b.title}</h3>
                  <p>{b.text}</p>
                  {b.note && <Todo block>{b.note}</Todo>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" id="traditions">
        <div className="wrap">
          <SectionHead index={5} label="У нас принято" title="Не только работа" />
          <div className="photo-pair">
            {traditions.map((t) => (
              <figure key={t.title}>
                <Photo src={t.image} alt={t.caption} />
                <h3 className="h3">{t.title}</h3>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--yellow sec--tight">
        <div className="wrap strip">
          <p className="h3">Не нашли свою вакансию? Пришлите резюме — оно останется в резерве.</p>
          <Link to="/karera/vakansii#apply" className="btn btn--solid">Как откликнуться <Arrow /></Link>
        </div>
      </section>
    </>
  )
}

export default CareerMain
