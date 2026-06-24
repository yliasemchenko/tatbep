import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const historyData = [
  {
    year: 2015,
    image: '/assets/img/team.JPG',
    text: 'ООО «Татбелэнергопроект» образован в июне 2015 г. как дочернее предприятие Управляющей компании «КЭР-Холдинг», г. Казань, Республика Татарстан. Основной костяк вновь созданного Общества составили высококвалифицированные специалисты, ранее работавшие в АО «Зарубежэнергопроект», за плечами которых участие в знаковых объектах РФ и Республики Беларусь: ПГУ-450 ТЭЦ-22 «Южная», Черепетская ГРЭС, Березовская ГРЭС, Казанская ТЭЦ-2 и других.'
  },
  {
    year: 2017,
    image: '/assets/img/projects/main/kazan.JPG',
    text: 'Выполнены проекты: Маяковская и Тalаховская ГТУ-ТЭЦ (системы отопления и вентиляции), ОВК Первомайской ТЭЦ-14, реконструкция производственных помещений корпуса №9 ООО «КЭР-Промстрой», мини-ТЭЦ на площадке АО «Уралэлектромедь».'
  },
  {
    year: 2018,
    image: '/assets/img/projects/main/borisov.jpg',
    text: 'Объединённый вспомогательный корпус Первомайской ТЭЦ-14, релейная защита Прегольской, Маяковской и Талаховской ГТУ-ТЭЦ. Реконструкция котельной «Морочь», Республика Беларусь.'
  },
  {
    year: 2019,
    image: '/assets/img/projects/main/elabug.jpg',
    text: 'ГТУ-ТЭЦ-20 МВт в г. Елабуга, технико-экономический расчёт целесообразности строительства ПГУ-250 МВт ПАО «Казаньоргсинтез».'
  },
  {
    year: 2020,
    image: '/assets/img/projects/main/nknx.jpg',
    text: 'Нижнекамская ТЭЦ: техперевооружение тепловой схемы. ПАО «Нижнекамскнефтехим»: подача природного газа на завод «Этилен».'
  },
  {
    year: 2021,
    image: '/assets/img/projects/main/promgres.JPG',
    text: 'ПГУ-495 МВт ПАО «Нижнекамскнефтехим», Норильская ТЭЦ-2 (реконструкция энергоблоков №1 и №2), Пермская ТЭЦ-9, ГТУ-ТЭС 25 МВт в Зеленодольске.'
  },
  {
    year: 2022,
    image: '/assets/img/projects/main/zabniftehim.jpeg',
    text: 'Минская ТЭЦ-4, ТЭС «Сирик» (Иран): система охлаждения, глубинный водозабор, фундаменты под турбоустановки.'
  },
  {
    year: 2023,
    image: '/assets/img/projects/main/kos.jpg',
    text: 'Охладительная установка ОАО «Гродно Азот», Пермская ТЭЦ-9, Норильская ТЭЦ-2, Прегольская ТЭЦ (4×ПГУ-110 МВт), утилизационная ПВС ММК, Твердотопливная ТЭС-130 МВт (Афганистан).'
  },
  {
    year: 2024,
    image: '/assets/img/career2.webp',
    text: 'Новоленская ТЭС (ВПУ), стенд ПТУ-74 для Калужского турбинного завода, УМИ производств Пиролиза и Полиэтилена ПАО «Казаньоргсинтез», модернизация Ириклинской ГРЭС.'
  },
  {
    year: 2025,
    image: '/assets/img/team2.JPG',
    text: 'С июля 2025 г. Общество является дочерним предприятием ООО ИЦ «Энергопрогресс», г. Казань. Временные схемы паровых продувок ПГУ-250 МВт, ПГУ-236 МВт Набережно-Челнинская ТЭЦ. В работе: ПГУ-250 МВт «Казаньоргсинтез», ПГУ-236 МВт, Приморская ГРЭС, объекты СИБУР и др.'
  }
]

function AboutHistory() {
  const [yearsSwiper, setYearsSwiper] = useState(null)

  const syncYears = (index) => {
    if (yearsSwiper && !yearsSwiper.destroyed) {
      yearsSwiper.slideTo(index)
    }
  }

  return (
    <section id="history_about">
      <div className="container">
        <div className="history_about_top">
          <h2 className="big">история <span>компании</span></h2>
        </div>
        <div className="swiper_history_column">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoHeight={false}
            onSlideChange={(swiper) => syncYears(swiper.activeIndex)}
            navigation={{
              prevEl: '.swiper-button-prev-history',
              nextEl: '.swiper-button-next-history'
            }}
            className="swiper swiper_history_about"
          >
            {historyData.map((item) => (
              <SwiperSlide key={item.year}>
                <div className="history_about_div">
                  <div className="history_about_media">
                    <div className="history_about_img">
                      <img src={item.image} alt={`История компании ${item.year}`} />
                    </div>
                  </div>
                  <div className="history_about_text">
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
            <div className="history_years_bar">
              <Swiper
                onSwiper={setYearsSwiper}
                slidesPerView={1}
                allowTouchMove={false}
                speed={400}
                className="swiper swiper_history_years"
              >
                {historyData.map((item) => (
                  <SwiperSlide key={item.year}>
                    <div className="history_year">{item.year}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHistory
