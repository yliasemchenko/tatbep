import { Link } from 'react-router-dom'
import { bestEmployees, bestEmployeesPeriod } from '../../data/career'
import { Arrow, PhotoSlot, SectionHead, Todo, pad } from '../ui'

const field = (value, todo) => value || <Todo>{todo}</Todo>

function BestEmployeesSection() {
  if (!bestEmployees.length) return null

  const [first, ...rest] = bestEmployees
  const side = rest.slice(0, 3)
  const more = rest.slice(3)

  return (
    <section className="sec" id="best">
      <div className="wrap">
        <SectionHead
          index={7}
          label="Лучшие сотрудники"
          title="Сотрудники, которых отметила компания"
          lead={bestEmployeesPeriod || <Todo>за какой период и по каким критериям отмечены сотрудники</Todo>}
          aside={<Link to="/karera" className="link-arrow">Работа в компании <Arrow /></Link>}
        />

        <div className="best">
          <article className="best__lead">
            <PhotoSlot className="best__photo" src={first.photo} alt={first.name || 'Сотрудник компании'} mark={first.name ? undefined : ''} note="Портрет" />
            <div className="best__text">
              <span className="num">01</span>
              {first.name ? (
                <>
                  <h3 className="h2">{first.name}</h3>
                  <p className="cap">{[first.position, first.department].filter(Boolean).join(' · ')}</p>
                  <p>{field(first.reason, 'за что отмечен: объект, результат')}</p>
                </>
              ) : (
                <>
                  <h3 className="h2">Сотрудник</h3>
                  <p><Todo>ФИО, должность, отдел и за что отмечен</Todo></p>
                </>
              )}
            </div>
          </article>

          {side.length > 0 && (
            <ul className="best__list">
              {side.map((p, i) => (
                <li key={p.name || i} className="best__item">
                  <PhotoSlot className="best__thumb" src={p.photo} alt={p.name || 'Сотрудник компании'} mark={p.name ? undefined : ''} note="Фото" />
                  <div>
                    <span className="num">{pad(i + 2)}</span>
                    {p.name ? (
                      <>
                        <strong>{p.name}</strong>
                        <span className="pos">{[p.position, p.department].filter(Boolean).join(' · ')}</span>
                        <span className="why">{field(p.reason, 'за что отмечен')}</span>
                      </>
                    ) : (
                      <>
                        <strong>Сотрудник</strong>
                        <span className="why"><Todo>ФИО, должность, за что отмечен</Todo></span>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {more.length > 0 && (
            <ul className="best__more">
              {more.map((p, i) => (
                <li key={p.name || i} className="best__card">
                  <PhotoSlot className="best__card-photo" src={p.photo} alt={p.name || 'Сотрудник компании'} mark={p.name ? undefined : ''} note="Фото" />
                  <div className="best__card-text">
                    <span className="num">{pad(i + 5)}</span>
                    {p.name ? (
                      <>
                        <strong>{p.name}</strong>
                        <span className="pos">{[p.position, p.department].filter(Boolean).join(' · ')}</span>
                        <span className="why">{field(p.reason, 'за что отмечен')}</span>
                      </>
                    ) : (
                      <>
                        <strong>Сотрудник</strong>
                        <span className="why"><Todo>ФИО, должность, за что отмечен</Todo></span>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default BestEmployeesSection
