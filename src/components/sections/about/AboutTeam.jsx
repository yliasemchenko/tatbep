import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'

const teamImages = [
  '/wp-content/uploads/2023/12/Images.png',
  '/wp-content/uploads/2024/01/rectangle-204-2.png',
  '/wp-content/uploads/2024/01/rectangle-204.png',
  '/wp-content/uploads/2024/01/6a7ad54fc918686e67478929eb980920-1.jpg'
]

function AboutTeam() {
  return (
    <section id="team">
      <div className="container">
        <h2 className="big">Команда</h2>
        <div className="team_row">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="swiper swiper_team_bottom"
          >
            {teamImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="team_img">
                  <img src={image} alt={`Команда ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="team_text">
            <div className="row">
              <div className="col-lg-6">
                <p>ООО «Татбелэнергопроект» — открытая, мобильная, постоянно развивающаяся компания. Наша кадровая политика основана на непрерывном обучении и повышении квалификации, наставничестве, стимулировании вовлечённости сотрудников и поддержании высокого уровня корпоративной культуры. Мы поддерживаем связи с профильными кафедрами БГПА и привлекаем молодых специалистов.</p>
                <Link to="/karera">
                  <p>Узнай больше о работе в Татбелэнергопроект</p>
                  <img className="arrow" src={arrowRightIcon} alt="" />
                </Link>
                <div className="btn_history_center">
                  <Link to="/karera" className="btn_main btn_main_blue">присоединяйся</Link>
                </div>
              </div>
              <div className="col-lg-5">
                <h3>стань частью команды!</h3>
                <Link to="/karera" className="btn_main btn_main_blue">присоединяйся</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="team_btn_width">
          <Link to="/karera">узнайте больше о работе в Татбелэнергопроект</Link>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam
