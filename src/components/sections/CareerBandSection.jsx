import { Link } from 'react-router-dom'
import { vacancies } from '../../data/career'
import { Arrow, Photo, SectionHead, pad } from '../ui'

function CareerBandSection() {
  return (
    <section className="sec sec--blue grid-bg" id="career">
      <div className="wrap">
        <SectionHead
          index={8}
          label="Карьера"
          title="Ищем инженеров в проектные отделы"
        />
        <div className="band">
          <div className="band__text">
            <p className="lead">
              Открыты вакансии конструкторов, проектировщиков и BIM-координатора. В штате девять отделов, объекты — тепловые электростанции и промышленные предприятия в Беларуси и России. Ниже — часть вакансий; полный список и условия — на странице «Карьера».
            </p>
            <p className="cap">Открытые вакансии</p>
            <ul>
              {vacancies.slice(0, 3).map((v, i) => (
                <li key={v.id}>
                  <span className="num">{pad(i + 1)}</span>
                  <span>{v.title}</span>
                </li>
              ))}
            </ul>
            <div className="btn-row">
              <Link to="/karera/vakansii" className="btn btn--yellow">Все вакансии ({vacancies.length}) <Arrow /></Link>
              <Link to="/karera" className="btn btn--light">О работе в компании <Arrow /></Link>
            </div>
          </div>
          <div className="band__photos">
            <Photo src="/assets/img/team.JPG" alt="Сотрудники компании" caption="Командный выезд" />
            <Photo src="/assets/img/team2.JPG" alt="Сотрудники компании" caption="Корпоративное мероприятие" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerBandSection
