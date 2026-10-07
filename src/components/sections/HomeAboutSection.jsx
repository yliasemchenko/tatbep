import { Link } from 'react-router-dom'
import { Arrow, Photo, SectionHead, Todo } from '../ui'
import { departments, services } from '../../data/company'

function HomeAboutSection() {
  return (
    <section className="sec" id="about-company">
      <div className="wrap">
        <SectionHead
          index={1}
          label="Компания"
          title="Проектная организация, которую основали инженеры большой энергетики"
        />
        <div className="teaser">
          <Photo
            src="/assets/img/team.JPG"
            alt="Сотрудники Татбелэнергопроекта"
            caption="Сотрудники компании"
            className="teaser__photo"
          />
          <div className="teaser__body">
            <div className="prose">
              <p className="lead">
                ООО «Татбелэнергопроект» создано в июне 2015 года. Основу коллектива составили специалисты АО «Зарубежэнергопроект», которые работали над ПГУ-450 ТЭЦ-22 «Южная», Черепетской и Березовской ГРЭС, Казанской ТЭЦ-2.
              </p>
              <p>
                Сегодня компания ведёт объект целиком: от технико-экономического обоснования до авторского надзора на стройке. Разделы проекта выпускают профильные отделы, трёхмерную модель и координацию дисциплин — отдел 3D-проектирования.
              </p>
            </div>
            <dl className="facts">
              <div className="facts__row">
                <dt>2015</dt>
                <dd>Год основания. Дочернее предприятие УК «КЭР-Холдинг».</dd>
              </div>
              <div className="facts__row">
                <dt>Июль 2025</dt>
                <dd>Дочернее предприятие ООО ИЦ «Энергопрогресс», г. Казань.</dd>
              </div>
              <div className="facts__row">
                <dt>{departments.length} отделов</dt>
                <dd>Теплотехнический, строительный, архитектурный, электротехнический и систем управления, 3D-проектирования и другие.</dd>
              </div>
              <div className="facts__row">
                <dt>{services.length} направлений</dt>
                <dd>От ТЭО и HAZOP до проектной документации, BIM и авторского надзора.</dd>
              </div>
              <div className="facts__row">
                <dt>Допуски</dt>
                <dd><Todo>аттестаты, членство в СРО, сертификаты системы менеджмента</Todo></dd>
              </div>
            </dl>
            <div>
              <Link to="/about" className="link-arrow">Подробнее о компании <Arrow /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutSection
