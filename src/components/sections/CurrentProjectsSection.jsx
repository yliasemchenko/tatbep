import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'

const projects = [
  {
    image: '/assets/img/niznekamsk-tes.jpg',
    customer: 'ООО “Нижнекамская ТЭЦ”',
    period: 'В работе',
    title: 'Перевод турбоагрегата ст.№3 в работу в цикле ПГУ с установкой ГТУ – 155 МВт',
    link: '#'
  },
  {
    image: '/assets/img/nov-tes.webp',
    customer: 'ПГУ-250 МВт ПАО “Казаньоргсинтез”',
    period: 'В работе',
    title: 'Проект ПГУ-250 МВт',
    link: '/proekty/referenczii'
  },
  {
    image: '/assets/img/niz-kamsk.jpg',
    customer: 'ПАО “Казаньоргсинтез”',
    period: 'В работе',
    title: 'Пункт подготовки газа на территории ПАО “Казаньоргсинтез”',
    link: '/proekty/referenczii'
  },
  {
    image: '/assets/img/niz-kamsk.jpg',
    customer: 'ПГУ-250 МВт и ПАО “Казаньоргсинтез”',
    period: 'В работе',
    title: 'Инженерные сети и сооружения за пределами площадок ПГУ-250 МВт и ПАО “Казаньоргсинтез”',
    link: '/proekty/referenczii'
  },
  {
    image: '/assets/img/perm-tes.jpg',
    customer: 'Приморская ГРЭС',
    period: 'В работе',
    title: 'Модернизация блоков №№ 2;3;4;6;7;9 с целью увеличения числа часов использования установленной мощности',
    link: '/proekty/referenczii'
  },
  {
    image: '/assets/img/nov-tes.webp',
    customer: 'ООО “Запсибнефтехим”, ПАО “СИБУР”',
    period: 'В работе',
    title: 'Реконструкция ВПУ производства ЭТП',
    link: '/proekty/referenczii'
  },
  {
    image: '/assets/img/niznekamsk-tes.jpg',
    customer: 'ООО “Запсибнефтехим”, ПАО “СИБУР”',
    period: 'В работе',
    title: 'Техническое перевооружение узла слива соляной кислоты склада химреагентов',
    link: '/proekty/referenczii'
  },
  {
    image: '/assets/img/nov-tes.webp',
    customer: 'ООО “Запсибнефтехим”, ПАО “СИБУР”',
    period: 'В работе',
    title: 'Воздухоразделительная установка (ВРУ) для обеспечения техническими газами',
    link: '/proekty/referenczii'
  },
  {
    image: '/assets/img/niz-kamsk.jpg',
    customer: 'Набережно-Челнинская ТЭЦ',
    period: 'В работе',
    title: 'ПГУ-236 МВт',
    link: '/proekty/referenczii'
  },
  {
    image: '/assets/img/niznekamsk-tes.jpg',
    customer: 'ПАО “Казаньоргсинтез”',
    period: 'В работе',
    title: 'Увеличение межремонтного интервала (УМИ) производств Пиролиза и Полиэтилена',
    link: '/proekty/referenczii'
  },
  {
    image: '/assets/img/nov-tes.webp',
    customer: '“Стабна”, Республика Татарстан',
    period: 'В работе',
    title: 'Системы отопления и вентиляции ПС-110 кВ',
    link: '#'
  }
]


function CurrentProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <div className="proects_header">
          <h2 className="big">текущие <span>проекты</span></h2>
          <Link to="/proekty" className="btn_main btn_main_blue">все проекты</Link>
        </div>
        <div className="swiper-relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-projects',
              nextEl: '.swiper-button-next-projects'
            }}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="swiper swiper_projects"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Link to={project.link} className="projects_div">
                  <div className="projects_div_img">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div>
                    <p><strong>Заказчик:</strong> {project.customer}</p>
                    <p><strong>Период работ:</strong> {project.period}</p>
                    <p>{project.title}</p>
                    <div className="footer_project">
                      <p>Подробнее</p>
                      {/* <img className="arrow" src={arrowRightIcon} alt="" /> */}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-navigation">
            <div className="swiper-button-prev swiper-button-prev-projects"></div>
            <div className="swiper-button-next swiper-button-next-projects"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurrentProjectsSection
