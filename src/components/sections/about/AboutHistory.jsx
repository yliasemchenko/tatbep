import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import 'swiper/css'
import { history } from '../../../data/company'
import { inkStyle, useInk } from '../../../motion'
import { Arrow, SectionHead } from '../../ui'

function AboutHistory() {
  const [swiper, setSwiper] = useState(null)
  const [active, setActive] = useState(0)
  const yearsRef = useRef(null)
  const ink = useInk(yearsRef, '.timeline__year.active', [active])

  return (
    <section className="sec" id="history">
      <div className="wrap">
        <SectionHead index={3} label="История" title="От первых разделов до парогазовых блоков" />
        <div className="timeline">
          <div className="timeline__years" role="tablist" aria-label="Годы" ref={yearsRef}>
            {history.map((item, i) => (
              <button
                key={item.year}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`timeline__year${i === active ? ' active' : ''}`}
                onClick={() => swiper?.slideTo(i)}
              >
                {item.year}
              </button>
            ))}
            <span className="timeline__ink" aria-hidden="true" style={inkStyle(ink)} />
          </div>
          <Swiper
            modules={[Navigation, A11y]}
            onSwiper={setSwiper}
            onSlideChange={(s) => setActive(s.activeIndex)}
            spaceBetween={40}
            slidesPerView={1}
            autoHeight
            navigation={{ prevEl: '.history-prev', nextEl: '.history-next' }}
          >
            {history.map((item) => (
              <SwiperSlide key={item.year}>
                <div className="timeline__slide">
                  <p className="timeline__big"><span>{item.year}</span></p>
                  <p className="timeline__text">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="timeline__nav">
            <button type="button" className="snav history-prev" aria-label="Предыдущий год"><Arrow dir="left" /></button>
            <button type="button" className="snav history-next" aria-label="Следующий год"><Arrow /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHistory
