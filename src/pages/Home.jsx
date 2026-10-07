import { Link } from 'react-router-dom'
import { Arrow, Photo } from '../components/ui'
import HomeAboutSection from '../components/sections/HomeAboutSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import CurrentProjectsSection from '../components/sections/CurrentProjectsSection'
import NewsSection from '../components/sections/NewsSection'
import ProjectsGeoSection from '../components/sections/ProjectsGeoSection'
import ClientsSection from '../components/sections/ClientsSection'
import BestEmployeesSection from '../components/sections/BestEmployeesSection'
import CareerBandSection from '../components/sections/CareerBandSection'

const directions = [
  {
    id: 'project-docs',
    title: 'Проектирование объектов',
    text: 'Комплексное проектирование тепловых электростанций, источников тепла и тепловых сетей, объектов общезаводского хозяйства крупных промышленных предприятий — с сопровождением проекта на всех этапах.',
    image: '/assets/img/main_bg1.jpg',
    tone: 'duo--blue',
    extra: 'ОТР · ТЭР · ПД · РД · СД',
    main: true
  },
  {
    id: 'bim-models',
    title: 'Информационные модели',
    text: 'Трёхмерные модели объектов для координации разделов и поиска коллизий до начала строительства.',
    image: '/assets/img/about/tehnologii.gif',
    tone: 'duo--navy',
    extra: '3D-модель · координация разделов · коллизии'
  },
  {
    id: 'authors-supervision',
    title: 'Авторский надзор',
    text: 'Контроль соответствия строительно-монтажных работ проектной документации и решение вопросов на площадке.',
    image: '/assets/img/main_bg3.jpg',
    tone: 'duo--yellow',
    extra: 'АН · на всех этапах строительства'
  }
]

function Home() {
  return (
    <>
      <section className="hero hero--enter">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__text">
              <div className="hero__meta">
                <span className="cap cap--blue">ООО «Татбелэнергопроект»</span>
                <span className="cap">Проектная организация</span>
                <span className="cap">С 2015 года</span>
              </div>
              <h1 className="h-display">
                Проектируем электростанции, источники тепла и&nbsp;инфраструктуру <span className="mark-y">промышленных предприятий</span>
              </h1>
              <p className="lead">
                Готовим обоснования и ТЭО, выпускаем проектную и рабочую документацию, ведём информационные модели и авторский надзор. Среди заказчиков — генерирующие компании, нефтехимические, химические и металлургические предприятия Беларуси и России.
              </p>
              <div className="btn-row">
                <Link to="/about" className="btn btn--solid">О компании <Arrow /></Link>
                <Link to="/proekty" className="btn">Проекты <Arrow /></Link>
              </div>
            </div>
            <Photo
              className="hero__photo"
              src="/assets/img/projects/main/nknx.jpg"
              alt="Лемаевская ПГУ-495 МВт, ПАО «Нижнекамскнефтехим»"
              caption="Лемаевская ПГУ-495 МВт · ПАО «Нижнекамскнефтехим» · ПД, РД, АН"
            />
          </div>
        </div>
        <div className="wrap">
          <div className="dirs">
            {directions.map((d, i) => (
              <Link
                key={d.id}
                to={`/uslugi#${d.id}`}
                className={`dir duo duo-hover ${d.tone}${d.main ? ' dir--main' : ''}`}
                style={{ '--i': i }}
                data-center
              >
                <img src={d.image} alt="" loading="lazy" />
                <span className="ticks" aria-hidden="true" />
                <span className="num">0{i + 1} — {d.main ? 'основное направление' : 'направление'}</span>
                <h3 className="h3">{d.title}</h3>
                <p>{d.text}</p>
                <span className="dir__extra" aria-hidden="true"><span className="cap">{d.extra}</span></span>
                <span className="more">Подробнее <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeAboutSection />
      <ProjectsSection />
      <CurrentProjectsSection />
      <NewsSection />
      <ProjectsGeoSection />
      <ClientsSection />
      <BestEmployeesSection />
      <CareerBandSection />

      <section className="sec sec--tight sec--yellow">
        <div className="wrap strip">
          <p className="h3">Есть вопрос о проекте, сотрудничестве или работе в компании?</p>
          <Link to="/contacts" className="btn btn--solid">Контакты <Arrow /></Link>
        </div>
      </section>
    </>
  )
}

export default Home
