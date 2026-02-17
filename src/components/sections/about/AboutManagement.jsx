import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'

const management = [
  {
    name: 'Дмитрий Феликсович Серант',
    position: 'Генеральный директор',
    image: '/wp-content/uploads/2024/01/image-25-2.png',
    link: '#'
  },
  {
    name: 'Сергей Николаевич Кучанов',
    position: 'Технический директор',
    image: '/wp-content/uploads/2024/01/image-21.png',
    link: '#'
  },
  {
    name: 'Анатолий Александрович Ловцов',
    position: 'Заместитель генерального директора по проектированию',
    image: '/wp-content/uploads/2024/01/image-20.png',
    link: '#'
  },
  {
    name: 'Алексей Дмитриевич Колегов',
    position: 'Директор по внедрению инновационных технологий',
    image: '/wp-content/uploads/2024/01/image-22.png',
    link: '#'
  },
  {
    name: 'Дмитрий Сергеевич Россов',
    position: 'Директор по производству',
    image: '/wp-content/uploads/2023/12/dsc_7296_1.png',
    link: '#'
  },
  {
    name: 'Наталия Валерьевна Палкина',
    position: 'Директор по корпоративной стратегии и правовому обеспечению',
    image: '/wp-content/uploads/2024/01/image-23.png',
    link: '#'
  },
  {
    name: 'Владимир Олегович Третьяков',
    position: 'Директор по информационным технологиям',
    image: '/wp-content/uploads/2024/01/image-19.png',
    link: '#'
  },
  {
    name: 'Павел Михайлович Дудин',
    position: 'Начальник отдела управления проектами',
    image: '/wp-content/uploads/2024/01/image-18.png',
    link: '#'
  },
  {
    name: 'Наталья Николаевна Толстых',
    position: 'Главный бухгалтер',
    image: '/wp-content/uploads/2024/01/image-17.png',
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
