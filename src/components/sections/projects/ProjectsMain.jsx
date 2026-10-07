import { Link } from 'react-router-dom'
import { Arrow, PageHero, pad } from '../../ui'

const sections = [
  {
    title: 'Реестр проектов',
    text: 'Объекты с 2017 года и текущие работы: заказчик, объект, стадии.',
    to: '/proekty/referenczii',
    image: '/assets/img/projects/main/promgres.JPG',
    tone: 'duo--blue',
    alt: 'Приморская ГРЭС'
  },
  {
    title: 'География проектов',
    text: 'Карта объектов в Беларуси, России, Иране и Афганистане.',
    to: '/proekty/geo',
    image: '/assets/img/projects/main/2.png',
    tone: 'duo--yellow',
    alt: 'Карта объектов'
  },
  {
    title: 'Отзывы',
    text: 'Отзывные письма заказчиков.',
    to: '/proekty/otzyvy',
    image: '/assets/img/projects/main/3.png',
    tone: 'duo--navy',
    alt: 'Отзывные письма заказчиков'
  }
]

function ProjectsMain() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Проекты', to: '/proekty' }]}
        label="Проекты"
        title="Электростанции, котельные и промышленная инфраструктура"
        lead="Парогазовые и газотурбинные установки, модернизация ГРЭС и ТЭЦ, системы водоснабжения и охлаждения, фундаменты под оборудование, объекты нефтехимических предприятий."
      />
      <section className="sec">
        <div className="wrap">
          <div className="hub" data-reveal>
            {sections.map((s, i) => (
              <Link key={s.to} to={s.to} className={`hub__tile hub__tile--${i + 1} duo duo-hover ${s.tone}`}>
                <img src={s.image} alt={s.alt} loading="lazy" />
                <span className="ticks" aria-hidden="true" />
                <span className="hub__num">{pad(i + 1)}</span>
                <div className="hub__body">
                  <h2 className="h1">{s.title}</h2>
                  <p>{s.text}</p>
                  <span className="hub__go">Открыть раздел <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsMain
