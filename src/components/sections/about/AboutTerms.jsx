import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const terms = [
  {
    id: 'one',
    title: 'Экологичность',
    image: '/assets/img/about/terms/1.webp',
    description: 'Предлагаем к внедрению на энергообъектах современные мировые экологические и энергоэффективные решения'
  },
  {
    id: 'two',
    title: 'Инновационность',
    image: '/assets/img/about/terms/2.webp',
    description: 'Разрабатываем и внедряем собственные инновационные решения для экологизации промышленной и большой энергетики'
  },
  {
    id: 'three',
    title: 'Своя инженерная школа',
    image: '/assets/img/about/terms/3.webp',
    description: 'Придерживаемся базовых принципов честности и максимальной пользы для заказчика и конечного потребителя'
  },
  {
    id: 'four',
    title: 'Профессионализм',
    image: '/assets/img/about/terms/4.webp',
    description: 'Используем компетенции и экспертность в большой энергетике для повышения эффективности работы энергообъектов промышленных и целлюлозно-бумажных предприятий'
  }
]

function AboutTerms() {
  const [activeTerm, setActiveTerm] = useState('one')

  return (
    <section id="about_terms">
      <div className="container">
        <div className="about_terms_top">
          <h2 className="big">Татбелэнергопроект — это</h2>
          <p>надёжная, работоспособная, устойчивая, востребованная команда единомышленников, стремящаяся к новому и даже возглавляющая перемены в энергетической отрасли</p>
        </div>
        <div className="terms_row">
          {terms.map((term, index) => (
            <div
              key={term.id}
              className={`terms_div terms_div_${term.id} ${activeTerm === term.id ? 'terms_div_active' : ''}`}
              onMouseEnter={() => setActiveTerm(term.id)}
            >
              <div className="terms_body">
                <div className="terms_body_img">
                  <img src={term.image} alt={term.title} />
                </div>
                <p>{term.description}</p>
              </div>
              <div className={`terms_left terms_left_${term.id} ${activeTerm === term.id ? 'terms_left_active' : ''} ${term.id === 'four' ? 'terms_left_disable' : ''}`}>
                <p>{term.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="terms_mobile">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-terms',
              nextEl: '.swiper-button-next-terms'
            }}
            className="swiper swiper_terms"
          >
            {terms.map((term) => (
              <SwiperSlide key={term.id}>
                <div className={`terms_mobile_div terms_mobile_div_${term.id}`}>
                  <h3>{term.title}</h3>
                  <div className="terms_mobile_div_img">
                    <img src={term.image} alt={term.title} />
                  </div>
                  <p>{term.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-navigation">
            <div className="swiper-button-prev swiper-button-prev-terms"></div>
            <div className="swiper-button-next swiper-button-next-terms"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTerms
