import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'

const management = [
  {
    name: 'Виктор Яковлевич Гладышев',
    position: 'Директор',
    image: 'assets/img/avatar_no.webp',
    link: '#'
  },
  {
    name: 'Иван Иванович Врублевский',
    position: 'Главный инженер',
    image: 'assets/img/avatar_no.webp',
    link: '#'
  },
  {
    name: 'Александр Владимирович Антосюк',
    position: 'Заместителем директора по производству',
    image: 'assets/img/avatar_no.webp',
    link: '#'
  },
  {
    name: 'Леонид Юрьевич Кулебякин',
    position: 'Первый заместитель директора',
    image: 'assets/img/avatar_no.webp',
    link: '#'
  },
  {
    name: 'Наталья Николаевна Отческая',
    position: 'Главный бухгалтер',
    image: 'assets/img/avatar_no.webp',
    link: '#'
  },
  {
    name: 'Светлана Ивановна Володько',
    position: 'Начальник отдела кадров',
    image: 'assets/img/avatar_no.webp',
    link: '#'
  },
  {
    name: 'Ольга Сергеевна Астапова',
    position: 'Cекретарь',
    image: 'assets/img/avatar_no.webp',
    link: '#'
  }
]

function AboutManagement() {
  return (
    <section id="rukovodstvo">
      <div className="container">
        <h2 className="big">Руководство</h2>
        {/* Слайдер только на мобильных (md и меньше) */}
        <div className="swiper swiper_rukovodstvo d-block d-md-none">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-rukovodstvo',
              nextEl: '.swiper-button-next-rukovodstvo'
            }}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 4
              }
            }}
          >
            {management.map((person, index) => (
              <SwiperSlide key={index}>
                <div className="col-lg-3">
                  <Link to={person.link} className="rukovodstvo_div">
                    <div className="rukovodstvo_img">
                      <img src={person.image} alt={person.name} />
                    </div>
                    <div className="rukovodstvo_text">
                      <h4>{person.name}</h4>
                      <p>{person.position}</p>
                      <img className="arrow" src={arrowRightIcon} alt="" />
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-navigation">
            <div className="swiper-button-prev swiper-button-prev-rukovodstvo"></div>
            <div className="swiper-button-next swiper-button-next-rukovodstvo"></div>
          </div>
        </div>
        {/* Сетка карточек только на планшетах и десктопах */}
        <div className="row d-none d-md-flex">
          {management.map((person, index) => (
            <div key={index} className="col-lg-3">
              <Link to={person.link} className="rukovodstvo_div">
                <div className="rukovodstvo_img">
                  <img src={person.image} alt={person.name} />
                </div>
                <div className="rukovodstvo_text">
                  <h4>{person.name}</h4>
                  <p>{person.position}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutManagement
