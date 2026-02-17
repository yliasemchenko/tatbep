import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'

const objects = [
  {
    title: 'ПГУ-250 МВт ПАО «Казаньоргсинтез»',
    description: 'Разработка проектной и рабочей документации, авторский надзор. В работе.',
    image: '/assets/img/perm-tes.jpg',
    stat: { value: '250 МВт', description: 'установленная мощность ПГУ' },
    customer: 'ПАО «Казаньоргсинтез»',
    period: 'в работе',
    link: '/proekty/referenczii'
  },
  {
    title: 'ПГУ-236 МВт Набережно-Челнинская ТЭЦ',
    description: 'Разработка проектной и рабочей документации. Завершено в 2025 г.',
    image: '/assets/img/niznekamsk-tes.jpg',
    stat: { value: '236 МВт', description: 'установленная мощность ПГУ' },
    customer: 'Набережно-Челнинская ТЭЦ',
    period: '2025 г.',
    link: '/proekty/referenczii'
  },
  {
    title: 'ПГУ-495 МВт ПАО «Нижнекамскнефтехим»',
    description: 'Разработка проектной и рабочей документации, авторский надзор.',
    image: '/assets/img/niz-kamsk.jpg',
    stat: { value: '495 МВт', description: 'установленная мощность ПГУ' },
    customer: 'ПАО «Нижнекамскнефтехим»',
    period: '2021 г.',
    link: '/proekty/referenczii'
  },
  {
    title: 'Приморская ГРЭС',
    description: 'Модернизация блоков №№ 2;3;4;6;7;9 с целью увеличения числа часов использования установленной мощности.',
    image: '/assets/img/perm-tes.jpg',
    stat: { value: '9 блоков', description: 'модернизация' },
    customer: 'Приморская ГРЭС',
    period: 'в работе',
    link: '/proekty/referenczii'
  },
  {
    title: '4×ПГУ-110 МВт Прегольская ТЭЦ',
    description: 'Реконструкция существующей системы оборотного охлаждения.',
    image: '/assets/img/nov-tes.webp',
    stat: { value: '440 МВт', description: 'суммарная мощность' },
    customer: 'АО «Интер РАО – Электрогенерация»',
    period: '2023 г.',
    link: '/proekty/referenczii'
  },
  {
    title: 'ООО «Нижнекамская ТЭЦ»',
    description: 'Перевод турбоагрегата ст.№3 в работу в цикле ПГУ с установкой ГТУ – 155 МВт.',
    image: '/assets/img/niz-kamsk.jpg',
    stat: { value: '155 МВт', description: 'мощность ГТУ' },
    customer: 'ООО «Нижнекамская ТЭЦ»',
    period: 'в работе',
    link: '/proekty/referenczii'
  }
]

function ObjectsSection() {
  return (
    <section id="object">
      <div className="container">
        <h2 className="big">
          объекты, построенные <br />
          <span>по проектам</span> Татбелэнергопроект
        </h2>
        <div className="swiper swiper_object">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-object',
              nextEl: '.swiper-button-next-object'
            }}
            pagination={{
              el: '.swiper-pagination-obj',
              clickable: true
            }}
            breakpoints={{
              1024: {
                slidesPerView: 1
              }
            }}
          >
            {objects.map((object, index) => (
              <SwiperSlide key={index}>
                <Link to={object.link} className="object_row">
                  <div className="object_main">
                    <div className="object_main_text">
                      <h3>{object.title}</h3>
                      <p>{object.description}</p>
                    </div>
                    <div className="object_main_bg">
                      <img src={object.image} alt={object.title} />
                    </div>
                  </div>
                  <div className="object_column">
                    <div className="object_div">
                      <div className="big">
                        <h3>{object.stat.value}</h3>
                      </div>
                      <p>{object.stat.description}</p>
                    </div>
                    <div className="object_div object_div_semi">
                      <p>Заказчик: {object.customer}</p>
                    </div>
                    <div className="object_div object_div_dark">
                      <p>{object.period}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper_end">
          <div className="swiper-navigation">
            <div className="swiper-button-prev swiper-button-prev-object"></div>
            <div className="swiper-pagination-obj"></div>
            <div className="swiper-button-next swiper-button-next-object"></div>
          </div>
          <Link to="/proekty" className="btn_main_green_project_main">
            Смотреть все проекты
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ObjectsSection
