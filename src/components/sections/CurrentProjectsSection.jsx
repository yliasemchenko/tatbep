import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import { projectsInWork } from '../../data/projects'
import DragCursor from '../DragCursor'
import { Arrow, Photo, SectionHead, pad } from '../ui'

const illustrations = [
  '/assets/img/nov-tes.webp',
  '/assets/img/niz-kamsk.jpg',
  '/assets/img/perm-tes.jpg',
  '/assets/img/tes-4.jpg',
  '/assets/img/about/terms/4.webp',
  '/assets/img/main_bg2.jpg',
  '/assets/img/mask2.png'
]

const slides = projectsInWork.reduce((acc, p) => {
  const used = acc.filter((s) => s.illustration).length
  return [...acc, p.image ? { ...p, illustration: false } : { ...p, image: illustrations[used % illustrations.length], illustration: true }]
}, [])

function CurrentProjectsSection() {
  const sliderRef = useRef(null)
  const fillRef = useRef(null)
  const [range, setRange] = useState({ first: 1, last: 1 })

  const sync = (swiper) => {
    const perView = Math.floor(swiper.params.slidesPerView) || 1
    const first = swiper.activeIndex + 1
    const last = Math.min(slides.length, first + perView - 1)
    setRange((r) => (r.first === first && r.last === last ? r : { first, last }))
    paint(swiper)
  }
  const paint = (swiper) => {
    if (fillRef.current) fillRef.current.style.transform = `scaleX(${Math.max(0.04, Math.min(1, swiper.progress))})`
  }

  return (
    <section className="sec" id="in-work">
      <div className="wrap">
        <SectionHead
          index={3}
          label="Сейчас в работе"
          title="Проекты, над которыми работаем сейчас"
          aside={
            <div className="slider-head-nav">
              <button type="button" className="snav inwork-prev" aria-label="Предыдущие проекты"><Arrow dir="left" /></button>
              <button type="button" className="snav inwork-next" aria-label="Следующие проекты"><Arrow /></button>
            </div>
          }
        />
        <div className="drag-zone" ref={sliderRef}>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={24}
          slidesPerView={1.15}
          navigation={{ prevEl: '.inwork-prev', nextEl: '.inwork-next' }}
          breakpoints={{ 640: { slidesPerView: 2.1 }, 1024: { slidesPerView: 3.2 }, 1280: { slidesPerView: 4 } }}
          onInit={sync}
          onSlideChange={sync}
          onProgress={paint}
          onBreakpoint={sync}
        >
          {slides.map((p, i) => (
            <SwiperSlide key={p.id}>
              <article className="slide-card">
                <div className="slide-card__meta">
                  <span className="cap cap--blue">{pad(i + 1)}</span>
                  <span className="cap">{p.stages}</span>
                </div>
                <Photo
                  className="slide-card__media"
                  src={p.image}
                  alt={p.illustration ? '' : p.object}
                  caption={p.illustration ? 'Иллюстрация' : null}
                />
                <h3>{p.object}</h3>
                <p className="cust">{p.customer}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <DragCursor targetRef={sliderRef} />
        </div>
        <div className="slider-meter" aria-hidden="true">
          <span className="slider-meter__count">
            {pad(range.first)}{range.last > range.first ? `–${pad(range.last)}` : ''} / {pad(slides.length)}
          </span>
          <span className="slider-meter__track">
            <span className="slider-meter__fill" ref={fillRef} />
          </span>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/proekty/referenczii?year=в работе" className="link-arrow">Все проекты в работе <Arrow /></Link>
        </div>
      </div>
    </section>
  )
}

export default CurrentProjectsSection
