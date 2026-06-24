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
    description:
      'Предлагаем к внедрению на энергообъектах современные мировые экологические и энергоэффективные решения'
  },
  {
    id: 'two',
    title: 'Инновационность',
    image: '/assets/img/about/terms/2.webp',
    description:
      'Разрабатываем и внедряем собственные инновационные решения для экологизации промышленной и большой энергетики'
  },
  {
    id: 'three',
    title: 'Профессионализм',
    image: '/assets/img/about/terms/3.webp',
    description:
      'Используем компетенции и экспертность в большой энергетике для повышения эффективности работы энергообъектов промышленных и целлюлозно-бумажных предприятий'
  }
]

function AboutTerms() {
  const [activeTerm, setActiveTerm] = useState('one')

  return (
    <section id="about_terms">
      <div className="container">

        {/* ===== DESKTOP ===== */}
        <div className="terms_row">
          {terms.map((term, index) => {
            const isActive = activeTerm === term.id

            return (
              <div
                key={term.id}
                className={`terms_div terms_div_${term.id}`}
                style={{
                  zIndex: isActive ? 30 : 10 - index
                }}
                onMouseEnter={() => setActiveTerm(term.id)}
              >
                <div
                  className={`terms_body ${
                    isActive ? 'terms_body_active' : ''
                  }`}
                >
                  <div className="terms_body_img">
                    <img src={term.image} alt={term.title} />
                  </div>
                  <p>{term.description}</p>
                </div>

                <div
                  className={`terms_left ${
                    isActive ? 'terms_left_active' : ''
                  }`}
                >
                  <p>{term.title}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ===== MOBILE ===== */}
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
