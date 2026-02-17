import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const arrowRightIcon = '/assets/img/icons/arrow_right.svg'

const clients = [
  {
    name: 'АО «Интер РАО – Электрогенерация»',
    description: 'Крупная российская генерирующая компания. Заказчик проектов по модернизации, реконструкции и развитию тепловых электростанций.',
    logo: '/assets/img/clients/inter.webp'
  },
  {
    name: 'АО «ТГК-1»',
    description: 'Территориальная генерирующая компания Северо-Западного региона России. Реализованы проекты по строительству и модернизации энергетических объектов.',
    logo: '/assets/img/clients/tgk1.webp'
  },
  {
    name: 'ПАО «СИБУР Холдинг»',
    description: 'Один из крупнейших нефтехимических холдингов России. Выполнены проекты для предприятий группы в части энергетической и производственной инфраструктуры.',
    logo: '/assets/img/clients/sibur.webp'
  },
  {
    name: 'ПАО «Казаньоргсинтез»',
    description: 'Крупное нефтехимическое предприятие. Реализованы проекты по строительству ПГУ, инженерной инфраструктуре и модернизации производственных мощностей.',
    logo: '/assets/img/clients/orgsintes.webp'
  },
  {
    name: 'ПАО «Нижнекамскнефтехим»',
    description: 'Ведущее предприятие нефтехимической отрасли. Выполнены проекты в области энергетической инфраструктуры и газоснабжения производств.',
    logo: '/assets/img/clients/niznekamsk.webp'
  },
  {
    name: 'ПАО «Магнитогорский металлургический комбинат»',
    description: 'Крупнейший металлургический комплекс России. Выполнены проектные работы для энергетических объектов промышленной площадки.',
    logo: '/assets/img/clients/magnitogor.webp'
  },
  {
    name: 'ОАО «Гродно Азот»',
    description: 'Крупное химическое предприятие Республики Беларусь. Реализованы проекты по модернизации технологических и энергетических систем.',
    logo: '/assets/img/clients/grodno.webp'
  },
  {
    name: 'АО «Калужский турбинный завод»',
    description: 'Российский производитель энергетического оборудования. Выполнены проектные работы по расчетам и разработке строительных решений для турбоустановок.',
    logo: '/assets/img/clients/kaluz.webp'
  },
  {
    name: 'АО «Уралэлектромедь»',
    description: 'Предприятие металлургической отрасли. Выполнены проектные работы по строительству мини-ТЭЦ на промышленной площадке.',
    logo: '/assets/img/clients/ural.webp'
  },
  {
    name: 'АО «КЭР-Холдинг»',
    description: 'Инжиниринговый и промышленный холдинг. Реализованы совместные проекты в области энергетического строительства.',
    logo: '/assets/img/clients/kerl.webp'
  },
  {
    name: 'ООО ИЦ «Энергопрогресс»',
    description: 'Инжиниринговая компания в сфере энергетики. Реализуются проекты по разработке проектной и рабочей документации.',
    logo: '/assets/img/clients/energoprogress.webp'
  }
]


function ClientsSection() {
  return (
    <section id="clients">
      <div className="container">
        <h2 className="big">Наши <span>клиенты</span></h2>
        <div className="swiper-relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={100}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-clients',
              nextEl: '.swiper-button-next-clients'
            }}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="swiper swiper_clients"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="client_div">
                  <div className="client_div_plashka">
                    <p>{client.description}</p>
                    <div className="client_div_plashka_footer">
                      <p className="client_name">{client.name}</p>
                      <img src={arrowRightIcon} alt="" />
                    </div>
                  </div>
                  <img src={client.logo} alt={client.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-navigation">
            <div className="swiper-button-prev swiper-button-prev-clients"></div>
            <div className="swiper-button-next swiper-button-next-clients"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
