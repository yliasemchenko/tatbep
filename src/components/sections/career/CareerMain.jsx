import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'

const vacancies = [
  {
    id: 1,
    title: 'Инженер-конструктор (начинающий специалист)',
    description: 'Ищем специалиста для проработки технологических схем, узлов, построения 3D моделей, выполнения тепловых, аэродинамических, гидравлических и прочностных расчетов и многое другое.',
    icon: '/wp-content/uploads/2024/01/engineer-1.svg',
    link: '#'
  },
  {
    id: 2,
    title: 'Ведущий инженер / Главный специалист конструкторского отдела',
    description: 'Ищем в команду инженера-конструктора с опытом выполнения теплотехнических расчетов котельных установок, разработки конструкторской документации, построения 3D-моделей',
    icon: '/wp-content/uploads/2024/01/engineer-1-1.svg',
    link: '#',
    isCenter: true
  },
  {
    id: 3,
    title: 'Инженер-проектировщик водоснабжения и канализации',
    description: 'Ищем специалиста для разработки проектной документации разделов водоснабжение и канализация для объектов промышленного назначения',
    icon: '/wp-content/uploads/2024/01/architec-1.svg',
    link: '#'
  }
]

const values = [
  {
    id: 1,
    title: 'Проактивность',
    description: 'Мы ответственны за все, что с нами происходит. У нас есть потребность действовать, ставить вопросы, связанные с улучшениями, быть вовлеченными и лично участвовать в их решении.',
    icon: '/wp-content/uploads/2024/01/like-1.svg'
  },
  {
    id: 2,
    title: 'Ответственность',
    description: 'Ответственно относись к выполнению поставленных задач, оперативно исправляй недочёты и будь готов отстаивать предложенные решения.',
    icon: '/wp-content/uploads/2024/01/social-responsibility-1.svg'
  },
  {
    id: 3,
    title: 'Обучаемость',
    description: 'Используй образовательные ресурсы Общества – это твой трамплин в профессии и карьере.',
    icon: '/wp-content/uploads/2024/01/elearning-1.svg'
  },
  {
    id: 4,
    title: 'Командный дух',
    description: 'Мы работаем над общим делом и его успех зависит от командной работы',
    icon: '/wp-content/uploads/2024/01/team-1.svg'
  }
]

const stats = [
  {
    id: 1,
    number: '10',
    text: 'ЛЕТ опыта в промышленном проектировании объектов энергетики',
    icon: null
  },
  {
    id: 2,
    text: 'опытные СПЕЦИАЛИСТЫ по всем направлениям',
    icon: '/wp-content/uploads/2024/01/experience-1-1-1.svg'
  },
  {
    id: 3,
    text: 'более 50 выполненных ПРОЕКТОВ в РФ и Республике Беларусь',
    icon: '/wp-content/uploads/2024/01/world-1-1-1.svg'
  },
  {
    id: 4,
    text: 'нас отличает АКТИВНАЯ жизненная позиция и командный дух',
    icon: '/wp-content/uploads/2024/01/team-2-1-1.svg'
  },
  {
    id: 5,
    text: 'оснащение современной техникой и программным обеспечением',
    icon: '/wp-content/uploads/2024/01/invention-1-1-1.svg'
  },
  {
    id: 6,
    text: 'ОТКРЫТЫ миру; делимся знаниями, опытом и ноу-хау',
    icon: '/wp-content/uploads/2024/01/openmindness-2-1-1.svg'
  }
]

const benefits = [
  {
    id: 1,
    title: 'Расширенный социальный пакет',
    description: 'Все сотрудники получают белую зарплату, полный социальный пакет, официальное трудоустройство и полис ДМС. А также участие в праздничных мероприятиях, корпоративный спорт и др.',
    icon: '/wp-content/uploads/2024/01/salary-1.svg'
  },
  {
    id: 2,
    title: 'Корпоративный университет',
    description: 'В ООО «Татбелэнергопроект» бережно хранят и передают профессиональные знания и опыт. Система наставничества и техническая учёба помогают обучаться новому и повышать квалификацию.',
    icon: '/wp-content/uploads/2024/01/education-1.svg'
  },
  {
    id: 3,
    title: 'Корпоративный отдых и спорт',
    description: 'Мы весело отмечаем день рождения компании, новый год и день энергетика, выезжаем на собственную базу отдыха, в Шерегеш, на Алтай. За счёт компании бегаем на лыжах, катаемся на велосипедах, плаваем, играем в волейбол и занимаемся йогой и пилатесом.',
    icon: '/wp-content/uploads/2024/01/image-1.svg'
  },
  {
    id: 4,
    title: 'Лицензионное ПО и условия труда',
    description: 'Мы предоставляем полностью лицензированные рабочие места и требуемые условия работы на объектах – все, что необходимо для качественного выполнения своей работы с максимальной пользой для компании.',
    icon: '/wp-content/uploads/2024/01/award.svg'
  },
  {
    id: 5,
    title: 'Неограниченные возможности для роста и развития',
    description: 'ООО «Татбелэнергопроект» предлагает возможности для саморазвития, профессионального и карьерного роста. Общество поддерживает непрерывное обучение и повышение квалификации персонала.',
    icon: '/wp-content/uploads/2024/01/apps.svg'
  },
  {
    id: 6,
    title: 'Наставничество и поддержка профессионалов',
    description: 'В компании действует система наставничества для молодых специалистов, дающая неограниченные возможности профессионального роста как самого наставника, так и новичка в профессии.',
    icon: '/wp-content/uploads/2024/01/mentor-1.svg'
  },
  {
    id: 7,
    title: 'Сложные и интересные проекты',
    description: 'ООО «Татбелэнергопроект» выполняет сложные проекты в области промышленного проектирования объектов энергетики – тепловые станции, источники тепла, объекты промышленных предприятий.',
    icon: '/wp-content/uploads/2024/01/team-management-1.svg'
  },
  {
    id: 8,
    title: 'Командировки в России и за рубежом',
    description: 'ООО «Татбелэнергопроект» выполняет проекты в Российской Федерации и Республике Беларусь. Общество имеет филиал в г. Казань. География проектов охватывает ведущие энергетические и промышленные предприятия.',
    icon: '/wp-content/uploads/2024/01/business-trip-1.svg'
  }
]

