import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import 'swiper/css'
import { departments } from '../../../data/company'
import { Arrow, PhotoSlot, SectionHead, Todo, pad } from '../../ui'

function AboutTeam() {
  const missing = departments.some((d) => !d.photo)

  return (
    <section className="sec" id="departments">
      <div className="wrap">
        <SectionHead
          index={5}
          label="Отделы"
          title={`${departments.length} отделов — все разделы проекта в одной компании`}
          lead={missing ? <Todo>общие фото сотрудников каждого отдела — сейчас стоят заглушки</Todo> : null}
          aside={
            <div className="slider-head-nav">
              <button type="button" className="snav dept-prev" aria-label="Предыдущие отделы"><Arrow dir="left" /></button>
              <button type="button" className="snav dept-next" aria-label="Следующие отделы"><Arrow /></button>
            </div>
          }
        />
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={1.1}
          navigation={{ prevEl: '.dept-prev', nextEl: '.dept-next' }}
          breakpoints={{ 640: { slidesPerView: 2.1 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 3.4 } }}
        >
          {departments.map((d, i) => (
            <SwiperSlide key={d.title}>
              <article className="dept-card">
                <PhotoSlot className="dept-card__photo" src={d.photo} alt={`${d.title} отдел`} mark="" note="Фото отдела" />
                <div className="dept-card__body">
                  <span className="num">{pad(i + 1)}</span>
                  <h3 className="h3">{d.title}</h3>
                  <p>{d.text}</p>
                  <p className="head">
                    <span className="cap">Начальник отдела</span>
                    <strong>{d.head}</strong>
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default AboutTeam
