import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { traditions } from './career/CareerMain'

function TraditionsSection() {
  return (
    <section id="traditions">
      <div className="container">
        <h2 className="big">у нас <span>принято</span></h2>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-traditions',
            prevEl: '.swiper-button-prev-traditions'
          }}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 1,
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
            <div className="swiper-button-prev swiper-button-prev-traditions"></div>
            <div className="swiper-button-next swiper-button-next-traditions"></div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default TraditionsSection