const traditions = [
  {
    id: 1,
    title: 'Бегать на лыжах',
    image: '/wp-content/uploads/2024/01/rectangle-204.png'
  },
  {
    id: 2,
    title: 'Веселиться на корпоративах',
    image: '/wp-content/uploads/2024/01/rectangle-204-1.png'
  },
  {
    id: 3,
    title: 'Вместе не только работать',
    image: '/wp-content/uploads/2024/01/rectangle-204-2.png'
  },
  {
    id: 4,
    title: 'Делать свою работу хорошо',
    image: '/wp-content/uploads/2024/02/delat-svoyu-rabotu-horosho.jpg'
  },
  {
    id: 5,
    title: 'Душевно отдыхать на Алтае',
    image: '/wp-content/uploads/2024/02/dushevno-otdyhat-na-altae.jpg'
  },
  {
    id: 6,
    title: 'Летать в продуктивные командировки',
    image: '/wp-content/uploads/2024/02/letat-v-produktivnye-komandirovki.jpg'
  }
]

function CareerMain() {
  return (
    <>
      <section id="career_main">
        <div className="container"></div>
        <div className="career_main_bg">
          <img src="/wp-content/uploads/2024/01/image-9.png" alt="" />
        </div>
      </section>

      <section id="career_get">
        <div className="container">
          <div className="breadcrump">
            <Link to="/">Главная</Link>
            <p>&gt;</p>
            <Link to="/karera">Карьера</Link>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h2>ООО «Татбелэнергопроект» – это команда проектировщиков (инженеров, конструкторов), работающих над проектированием объектов энергетики: тепловых электрических станций, источников тепла и тепловых сетей, объектов общезаводского хозяйства крупных промышленных предприятий.</h2>
            </div>
            <div className="col-lg-6 col-lg-end">
              <p className="get_team">Присоединяйся к команде и развивайся вместе с опытными профессионалами в сфере энергетики!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="career_vacantion">
        <div className="container">
          <h2 className="big">Кто нам <span>нужен</span></h2>
          <div className="vacantion_row">
            {vacancies.map((vacancy) => (
              <div key={vacancy.id} className={`vacantion_div ${vacancy.isCenter ? 'vacantion_div_center' : ''}`}>
                <img src={vacancy.icon} alt={vacancy.title} />
                <h4>{vacancy.title}</h4>
                <p>{vacancy.description}</p>
                <a href={vacancy.link} className="career_vacantion_a">
                  <p>Подробнее</p>
                  <img className="arrow" src={arrowRightIcon} alt="" />
                </a>
              </div>
            ))}
          </div>
          <div className="btn_career_center">
            <Link to="/karera/vakansii">все вакансии</Link>
          </div>
        </div>
      </section>

      <section id="career_value">
        <div className="container">
          <h2 className="big">Что мы <span>ценим</span> в сотрудниках</h2>
          <div className="row">
            {values.map((value) => (
              <div key={value.id} className="col-lg-6">
                <div className="career_value_div">
                  <img src={value.icon} alt={value.title} />
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who_we_career">
        <div className="container">
          <h2 className="big">Кто <span>мы</span> такие</h2>
          <p>ООО «Татбелэнергопроект» — дочернее предприятие ООО ИЦ «Энергопрогресс», работающее с 2015 года в области промышленного проектирования объектов энергетики. Более 150 специалистов, из них более 95% — инженерно-технический персонал. Оснащены современной техникой и ПО для выполнения работ на условиях генерального подряда.</p>
        </div>
      </section>

      <section id="who_we_career_green">
        <div className="container">
          <div className="row">
            {stats.map((stat) => (
              <div key={stat.id} className="col-lg-2">
                <div className="who_we_career_div">
                  <span>
                    {stat.number && <h3>{stat.number}</h3>}
                    {stat.icon && <img src={stat.icon} alt="" />}
                  </span>
                  <p>{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what_you_get">
        <div className="container">
          <h2 className="big">Что мы <span>предлагаем</span></h2>
          <div className="row">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="col-lg-3">
                <div className="what_you_get">
                  <img src={benefit.icon} alt={benefit.title} />
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="career_gif">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="career_gif">
                <img src="/assets/video/new_career.gif" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <h2 className="big">сотрудники <span>о компании</span></h2>
              <p>Корпоративная культура ООО «Татбелэнергопроект» основана на непрерывном обучении, наставничестве и поддержании высокого уровня профессиональной культуры. Стимулируем вовлечённость сотрудников в производственный процесс для своевременного и качественного достижения результата.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="swiper_career">
        <div className="container">
          <h2 className="big">у нас <span>принято</span></h2>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            className="swiper-career"
          >
            {traditions.map((tradition) => (
              <SwiperSlide key={tradition.id}>
                <div className="slider_career">
                  <div className="slider_career_img">
                    <img src={tradition.image} alt={tradition.title} />
                  </div>
                  <h4>{tradition.title}</h4>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-navigation">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default CareerMain
