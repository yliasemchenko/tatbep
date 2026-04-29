import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import NumbersSection from '../components/sections/NumbersSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import NewsSection from '../components/sections/NewsSection'
import CurrentProjectsSection from '../components/sections/CurrentProjectsSection'
import ClientsSection from '../components/sections/ClientsSection'
import ObjectsSection from '../components/sections/ObjectsSection'

function Home() {

  return (
    <>
      <section id="main">
        <div className="container container_main" style={{ position: 'absolute', marginBottom: '20px' }}>
          <div className="swiper-pagination"></div>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          //autoplay={{ delay: 5000 }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          }}
          className="swiper swiper_main"
        >
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="main_plahka">
                    <h1>ПРОЕКТИРОВАНИЕ ОБЪЕКТОВ</h1>
                    <p>ООО «Татбелэнергопроект» выполняет комплексное проектирование объектов энергетики и промышленности: тепловые электрические станции, источники тепла и тепловые сети, объекты общезаводского хозяйства крупных промышленных предприятий. Мы обеспечиваем высокое качество проектной документации, оптимизацию технических и экономических показателей, а также сопровождение проекта на всех этапах его реализации.</p>
                    <a href="#bolshaya-energetika" className="btn_main btn_main_white">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper_main_bg">
              <img src="/assets/img/main_bg1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="main_plahka">
                    <h2>РАЗРАБОТКА ИНФОРМАЦИОННЫХ МОДЕЛЕЙ</h2>
                    <p>Специалисты ООО «Татбелэнергопроект» разрабатывают информационные модели объектов с применением современных BIM-технологий. Это позволяет повысить точность проектирования, обеспечить прозрачность процессов, сократить сроки реализации и минимизировать риски на этапе строительства и эксплуатации.</p>
                    <a href="#cbp" className="btn_main btn_main_white">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper_main_bg">
              <div className="swiper_main_plashka"></div>
              <img src="/assets/img/main_bg2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="main_plahka">
                    <h2>АВТОРСКИЙ НАДЗОР ЗА СТРОИТЕЛЬСТВОМ ОБЪЕКТОВ</h2>
                    <p>ООО «Татбелэнергопроект» осуществляет авторский надзор за строительством объектов, обеспечивая соответствие выполняемых работ проектной документации и техническим решениям. Мы контролируем качество реализации проектных решений, оперативно решаем возникающие вопросы и способствуем соблюдению сроков и стандартов строительства.</p>
                    <a href="#promyshlennost" className="btn_main btn_main_white">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper_main_bg">
              <div className="swiper_main_plashka"></div>
              <img src="/assets/img/main_bg3.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <a href="#numbers" className="abs_arrow">
          <img src="/assets/img/icons/arrow_down.svg" alt="" />
        </a>
      </section>

      <NumbersSection />
      <ProjectsSection />
      <NewsSection />
      <CurrentProjectsSection />
      <ClientsSection />
      <ObjectsSection />
    </>
  )
}

export default Home
