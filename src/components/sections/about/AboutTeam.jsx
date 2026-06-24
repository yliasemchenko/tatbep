import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const departments = [
  {
    id: 1,
    title: 'Производственно-технический',
    head: 'Пащук Сергей Валентинович',
    image: '/assets/img/avatar_no.webp',
    description:
      'Осуществляет комплексную координацию проектных работ, разрабатывает проектную и рабочую документацию для объектов энергетики, контролирует соблюдение технических требований и нормативов на всех этапах проектирования.'
  },
  {
    id: 2,
    title: 'Теплотехнический',
    head: 'Андросик Ирина Владимировна',
    image: '/assets/img/avatar_no.webp',
    description:
      'Разрабатывает технологические решения для тепловых электростанций, котельных и тепловых сетей, выполняет теплотехнические расчёты и подбор основного энергетического оборудования.'
  },
  {
    id: 3,
    title: 'Строительный',
    head: 'Блыскош Нина Васильевна',
    image: '/assets/img/avatar_no.webp',
    description:
      'Проектирует строительные конструкции, здания и сооружения промышленного и энергетического назначения, обеспечивая их надёжность, устойчивость и соответствие действующим нормативам.'
  },
  {
    id: 4,
    title: 'Гидротехники и водоподготовки',
    head: 'Демешко Дмитрий Александрович',
    image: '/assets/img/team.JPG',
    description:
      'Разрабатывает системы водоснабжения, водоотведения и водоподготовки, выполняет проектирование гидротехнических сооружений и обеспечивает надёжное водохозяйственное обеспечение объектов.'
  },
  {
    id: 5,
    title: 'Архитектурный',
    head: 'Мамыш Игорь Олегович',
    image: '/assets/img/team.JPG',
    description:
      'Создаёт архитектурные решения зданий и сооружений, обеспечивая их функциональность, эстетичность и соответствие требованиям безопасности и градостроительных норм.'
  },
  {
    id: 6,
    title: 'Технологических коммуникаций',
    head: 'Тузанкин Александр Игоревич',
    image: '/assets/img/team.JPG',
    description:
      'Проектирует технологические трубопроводы и инженерные коммуникации энергетических и промышленных объектов, выполняет расчёты и компоновку сетей.'
  },
  {
    id: 7,
    title: 'Электротехнический и систем управления',
    head: 'Валуй Виталий Владимирович',
    image: '/assets/img/team.JPG',
    description:
      'Разрабатывает системы электроснабжения, автоматизации и управления технологическими процессами, включая релейную защиту, КИПиА и АСУ ТП.'
  },
  {
    id: 8,
    title: '3D-проектирования',
    head: 'Сазонов Евгений Владимирович',
    image: '/assets/img/team.JPG',
    description:
      'Создаёт и сопровождает трёхмерные информационные модели объектов, обеспечивает BIM-координацию проектных решений и выявление проектных коллизий.'
  },
  {
    id: 9,
    title: 'Информационных технологий',
    head: 'Якубович Леонид Борисович',
    image: '/assets/img/team.JPG',
    description:
      'Обеспечивает функционирование ИТ-инфраструктуры организации, поддержку программных комплексов, цифровизацию проектных процессов и информационную безопасность.'
  }
]
function AboutTeam() {
  return (
    <section id="team">
      <div className="container">
        <h2 className="big">наши <span>отделы</span></h2>
        <div className="about_departments_slider">
          <div className="about_departments_navigation">
            <div className="swiper-button-prev swiper-button-prev-departments"></div>
            <div className="swiper-button-next swiper-button-next-departments"></div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-departments',
              nextEl: '.swiper-button-next-departments'
            }}
            pagination={{
              el: '.swiper-pagination-departments',
              clickable: true
            }}
            className="swiper swiper_departments"
          >
            {departments.map((department) => (
              <SwiperSlide key={department.id}>
                <article className="about_departments_card">
                  <div className="about_departments_card_img">
                    <img src={department.image} alt={department.title} />
                  </div>
                  <div className="about_departments_card_body">
                    <p className="about_departments_label">Отдел</p>
                    <h3>{department.title}</h3>
                    <p className="about_departments_head">
                      Начальник отдела: <span>{department.head}</span>
                    </p>
                    <p className="about_departments_text">{department.description}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-departments about_departments_pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam
