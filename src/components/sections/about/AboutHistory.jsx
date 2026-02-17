import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const historyData = [
  { year: 2015, videoId: null, text: 'ООО «Татбелэнергопроект» образован в июне 2015 г. как дочернее предприятие Управляющей компании «КЭР-Холдинг», г. Казань, Республика Татарстан. Основной костяк вновь созданного Общества составили высококвалифицированные специалисты, ранее работавшие в АО «Зарубежэнергопроект», за плечами которых участие в знаковых объектах РФ и Республики Беларусь: ПГУ-450 ТЭЦ-22 «Южная», Черепетская ГРЭС, Березовская ГРЭС, Казанская ТЭЦ-2 и других.' },
  { year: 2017, videoId: null, text: 'Выполнены проекты: Маяковская и Талаховская ГТУ-ТЭЦ (системы отопления и вентиляции), ОВК Первомайской ТЭЦ-14, реконструкция производственных помещений корпуса №9 ООО «КЭР-Промстрой», мини-ТЭЦ на площадке АО «Уралэлектромедь».' },
  { year: 2018, videoId: null, text: 'Объединённый вспомогательный корпус Первомайской ТЭЦ-14, релейная защита Прегольской, Маяковской и Талаховской ГТУ-ТЭЦ. Реконструкция котельной «Морочь», Республика Беларусь.' },
  { year: 2019, videoId: null, text: 'ГТУ-ТЭЦ-20 МВт в г. Елабуга, технико-экономический расчёт целесообразности строительства ПГУ-250 МВт ПАО «Казаньоргсинтез».' },
  { year: 2020, videoId: null, text: 'Нижнекамская ТЭЦ: техперевооружение тепловой схемы. ПАО «Нижнекамскнефтехим»: подача природного газа на завод «Этилен».' },
  { year: 2021, videoId: null, text: 'ПГУ-495 МВт ПАО «Нижнекамскнефтехим», Норильская ТЭЦ-2 (реконструкция энергоблоков №1 и №2), Пермская ТЭЦ-9, ГТУ-ТЭС 25 МВт в Зеленодольске.' },
  { year: 2022, videoId: null, text: 'Минская ТЭЦ-4, ТЭС «Сирик» (Иран): система охлаждения, глубинный водозабор, фундаменты под турбоустановки.' },
  { year: 2023, videoId: null, text: 'Охладительная установка ОАО «Гродно Азот», Пермская ТЭЦ-9, Норильская ТЭЦ-2, Прегольская ТЭЦ (4×ПГУ-110 МВт), утилизационная ПВС ММК, Твердотопливная ТЭС-130 МВт (Афганистан).' },
  { year: 2024, videoId: null, text: 'Новоленская ТЭС (ВПУ), стенд ПТУ-74 для Калужского турбинного завода, УМИ производств Пиролиза и Полиэтилена ПАО «Казаньоргсинтез», модернизация Ириклинской ГРЭС.' },
  { year: 2025, videoId: null, text: 'С июля 2025 г. Общество является дочерним предприятием ООО ИЦ «Энергопрогресс», г. Казань. Временные схемы паровых продувок ПГУ-250 МВт, ПГУ-236 МВт Набережно-Челнинская ТЭЦ. В работе: ПГУ-250 МВт «Казаньоргсинтез», ПГУ-236 МВт, Приморская ГРЭС, объекты СИБУР и др.' }
]

function AboutHistory() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <section id="history_about">
      <div className="container">
        <div className="history_about_top">
          <h2 className="big">история <span>компании</span></h2>
        </div>
        <div className="swiper_history_column">
          <Swiper
            modules={[Navigation, Thumbs]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-history',
              nextEl: '.swiper-button-next-history'
            }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            className="swiper swiper_history_about"
          >
            {historyData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="history_about_div">
                  <div className="col-lg-6">
                    {item.videoId ? (
                      <lite-youtube videoid={item.videoId}></lite-youtube>
                    ) : item.image ? (
                      <img src={item.image} alt={`История ${item.year}`} />
                    ) : null}
                  </div>
                  <div className="col-lg-4">
                    <p>{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper_history_bottom">
            <div className="swiper-navigation">
              <div className="swiper-button-prev swiper-button-prev-history"></div>
              <div className="swiper-button-next swiper-button-next-history"></div>
            </div>
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView="auto"
              freeMode={true}
              watchSlidesProgress={true}
              className="swiper swiper_thumbnail_history"
            >
              {historyData.map((item, index) => (
                <SwiperSlide key={index}>
                  <p className="history_year">{item.year}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHistory
